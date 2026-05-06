// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title LifetimeTicket
 * @notice ERC-721 NFT for lifetime access to DreamBIG Technology Arena with staged pricing
 * @dev Implements bonding curve with 3 tiers and 10% secondary royalty
 */
contract LifetimeTicket is ERC721, ERC721Enumerable, ERC721Royalty, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    address public escrowContract;
    string public baseTokenURI;
    bool public saleIsActive = false;
    
    // Staged pricing tiers
    struct PricingTier {
        uint256 price;
        uint256 supply;
        uint256 minted;
    }
    
    PricingTier[3] public tiers;
    uint256 public currentTier = 0;
    
    // Ticket info
    struct TicketInfo {
        uint256 tier;
        uint256 purchasePrice;
        uint256 purchaseTimestamp;
        bool isLifetime;
    }
    
    mapping(uint256 => TicketInfo) public ticketInfo;
    
    // Events
    event TicketMinted(
        address indexed buyer,
        uint256 indexed tokenId,
        uint256 tier,
        uint256 price
    );
    event TierAdvanced(uint256 newTier, uint256 timestamp);
    event SaleStateChanged(bool isActive);
    
    /**
     * @notice Initialize lifetime ticket contract
     * @param _name Collection name
     * @param _symbol Collection symbol
     * @param _escrowContract Address of escrow contract
     * @param _baseTokenURI Base URI for metadata
     */
    constructor(
        string memory _name,
        string memory _symbol,
        address _escrowContract,
        string memory _baseTokenURI
    ) ERC721(_name, _symbol) {
        require(_escrowContract != address(0), "Invalid escrow address");
        
        escrowContract = _escrowContract;
        baseTokenURI = _baseTokenURI;
        
        // Set staged pricing tiers
        // Tier 1: Early Bird - $500 (1,000 units)
        tiers[0] = PricingTier({
            price: 0.5 ether,  // ~$500 at $1000/ETH
            supply: 1000,
            minted: 0
        });
        
        // Tier 2: Genesis Standard - $1,200 (4,000 units)
        tiers[1] = PricingTier({
            price: 1.2 ether,  // ~$1,200
            supply: 4000,
            minted: 0
        });
        
        // Tier 3: Final Call - $2,400 (2,500 units)
        tiers[2] = PricingTier({
            price: 2.4 ether,  // ~$2,400
            supply: 2500,
            minted: 0
        });
        
        // Set 10% royalty for secondary sales
        _setDefaultRoyalty(_escrowContract, 1000); // 10% = 1000 basis points
    }
    
    /**
     * @notice Mint a lifetime ticket NFT
     */
    function mintTicket() external payable {
        require(saleIsActive, "Sale is not active");
        require(currentTier < 3, "All tiers sold out");
        
        PricingTier storage tier = tiers[currentTier];
        require(tier.minted < tier.supply, "Current tier sold out");
        require(msg.value >= tier.price, "Insufficient payment");
        
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        tier.minted++;
        
        // Store ticket info
        ticketInfo[tokenId] = TicketInfo({
            tier: currentTier + 1, // Display as 1-indexed
            purchasePrice: msg.value,
            purchaseTimestamp: block.timestamp,
            isLifetime: true
        });
        
        // Mint NFT
        _safeMint(msg.sender, tokenId);
        
        // Forward funds to escrow
        (bool success, ) = escrowContract.call{value: msg.value}(
            abi.encodeWithSignature(
                "recordContribution(address,uint8,uint8,uint256)",
                msg.sender,
                0, // PaymentType.LIFETIME_TICKET
                0, // StakeholderRole.FAN
                currentTier + 1
            )
        );
        require(success, "Escrow transfer failed");
        
        emit TicketMinted(msg.sender, tokenId, currentTier + 1, msg.value);
        
        // Check if tier is complete and advance
        if (tier.minted >= tier.supply && currentTier < 2) {
            currentTier++;
            emit TierAdvanced(currentTier + 1, block.timestamp);
        }
    }
    
    /**
     * @notice Batch mint tickets (for airdrops/giveaways)
     * @param _recipients Array of recipient addresses
     */
    function batchMint(address[] calldata _recipients) external onlyOwner {
        require(_recipients.length > 0, "Empty recipients array");
        require(currentTier < 3, "All tiers sold out");
        
        PricingTier storage tier = tiers[currentTier];
        require(
            tier.minted + _recipients.length <= tier.supply,
            "Would exceed tier supply"
        );
        
        for (uint256 i = 0; i < _recipients.length; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            tier.minted++;
            
            ticketInfo[tokenId] = TicketInfo({
                tier: currentTier + 1,
                purchasePrice: 0,
                purchaseTimestamp: block.timestamp,
                isLifetime: true
            });
            
            _safeMint(_recipients[i], tokenId);
        }
        
        // Check if tier is complete and advance
        if (tier.minted >= tier.supply && currentTier < 2) {
            currentTier++;
            emit TierAdvanced(currentTier + 1, block.timestamp);
        }
    }
    
    /**
     * @notice Toggle sale state
     */
    function setSaleState(bool _isActive) external onlyOwner {
        saleIsActive = _isActive;
        emit SaleStateChanged(_isActive);
    }
    
    /**
     * @notice Update base URI
     */
    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }
    
    /**
     * @notice Get current tier info
     */
    function getCurrentTierInfo() external view returns (
        uint256 tier,
        uint256 price,
        uint256 remaining,
        uint256 total
    ) {
        if (currentTier >= 3) {
            return (3, 0, 0, 0);
        }
        PricingTier memory t = tiers[currentTier];
        return (
            currentTier + 1,
            t.price,
            t.supply - t.minted,
            t.supply
        );
    }
    
    /**
     * @notice Get next tier info
     */
    function getNextTierInfo() external view returns (
        uint256 tier,
        uint256 price,
        uint256 supply
    ) {
        if (currentTier >= 2) {
            return (0, 0, 0);
        }
        PricingTier memory t = tiers[currentTier + 1];
        return (currentTier + 2, t.price, t.supply);
    }
    
    /**
     * @notice Get total minted across all tiers
     */
    function getTotalMinted() external view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
    /**
     * @notice Get all tickets owned by an address
     */
    function tokensOfOwner(address _owner) external view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        
        for (uint256 i = 0; i < tokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        
        return tokenIds;
    }
    
    /**
     * @notice Override base URI
     */
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
    
    /**
     * @notice Required override for ERC721Enumerable
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
    
    /**
     * @notice Required override for multiple inheritance
     */
    function _burn(uint256 tokenId) internal override(ERC721, ERC721Royalty) {
        super._burn(tokenId);
    }
    
    /**
     * @notice Required override for ERC721Enumerable and ERC721Royalty
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721Royalty)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
