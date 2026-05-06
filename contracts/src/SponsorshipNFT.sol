// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SponsorshipNFT
 * @notice ERC-721 NFT for sponsorship ad placements with IPFS banner upload rights
 * @dev Funds are sent to escrow contract upon minting
 */
contract SponsorshipNFT is ERC721, ERC721Enumerable, Ownable {
    address public escrowContract;
    string public baseTokenURI;
    bool public saleIsActive = false;
    
    // Sponsorship types
    enum SponsorshipType { JUMBOTRON_30S, LOUNGE_SPONSOR, BANNER_AD }
    
    struct SponsorshipInfo {
        SponsorshipType sponsorshipType;
        string slotName;
        uint256 purchasePrice;
        uint256 purchaseTimestamp;
        string bannerURI; // IPFS URI for uploaded banner
        bool bannerUploaded;
    }
    
    mapping(uint256 => SponsorshipInfo) public sponsorshipInfo;
    
    // Sponsorship pricing and supply
    mapping(SponsorshipType => uint256) public sponsorshipPrices;
    mapping(SponsorshipType => uint256) public sponsorshipSupply;
    mapping(SponsorshipType => uint256) public sponsorshipMinted;
    
    // Token ID counter
    uint256 private _nextTokenId = 1;
    
    // Events
    event SponsorshipMinted(
        address indexed sponsor,
        uint256 indexed tokenId,
        SponsorshipType sponsorshipType,
        string slotName,
        uint256 price
    );
    event BannerUploaded(
        uint256 indexed tokenId,
        string bannerURI
    );
    event PriceUpdated(SponsorshipType sponsorshipType, uint256 newPrice);
    event SaleStateChanged(bool isActive);
    
    /**
     * @notice Initialize sponsorship contract
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
    ) ERC721(_name, _symbol) Ownable(msg.sender) {
        require(_escrowContract != address(0), "Invalid escrow address");
        
        escrowContract = _escrowContract;
        baseTokenURI = _baseTokenURI;
        
        // Set default sponsorship prices
        sponsorshipPrices[SponsorshipType.JUMBOTRON_30S] = 5 ether;    // ~$5,000
        sponsorshipPrices[SponsorshipType.LOUNGE_SPONSOR] = 10 ether;  // ~$10,000
        sponsorshipPrices[SponsorshipType.BANNER_AD] = 2 ether;        // ~$2,000
        
        // Set sponsorship supplies
        sponsorshipSupply[SponsorshipType.JUMBOTRON_30S] = 10;  // 10 slots
        sponsorshipSupply[SponsorshipType.LOUNGE_SPONSOR] = 5;  // 5 lounges
        sponsorshipSupply[SponsorshipType.BANNER_AD] = 20;      // 20 banner spots
    }
    
    /**
     * @notice Mint a sponsorship NFT
     * @param _sponsorshipType Type of sponsorship
     */
    function mintSponsorship(SponsorshipType _sponsorshipType) external payable {
        require(saleIsActive, "Sale is not active");
        require(
            sponsorshipMinted[_sponsorshipType] < sponsorshipSupply[_sponsorshipType],
            "Sponsorship type sold out"
        );
        require(msg.value >= sponsorshipPrices[_sponsorshipType], "Insufficient payment");
        
        uint256 tokenId = _nextTokenId++;
        sponsorshipMinted[_sponsorshipType]++;
        
        // Generate slot name
        string memory slotName = _generateSlotName(_sponsorshipType, sponsorshipMinted[_sponsorshipType]);
        
        // Store sponsorship info
        sponsorshipInfo[tokenId] = SponsorshipInfo({
            sponsorshipType: _sponsorshipType,
            slotName: slotName,
            purchasePrice: msg.value,
            purchaseTimestamp: block.timestamp,
            bannerURI: "",
            bannerUploaded: false
        });
        
        // Mint NFT
        _safeMint(msg.sender, tokenId);
        
        // Forward funds to escrow
        // Note: SponsorshipNFT is separate from Genesis Campaign tiers
        // This is for additional sponsorship opportunities beyond Brand Capacity Passes
        (bool success, ) = escrowContract.call{value: msg.value}("");
        require(success, "Escrow transfer failed");
        
        emit SponsorshipMinted(msg.sender, tokenId, _sponsorshipType, slotName, msg.value);
    }
    
    /**
     * @notice Upload banner for owned sponsorship
     * @param _tokenId Token ID of the sponsorship
     * @param _bannerURI IPFS URI of the banner image
     */
    function uploadBanner(uint256 _tokenId, string memory _bannerURI) external {
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(bytes(_bannerURI).length > 0, "Invalid banner URI");
        require(!sponsorshipInfo[_tokenId].bannerUploaded, "Banner already uploaded");
        
        sponsorshipInfo[_tokenId].bannerURI = _bannerURI;
        sponsorshipInfo[_tokenId].bannerUploaded = true;
        
        emit BannerUploaded(_tokenId, _bannerURI);
    }
    
    /**
     * @notice Update banner for owned sponsorship
     * @param _tokenId Token ID of the sponsorship
     * @param _newBannerURI New IPFS URI of the banner image
     */
    function updateBanner(uint256 _tokenId, string memory _newBannerURI) external {
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(bytes(_newBannerURI).length > 0, "Invalid banner URI");
        
        sponsorshipInfo[_tokenId].bannerURI = _newBannerURI;
        
        emit BannerUploaded(_tokenId, _newBannerURI);
    }
    
    /**
     * @notice Batch mint sponsorships (for partnerships)
     * @param _sponsorshipType Type of sponsorship
     * @param _count Number to mint
     * @param _recipient Recipient address
     */
    function batchMint(
        SponsorshipType _sponsorshipType,
        uint256 _count,
        address _recipient
    ) external onlyOwner {
        require(_recipient != address(0), "Invalid recipient");
        require(_count > 0, "Count must be positive");
        require(
            sponsorshipMinted[_sponsorshipType] + _count <= sponsorshipSupply[_sponsorshipType],
            "Would exceed supply"
        );
        
        for (uint256 i = 0; i < _count; i++) {
            uint256 tokenId = _nextTokenId++;
            sponsorshipMinted[_sponsorshipType]++;
            
            string memory slotName = _generateSlotName(_sponsorshipType, sponsorshipMinted[_sponsorshipType]);
            
            sponsorshipInfo[tokenId] = SponsorshipInfo({
                sponsorshipType: _sponsorshipType,
                slotName: slotName,
                purchasePrice: 0,
                purchaseTimestamp: block.timestamp,
                bannerURI: "",
                bannerUploaded: false
            });
            
            _safeMint(_recipient, tokenId);
        }
    }
    
    /**
     * @notice Update sponsorship price (owner only)
     */
    function updatePrice(SponsorshipType _sponsorshipType, uint256 _newPrice) external onlyOwner {
        require(_newPrice > 0, "Price must be positive");
        sponsorshipPrices[_sponsorshipType] = _newPrice;
        emit PriceUpdated(_sponsorshipType, _newPrice);
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
     * @notice Get sponsorship type name
     */
    function getSponsorshipTypeName(SponsorshipType _type) public pure returns (string memory) {
        if (_type == SponsorshipType.JUMBOTRON_30S) return "Jumbotron 30s";
        if (_type == SponsorshipType.LOUNGE_SPONSOR) return "Lounge Sponsor";
        if (_type == SponsorshipType.BANNER_AD) return "Banner Ad";
        return "Unknown";
    }
    
    /**
     * @notice Get available sponsorships for a type
     */
    function getAvailableSponsorships(SponsorshipType _type) external view returns (uint256) {
        return sponsorshipSupply[_type] - sponsorshipMinted[_type];
    }
    
    /**
     * @notice Get all sponsorships owned by an address
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
     * @notice Generate slot name based on type and count
     */
    function _generateSlotName(SponsorshipType _type, uint256 _count) internal pure returns (string memory) {
        if (_type == SponsorshipType.JUMBOTRON_30S) {
            return string(abi.encodePacked("Jumbotron Slot #", _uint2str(_count)));
        } else if (_type == SponsorshipType.LOUNGE_SPONSOR) {
            return string(abi.encodePacked("Lounge #", _uint2str(_count)));
        } else {
            return string(abi.encodePacked("Banner #", _uint2str(_count)));
        }
    }
    
    /**
     * @notice Convert uint to string (helper function)
     */
    function _uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
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
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }
    
    /**
     * @notice Required override for ERC721Enumerable
     */
    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }
    
    /**
     * @notice Required override for ERC721Enumerable
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
