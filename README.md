# InTown Metaverse Fundraising Platform

## 🎯 Overview

The **InTown Metaverse Fundraising Platform** is a complete Web3 economic control center for launching artist campaigns with integrated crowdfunding, NFT sales, and token utility. This platform transitions the InTown Metaverse from development mode to live operations, designed to scale to 5 million users.

## 🏗️ Architecture

### Smart Contract System

The platform consists of 6 core smart contracts that work together:

#### 1. **CrowdfundingEscrow.sol** - The Threshold-Based Escrow
- Holds all ETH from ticket, land, and sponsorship sales
- **45-day deadline** with automatic goal checking
- **70/30 revenue split** (Artist/Treasury)
- **Automatic refund mechanism** if goal not met
- Reentrancy protected with emergency pause functionality

**Key Features:**
- `recordContribution()` - Called by NFT contracts to track payments
- `releaseFunds()` - Releases funds to artist (70%) and treasury (30%) if goal met
- `requestRefund()` - Allows contributors to claim refunds if goal not met
- `batchRefund()` - Gas-optimized batch refund for multiple contributors

#### 2. **ITMVToken.sol** - The Utility Token (ERC-20)
- **1 Billion ITMV tokens** fixed supply
- Burnable for consumables (shoutouts, avatar items)
- On-chain shoutout storage for Jumbotron display
- Deflationary tokenomics via burn mechanism

**Key Features:**
- `createShoutout()` - Burn 50+ ITMV to post 280-character message
- `burnForConsumable()` - Burn tokens for other in-game items
- `circulatingSupply()` - Returns current supply after burns
- `getRecentShoutouts()` - Fetch latest shoutouts for display

#### 3. **CampaignTicket.sol** - Event Tickets (ERC-721)
- **4 tiers**: General ($10), VIP ($25), Premium ($50), Platinum ($100)
- **10,000 max supply** across all tiers
- Funds automatically forwarded to escrow
- Batch minting for airdrops/giveaways

**Tier Distribution:**
- General: 5,000 tickets
- VIP: 3,000 tickets
- Premium: 1,500 tickets
- Platinum: 500 tickets

#### 4. **CampaignLand.sol** - Stadium Sections (ERC-721)
- **100 sections** in 10x10 grid layout
- **$500+ per section** (0.5 ETH base price)
- 2D coordinates stored for interactive map
- Section names auto-generated (e.g., "Section 23")

#### 5. **SponsorshipNFT.sol** - Ad Placements (ERC-721)
- **3 sponsorship types**:
  - Jumbotron 30s: $5,000 (10 slots)
  - Lounge Sponsor: $10,000 (5 lounges)
  - Banner Ad: $2,000 (20 spots)
- IPFS banner upload rights post-purchase
- Direct ETH payment (no sales calls needed)

#### 6. **CampaignFactory.sol** - Campaign Deployment
- Deploys complete campaign ecosystems
- Manages campaign registry and activation
- Centralized treasury wallet management
- Emergency pause controls

---

## 📊 Token Economics

### ITMV Token Distribution (1 Billion Total)

```
40% (400M) - Public sale on fundraising site
25% (250 million) - Liquidity pool (Uniswap V3)
20% (200 million) - Treasury reserve
10% (100M) - Team vesting (2-year cliff)
5% (50M)   - Airdrop to early supporters
```

### Burn Mechanism
- **Shoutouts**: Minimum 50 ITMV burned per message
- **Consumables**: Variable burn rates for avatar items
- **Deflationary**: Reduces circulating supply over time

---

## 🚀 Deployment Guide

### Prerequisites
```bash
- Node.js v18+
- npm or yarn
- Ethereum wallet with ETH for gas
- Infura or Alchemy API key
```

### Step 1: Install Dependencies
```bash
cd intown-fundraising-platform
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts ethers dotenv
```

### Step 2: Configure Hardhat
Create `hardhat.config.js`:
```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
```

### Step 3: Deploy Contracts

Create `contracts/scripts/deploy.js`:
```javascript
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // 1. Deploy ITMV Token
  const ITMVToken = await hre.ethers.getContractFactory("ITMVToken");
  const itmvToken = await ITMVToken.deploy();
  await itmvToken.deployed();
  console.log("ITMV Token deployed to:", itmvToken.address);

  // 2. Deploy Campaign Factory
  const treasuryWallet = process.env.TREASURY_WALLET;
  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  const factory = await CampaignFactory.deploy(treasuryWallet);
  await factory.deployed();
  console.log("Campaign Factory deployed to:", factory.address);

  // 3. Create a campaign
  const tx = await factory.createCampaign(
    "Drake Concert 2026",
    process.env.ARTIST_WALLET,
    hre.ethers.utils.parseEther("1200"), // $1.2M goal
    "Drake Concert Tickets",
    "DRAKE",
    "Drake Concert Land",
    "DLAND",
    "Drake Concert Sponsorships",
    "DSPON",
    "ipfs://YOUR_BASE_URI"
  );
  
  const receipt = await tx.wait();
  console.log("Campaign created! Transaction:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run deployment:
```bash
npx hardhat run contracts/scripts/deploy.js --network sepolia
```

### Step 4: Verify Contracts on Etherscan
```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS "constructor" "args"
```

---

## 🎨 Frontend Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **Web3**: Wagmi v2 + Viem + RainbowKit
- **State**: Zustand
- **Indexing**: The Graph subgraphs
- **IPFS**: Pinata or NFT.Storage

### Project Structure
```
/app
  /page.tsx                    # Main SPA
  /api
    /upload-sponsor-banner
      /route.ts                # IPFS upload endpoint
/components
  /Header
    /ConnectButton.tsx         # RainbowKit wallet connection
    /ProgressMeter.tsx         # Real-time funding progress
    /CountdownTimer.tsx        # 45-day countdown
  /Sections
    /TicketMinting.tsx         # 4-tier ticket selection
    /LandGrid.tsx              # Interactive 2D stadium map
    /ShoutoutConsole.tsx       # Token burn + message input
    /SponsorPortal.tsx         # B2B sponsorship purchase
  /LiveFeed
    /TransactionFeed.tsx       # Real-time activity stream
/lib
  /contracts.ts                # Contract ABIs and addresses
  /wagmi.ts                    # Wagmi configuration
```

### Install Frontend Dependencies
```bash
npm install next@latest react@latest react-dom@latest
npm install wagmi viem @rainbow-me/rainbowkit
npm install @tanstack/react-query
npm install tailwindcss postcss autoprefixer
npm install framer-motion zustand
npm install graphql graphql-request
```

---

## 📈 The Graph Subgraph

### Schema Definition
Create `subgraph/schema.graphql`:
```graphql
type Campaign @entity {
  id: ID!
  escrowAddress: Bytes!
  artistName: String!
  artistWallet: Bytes!
  treasuryWallet: Bytes!
  fundingGoal: BigInt!
  currentAmount: BigInt!
  deadline: BigInt!
  isActive: Boolean!
  goalMet: Boolean!
  tickets: [TicketPurchase!]! @derivedFrom(field: "campaign")
  lands: [LandPurchase!]! @derivedFrom(field: "campaign")
  sponsorships: [Sponsorship!]! @derivedFrom(field: "campaign")
  refunds: [Refund!]! @derivedFrom(field: "campaign")
}

type TicketPurchase @entity {
  id: ID!
  buyer: Bytes!
  tokenId: BigInt!
  tier: String!
  price: BigInt!
  timestamp: BigInt!
  campaign: Campaign!
}

type LandPurchase @entity {
  id: ID!
  buyer: Bytes!
  tokenId: BigInt!
  section: String!
  coordinates: String!
  price: BigInt!
  timestamp: BigInt!
  campaign: Campaign!
}

type Sponsorship @entity {
  id: ID!
  sponsor: Bytes!
  tokenId: BigInt!
  slotType: String!
  amount: BigInt!
  bannerURI: String
  timestamp: BigInt!
  campaign: Campaign!
}

type TokenBurn @entity {
  id: ID!
  burner: Bytes!
  amount: BigInt!
  message: String!
  timestamp: BigInt!
}

type Refund @entity {
  id: ID!
  recipient: Bytes!
  amount: BigInt!
  timestamp: BigInt!
  campaign: Campaign!
}
```

### Deploy Subgraph
```bash
graph init --studio intown-fundraising
graph codegen
graph build
graph deploy --studio intown-fundraising
```

---

## 🔒 Security Considerations

### Smart Contract Security
- ✅ **Reentrancy Guards**: All payable functions protected
- ✅ **Integer Overflow**: Solidity 0.8+ built-in protection
- ✅ **Access Control**: Ownable pattern for admin functions
- ✅ **Emergency Pause**: Circuit breaker for critical issues
- ✅ **Refund Logic**: Thoroughly tested edge cases

### Recommended Audits
1. **OpenZeppelin** - Comprehensive smart contract audit
2. **Trail of Bits** - Security assessment
3. **Certik** - Formal verification

### Frontend Security
- Rate limiting on API routes
- IPFS upload validation (file type, size)
- XSS protection (sanitize user inputs)
- CSRF tokens for state-changing operations
- Wallet signature verification

---

## 📊 Scaling to 5 Million Users

### Infrastructure
- **CDN**: Vercel Edge Network for global distribution
- **RPC**: Alchemy + Infura failover (not just one provider)
- **Caching**: Redis for subgraph query caching
- **Rate Limiting**: Upstash for API protection
- **Monitoring**: Sentry + Datadog for error tracking

### Performance Optimizations
- Server-side rendering (SSR) for initial load
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- WebSocket connections for real-time updates
- Progressive Web App (PWA) for mobile

---

## 🎯 Success Metrics (KPIs)

Track these metrics for campaign success:
- **Total funds raised** vs. goal
- **Conversion rate** (visitors → purchasers)
- **Average transaction value**
- **Token burn rate** (deflationary pressure)
- **Sponsorship fill rate**
- **Refund rate** (should be <5%)

---

## 📞 Support & Documentation

### Contract Addresses (Mainnet)
```
ITMV Token: TBD
Campaign Factory: TBD
```

### Useful Links
- **Documentation**: https://docs.intownmetaverse.com
- **Discord**: https://discord.gg/intownmetaverse
- **Twitter**: @IntownMetaverse
- **GitHub**: https://github.com/intown-metaverse

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to testnet
npx hardhat run contracts/scripts/deploy.js --network sepolia

# Start frontend dev server
npm run dev

# Build for production
npm run build
```

---

**Built with ❤️ by the InTown Metaverse Team**
