// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BrandCapacityPass
 * @notice ERC-721 NFT for permanent brand visibility with staged pricing
 * @dev Implements 3-tier pricing with 10% secondary royalty and zero recurring fees
 */
contract BrandCapacityPass is ERC721, ERC721Enumerable, ERC721Royalty, Ownable {
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
    
    // Brand pass info
    struct BrandPassInfo {
        uint256 tier;
        string brandName;
        uint256 purchasePrice;
        uint256 purchaseTimestamp;
        string bannerURI; // IPFS URI for brand assets
        bool isPermanent;
    }
    
    mapping(uint256 => BrandPassInfo) public brandPassInfo;
    uint256 private _nextTokenId = 1;
    
    // Events
    event BrandPassMinted(
        address indexed brand,
        uint256 indexed tokenId,
        uint256 tier,
        uint256 price,
        string brandName
    );
    event BannerUploaded(uint256 indexed tokenId, string bannerURI);
    event TierAdvanced(uint256 newTier, uint256 timestamp);
    event SaleStateChanged(bool isActive);
    
    /**
     * @notice Initialize brand capacity pass contract
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
        // Tier 1: Foundation - $150,000 (3 units)
        tiers[0] = PricingTier({
            price: 150 ether,  // ~$150,000 at $1000/ETH
            supply: 3,
            minted: 0
        });
        
        // Tier 2: Expansion - $250,000 (4 units)
        tiers[1] = PricingTier({
            price: 250 ether,  // ~$250,000
            supply: 4,
            minted: 0
        });
        
        // Tier 3: Dominance - $750,000 (3 units)
        tiers[2] = PricingTier({
            price: 750 ether,  // ~$750,000
            supply: 3,
            minted: 0
        });
        
        // Set 10% royalty for secondary sales
        _setDefaultRoyalty(_escrowContract, 1000); // 10% = 1000 basis points
    }
    
    /**
     * @notice Mint a brand capacity pass NFT
     * @param _brandName Name of the brand
     */
    function mintBrandPass(string memory _brandName) external payable {
        require(saleIsActive, "Sale is not active");
        require(currentTier < 3, "All tiers sold out");
        require(bytes(_brandName).length > 0, "Brand name required");
        
        PricingTier storage tier = tiers[currentTier];
        require(tier.minted < tier.supply, "Current tier sold out");
        require(msg.value >= tier.price, "Insufficient payment");
        
        uint256 tokenId = _nextTokenId++;
        tier.minted++;
        
        // Store brand pass info
        brandPassInfo[tokenId] = BrandPassInfo({
            tier: currentTier + 1, // Display as 1-indexed
            brandName: _brandName,
            purchasePrice: msg.value,
            purchaseTimestamp: block.timestamp,
            bannerURI: "",
            isPermanent: true
        });
        
        // Mint NFT
        _safeMint(msg.sender, tokenId);
        
        // Forward funds to escrow
        (bool success, ) = escrowContract.call{value: msg.value}(
            abi.encodeWithSignature(
                "recordContribution(address,uint8,uint8,uint256)",
                msg.sender,
                1, // PaymentType.BRAND_CAPACITY
                1, // StakeholderRole.BRAND
                currentTier + 1
            )
        );
        require(success, "Escrow transfer failed");
        
        emit BrandPassMinted(msg.sender, tokenId, currentTier + 1, msg.value, _brandName);
        
        // Check if tier is complete and advance
        if (tier.minted >= tier.supply && currentTier < 2) {
            currentTier++;
            emit TierAdvanced(currentTier + 1, block.timestamp);
        }
    }
    
    /**
     * @notice Upload brand assets for owned pass
     * @param _tokenId Token ID of the brand pass
     * @param _bannerURI IPFS URI of the brand assets
     */
    function uploadBanner(uint256 _tokenId, string memory _bannerURI) external {
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(bytes(_bannerURI).length > 0, "Invalid banner URI");
        
        brandPassInfo[_tokenId].bannerURI = _bannerURI;
        
        emit BannerUploaded(_tokenId, _bannerURI);
    }
    
    /**
     * @notice Update brand assets for owned pass
     * @param _tokenId Token ID of the brand pass
     * @param _newBannerURI New IPFS URI of the brand assets
     */
    function updateBanner(uint256 _tokenId, string memory _newBannerURI) external {
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(bytes(_newBannerURI).length > 0, "Invalid banner URI");
        
        brandPassInfo[_tokenId].bannerURI = _newBannerURI;
        
        emit BannerUploaded(_tokenId, _newBannerURI);
    }
    
    /**
     * @notice Batch mint brand passes (for partnerships)
     * @param _recipients Array of recipient addresses
     * @param _brandNames Array of brand names
     */
    function batchMint(
        address[] calldata _recipients,
        string[] calldata _brandNames
    ) external onlyOwner {
        require(_recipients.length > 0, "Empty recipients array");
        require(_recipients.length == _brandNames.length, "Array length mismatch");
        require(currentTier < 3, "All tiers sold out");
        
        PricingTier storage tier = tiers[currentTier];
        require(
            tier.minted + _recipients.length <= tier.supply,
            "Would exceed tier supply"
        );
        
        for (uint256 i = 0; i < _recipients.length; i++) {
            uint256 tokenId = _nextTokenId++;
            tier.minted++;
            
            brandPassInfo[tokenId] = BrandPassInfo({
                tier: currentTier + 1,
                brandName: _brandNames[i],
                purchasePrice: 0,
                purchaseTimestamp: block.timestamp,
                bannerURI: "",
                isPermanent: true
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
        return _nextTokenId - 1;
    }
    
    /**
     * @notice Get all brand passes owned by an address
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
