// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title GenesisEscrow
 * @notice Milestone-gated vault for Genesis Campaign with tiered pricing and capacity tracking
 * @dev Tracks both immediate capital (Fans/Brands) and capacity commits (Promoters)
 */
contract GenesisEscrow is ReentrancyGuard, Pausable, Ownable {
    // Campaign parameters
    string public campaignName;
    address public treasuryWallet;
    uint256 public fundingGoal;
    uint256 public deadline;
    uint256 public currentAmount;
    bool public goalMet;
    bool public fundsReleased;
    
    // Stakeholder role tracking
    enum StakeholderRole { FAN, BRAND, PROMOTER }
    enum PaymentType { LIFETIME_TICKET, BRAND_CAPACITY, PROMOTER_LICENSE }
    
    // Tier tracking for each role
    struct TierInfo {
        uint256 currentTier;
        uint256 totalSold;
        uint256 tierRevenue;
    }
    
    mapping(StakeholderRole => TierInfo) public roleTiers;
    
    // Contribution tracking
    mapping(address => uint256) public contributions;
    mapping(address => StakeholderRole) public contributorRole;
    mapping(address => bool) public hasRefunded;
    address[] public contributors;
    
    struct Payment {
        address contributor;
        uint256 amount;
        PaymentType paymentType;
        StakeholderRole role;
        uint256 tier;
        uint256 timestamp;
    }
    
    Payment[] public payments;
    
    // Capacity commits for promoters (not immediate revenue)
    uint256 public promoterCapacityCommits;
    mapping(address => bool) public isPromoter;
    address[] public promoters;
    
    // Events
    event ContributionReceived(
        address indexed contributor,
        uint256 amount,
        PaymentType paymentType,
        StakeholderRole role,
        uint256 tier,
        uint256 timestamp
    );
    event TierAdvanced(StakeholderRole role, uint256 newTier, uint256 timestamp);
    event GoalReached(uint256 totalAmount, uint256 timestamp);
    event FundsReleased(address indexed treasury, uint256 amount);
    event RefundIssued(address indexed contributor, uint256 amount);
    event DeadlineExtended(uint256 newDeadline);
    event PromoterCapacityCommitted(address indexed promoter, uint256 tier);
    
    /**
     * @notice Initialize the Genesis Campaign
     * @param _campaignName Name of the campaign
     * @param _treasuryWallet Wallet address to receive funds
     * @param _fundingGoal Target amount in wei ($15M)
     */
    constructor(
        string memory _campaignName,
        address _treasuryWallet,
        uint256 _fundingGoal
    ) {
        require(_treasuryWallet != address(0), "Invalid treasury wallet");
        require(_fundingGoal > 0, "Goal must be positive");
        
        campaignName = _campaignName;
        treasuryWallet = _treasuryWallet;
        fundingGoal = _fundingGoal;
        deadline = block.timestamp + 45 days;
        goalMet = false;
        fundsReleased = false;
        
        // Initialize tier tracking
        roleTiers[StakeholderRole.FAN] = TierInfo(1, 0, 0);
        roleTiers[StakeholderRole.BRAND] = TierInfo(1, 0, 0);
        roleTiers[StakeholderRole.PROMOTER] = TierInfo(1, 0, 0);
    }
    
    /**
     * @notice Record a contribution from ticket/brand/promoter purchase
     * @param _contributor Address of the contributor
     * @param _paymentType Type of payment
     * @param _role Stakeholder role
     * @param _tier Current tier of purchase
     */
    function recordContribution(
        address _contributor,
        PaymentType _paymentType,
        StakeholderRole _role,
        uint256 _tier
    ) external payable nonReentrant whenNotPaused {
        require(block.timestamp < deadline, "Campaign has ended");
        require(msg.value > 0 || _role == StakeholderRole.PROMOTER, "Contribution must be positive");
        require(!goalMet, "Goal already met");
        
        // Track first-time contributors
        if (contributions[_contributor] == 0 && _role != StakeholderRole.PROMOTER) {
            contributors.push(_contributor);
            contributorRole[_contributor] = _role;
        }
        
        // Handle promoter capacity commits (no immediate payment)
        if (_role == StakeholderRole.PROMOTER) {
            if (!isPromoter[_contributor]) {
                promoters.push(_contributor);
                isPromoter[_contributor] = true;
            }
            promoterCapacityCommits++;
            roleTiers[StakeholderRole.PROMOTER].totalSold++;
            
            emit PromoterCapacityCommitted(_contributor, _tier);
        } else {
            // Update contribution tracking for Fans and Brands
            contributions[_contributor] += msg.value;
            currentAmount += msg.value;
            
            // Update role tier info
            roleTiers[_role].totalSold++;
            roleTiers[_role].tierRevenue += msg.value;
        }
        
        // Record payment details
        payments.push(Payment({
            contributor: _contributor,
            amount: msg.value,
            paymentType: _paymentType,
            role: _role,
            tier: _tier,
            timestamp: block.timestamp
        }));
        
        emit ContributionReceived(_contributor, msg.value, _paymentType, _role, _tier, block.timestamp);
        
        // Check if goal is reached
        if (currentAmount >= fundingGoal && !goalMet) {
            goalMet = true;
            emit GoalReached(currentAmount, block.timestamp);
        }
    }
    
    /**
     * @notice Advance tier for a role (called by role-specific contracts)
     * @param _role Stakeholder role
     * @param _newTier New tier number
     */
    function advanceTier(StakeholderRole _role, uint256 _newTier) external onlyOwner {
        require(_newTier > roleTiers[_role].currentTier, "Must advance tier");
        roleTiers[_role].currentTier = _newTier;
        emit TierAdvanced(_role, _newTier, block.timestamp);
    }
    
    /**
     * @notice Release funds to treasury (only if goal met)
     * @dev Can be called by anyone after deadline if goal is met
     */
    function releaseFunds() external nonReentrant {
        require(block.timestamp >= deadline, "Campaign still active");
        require(goalMet, "Goal not met");
        require(!fundsReleased, "Funds already released");
        require(currentAmount > 0, "No funds to release");
        
        fundsReleased = true;
        
        // Transfer all funds to treasury
        (bool success, ) = treasuryWallet.call{value: currentAmount}("");
        require(success, "Treasury transfer failed");
        
        emit FundsReleased(treasuryWallet, currentAmount);
    }
    
    /**
     * @notice Request refund if goal not met after deadline
     * @dev Contributors can claim their full contribution back
     */
    function requestRefund() external nonReentrant {
        require(block.timestamp >= deadline, "Campaign still active");
        require(!goalMet, "Goal was met - no refunds");
        require(contributions[msg.sender] > 0, "No contribution found");
        require(!hasRefunded[msg.sender], "Already refunded");
        
        uint256 refundAmount = contributions[msg.sender];
        hasRefunded[msg.sender] = true;
        contributions[msg.sender] = 0;
        
        // Transfer refund
        (bool success, ) = msg.sender.call{value: refundAmount}("");
        require(success, "Refund transfer failed");
        
        emit RefundIssued(msg.sender, refundAmount);
    }
    
    /**
     * @notice Batch refund for multiple contributors (gas optimization)
     * @param _contributors Array of contributor addresses to refund
     */
    function batchRefund(address[] calldata _contributors) external nonReentrant onlyOwner {
        require(block.timestamp >= deadline, "Campaign still active");
        require(!goalMet, "Goal was met - no refunds");
        
        for (uint256 i = 0; i < _contributors.length; i++) {
            address contributor = _contributors[i];
            
            if (contributions[contributor] > 0 && !hasRefunded[contributor]) {
                uint256 refundAmount = contributions[contributor];
                hasRefunded[contributor] = true;
                contributions[contributor] = 0;
                
                (bool success, ) = contributor.call{value: refundAmount}("");
                if (success) {
                    emit RefundIssued(contributor, refundAmount);
                }
            }
        }
    }
    
    /**
     * @notice Extend deadline in case of technical issues (owner only)
     * @param _additionalDays Number of days to extend
     */
    function extendDeadline(uint256 _additionalDays) external onlyOwner {
        require(block.timestamp < deadline, "Campaign already ended");
        require(_additionalDays > 0 && _additionalDays <= 30, "Invalid extension");
        
        deadline += _additionalDays * 1 days;
        emit DeadlineExtended(deadline);
    }
    
    /**
     * @notice Emergency pause (owner only)
     */
    function pause() external onlyOwner {
        _pause();
    }
    
    /**
     * @notice Unpause (owner only)
     */
    function unpause() external onlyOwner {
        _unpause();
    }
    
    /**
     * @notice Get campaign status
     */
    function getCampaignStatus() external view returns (
        uint256 _currentAmount,
        uint256 _fundingGoal,
        uint256 _deadline,
        bool _goalMet,
        bool _fundsReleased,
        uint256 _timeRemaining,
        uint256 _percentageFunded
    ) {
        uint256 timeRemaining = block.timestamp < deadline ? deadline - block.timestamp : 0;
        uint256 percentageFunded = fundingGoal > 0 ? (currentAmount * 100) / fundingGoal : 0;
        
        return (
            currentAmount,
            fundingGoal,
            deadline,
            goalMet,
            fundsReleased,
            timeRemaining,
            percentageFunded
        );
    }
    
    /**
     * @notice Get role-specific tier information
     */
    function getRoleTierInfo(StakeholderRole _role) external view returns (
        uint256 currentTier,
        uint256 totalSold,
        uint256 tierRevenue
    ) {
        TierInfo memory info = roleTiers[_role];
        return (info.currentTier, info.totalSold, info.tierRevenue);
    }
    
    /**
     * @notice Get contributor count
     */
    function getContributorCount() external view returns (uint256) {
        return contributors.length;
    }
    
    /**
     * @notice Get promoter count
     */
    function getPromoterCount() external view returns (uint256) {
        return promoters.length;
    }
    
    /**
     * @notice Get payment count
     */
    function getPaymentCount() external view returns (uint256) {
        return payments.length;
    }
    
    /**
     * @notice Get payment details by index
     */
    function getPayment(uint256 index) external view returns (
        address contributor,
        uint256 amount,
        PaymentType paymentType,
        StakeholderRole role,
        uint256 tier,
        uint256 timestamp
    ) {
        require(index < payments.length, "Invalid index");
        Payment memory payment = payments[index];
        return (
            payment.contributor,
            payment.amount,
            payment.paymentType,
            payment.role,
            payment.tier,
            payment.timestamp
        );
    }
}
