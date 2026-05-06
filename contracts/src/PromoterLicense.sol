// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title PromoterLicense
 * @notice ERC-721 NFT for promoter licenses with tiered revenue-share rates
 * @dev Free-to-mint, transferable licenses with 10% secondary royalty
 */
contract PromoterLicense is ERC721, ERC721Enumerable, ERC721Royalty, Ownable {
    address public escrowContract;
    string public baseTokenURI;
    bool public mintingIsActive = false;
    
    // License tiers with locked service fees
    enum LicenseTier { BELIEVER, BUILDER, ESTABLISHER }
    
    struct TierInfo {
        uint256 serviceFeePercent; // 1%, 3%, or 7%
        uint256 supply;
        uint256 minted;
    }
    
    mapping(LicenseTier => TierInfo) public tiers;
    
    // License info
    struct LicenseInfo {
        LicenseTier tier;
        uint256 serviceFeePercent;
        uint256 mintTimestamp;
        string socialProfileURI; // Link to verified social profiles
        bool isVerified;
    }
    
    mapping(uint256 => LicenseInfo) public licenseInfo;
    mapping(address => bool) public hasLicense;
    uint256 private _nextTokenId = 1;
    
    // Events
    event LicenseMinted(
        address indexed promoter,
        uint256 indexed tokenId,
        LicenseTier tier,
        uint256 serviceFeePercent
    );
    event SocialProfileLinked(uint256 indexed tokenId, string profileURI);
    event LicenseVerified(uint256 indexed tokenId);
    event MintingStateChanged(bool isActive);
    
    /**
     * @notice Initialize promoter license contract
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
        
        // Set tier configurations
        // Tier 1: The Believers - 1% service fee (10 slots)
        tiers[LicenseTier.BELIEVER] = TierInfo({
            serviceFeePercent: 1,
            supply: 10,
            minted: 0
        });
        
        // Tier 2: The Builders - 3% service fee (10 slots)
        tiers[LicenseTier.BUILDER] = TierInfo({
            serviceFeePercent: 3,
            supply: 10,
            minted: 0
        });
        
        // Tier 3: The Establishers - 7% service fee (5 slots)
        tiers[LicenseTier.ESTABLISHER] = TierInfo({
            serviceFeePercent: 7,
            supply: 5,
            minted: 0
        });
        
        // Set 10% royalty for secondary sales
        _setDefaultRoyalty(_escrowContract, 1000); // 10% = 1000 basis points
    }
    
    /**
     * @notice Mint a promoter license NFT (FREE)
     * @param _tier Desired license tier
     * @param _socialProfileURI Link to social profiles for verification
     */
    function mintLicense(LicenseTier _tier, string memory _socialProfileURI) external {
        require(mintingIsActive, "Minting is not active");
        require(!hasLicense[msg.sender], "Already has a license");
        require(bytes(_socialProfileURI).length > 0, "Social profile required");
        
        TierInfo storage tier = tiers[_tier];
        require(tier.minted < tier.supply, "Tier sold out");
        
        uint256 tokenId = _nextTokenId++;
        tier.minted++;
        hasLicense[msg.sender] = true;
        
        // Store license info
        licenseInfo[tokenId] = LicenseInfo({
            tier: _tier,
            serviceFeePercent: tier.serviceFeePercent,
            mintTimestamp: block.timestamp,
            socialProfileURI: _socialProfileURI,
            isVerified: false // Requires manual verification
        });
        
        // Mint NFT (FREE - no payment required)
        _safeMint(msg.sender, tokenId);
        
        // Record capacity commit in escrow (no payment)
        (bool success, ) = escrowContract.call(
            abi.encodeWithSignature(
                "recordContribution(address,uint8,uint8,uint256)",
                msg.sender,
                2, // PaymentType.PROMOTER_LICENSE
                2, // StakeholderRole.PROMOTER
                uint256(_tier) + 1
            )
        );
        require(success, "Escrow recording failed");
        
        emit LicenseMinted(msg.sender, tokenId, _tier, tier.serviceFeePercent);
        emit SocialProfileLinked(tokenId, _socialProfileURI);
    }
    
    /**
     * @notice Update social profile URI
     * @param _tokenId Token ID of the license
     * @param _newProfileURI New social profile URI
     */
    function updateSocialProfile(uint256 _tokenId, string memory _newProfileURI) external {
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(bytes(_newProfileURI).length > 0, "Invalid profile URI");
        
        licenseInfo[_tokenId].socialProfileURI = _newProfileURI;
        licenseInfo[_tokenId].isVerified = false; // Requires re-verification
        
        emit SocialProfileLinked(_tokenId, _newProfileURI);
    }
    
    /**
     * @notice Verify a promoter license (owner only)
     * @param _tokenId Token ID to verify
     */
    function verifyLicense(uint256 _tokenId) external onlyOwner {
        require(_exists(_tokenId), "Token does not exist");
        require(!licenseInfo[_tokenId].isVerified, "Already verified");
        
        licenseInfo[_tokenId].isVerified = true;
        
        emit LicenseVerified(_tokenId);
    }
    
    /**
     * @notice Batch verify licenses (owner only)
     * @param _tokenIds Array of token IDs to verify
     */
    function batchVerify(uint256[] calldata _tokenIds) external onlyOwner {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            uint256 tokenId = _tokenIds[i];
            if (_exists(tokenId) && !licenseInfo[tokenId].isVerified) {
                licenseInfo[tokenId].isVerified = true;
                emit LicenseVerified(tokenId);
            }
        }
    }
    
    /**
     * @notice Toggle minting state
     */
    function setMintingState(bool _isActive) external onlyOwner {
        mintingIsActive = _isActive;
        emit MintingStateChanged(_isActive);
    }
    
    /**
     * @notice Update base URI
     */
    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }
    
    /**
     * @notice Get tier info
     */
    function getTierInfo(LicenseTier _tier) external view returns (
        uint256 serviceFeePercent,
        uint256 remaining,
        uint256 total
    ) {
        TierInfo memory tier = tiers[_tier];
        return (
            tier.serviceFeePercent,
            tier.supply - tier.minted,
            tier.supply
        );
    }
    
    /**
     * @notice Get license details for a token
     */
    function getLicenseDetails(uint256 _tokenId) external view returns (
        LicenseTier tier,
        uint256 serviceFeePercent,
        bool isVerified,
        string memory socialProfileURI
    ) {
        require(_exists(_tokenId), "Token does not exist");
        LicenseInfo memory info = licenseInfo[_tokenId];
        return (
            info.tier,
            info.serviceFeePercent,
            info.isVerified,
            info.socialProfileURI
        );
    }
    
    /**
     * @notice Get total minted across all tiers
     */
    function getTotalMinted() external view returns (uint256) {
        return _nextTokenId - 1;
    }
    
    /**
     * @notice Get all licenses owned by an address
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
     * @notice Check if token exists
     */
    function _exists(uint256 tokenId) internal view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
    
    /**
     * @notice Override transfer to update hasLicense mapping
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        address from = _ownerOf(tokenId);
        
        // Update hasLicense mapping on transfer
        if (from != address(0)) {
            hasLicense[from] = false;
        }
        if (to != address(0)) {
            hasLicense[to] = true;
        }
        
        return super._update(to, tokenId, auth);
    }
    
    /**
     * @notice Override base URI
     */
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
    
    /**
     * @notice Required override for multiple inheritance
     */
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }
    
    /**
     * @notice Required override for multiple inheritance
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
