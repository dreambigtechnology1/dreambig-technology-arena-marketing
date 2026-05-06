# 🚀 Getting Started with InTown Fundraising Platform

This guide will walk you through setting up and deploying your fundraising platform from scratch.

---

## ⚡ Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
cd intown-fundraising-platform
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your actual values
```

### 3. Compile Contracts
```bash
npm run compile
```

### 4. Deploy to Testnet
```bash
npm run deploy:sepolia
```

---

## 📋 Detailed Setup Guide

### Step 1: Environment Configuration

Edit your `.env` file with the following:

#### Required Variables:
```bash
# Get from MetaMask or your wallet
PRIVATE_KEY=0xYourPrivateKeyHere

# Get from https://infura.io
INFURA_API_KEY=your_infura_key
MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY

# Get from https://etherscan.io/myapikey
ETHERSCAN_API_KEY=your_etherscan_key

# Your wallet addresses
TREASURY_WALLET=0xYourTreasuryAddress
ARTIST_WALLET=0xArtistWalletAddress
```

#### Campaign Configuration:
```bash
ARTIST_NAME=Drake Concert 2026
FUNDING_GOAL=1200  # In ETH
BASE_TOKEN_URI=ipfs://QmYourIPFSHash
```

---

### Step 2: Test Locally

#### Start Local Hardhat Node:
```bash
npm run node
```

#### In a new terminal, deploy to local network:
```bash
npx hardhat run contracts/scripts/deploy.js --network localhost
```

---

### Step 3: Deploy to Sepolia Testnet

#### Get Testnet ETH:
1. Visit https://sepoliafaucet.com
2. Enter your wallet address
3. Receive free testnet ETH

#### Deploy:
```bash
npm run deploy:sepolia
```

#### Verify Contracts:
```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

---

### Step 4: Set Up The Graph Subgraph

#### Install Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

#### Initialize Subgraph:
```bash
mkdir subgraph && cd subgraph
graph init --studio intown-fundraising
```

#### Create `subgraph.yaml`:
```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: CrowdfundingEscrow
    network: mainnet
    source:
      address: "YOUR_ESCROW_ADDRESS"
      abi: CrowdfundingEscrow
      startBlock: YOUR_START_BLOCK
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Campaign
        - Contribution
      abis:
        - name: CrowdfundingEscrow
          file: ./abis/CrowdfundingEscrow.json
      eventHandlers:
        - event: ContributionReceived(indexed address,uint256,uint8,uint256)
          handler: handleContribution
        - event: GoalReached(uint256,uint256)
          handler: handleGoalReached
      file: ./src/mapping.ts
```

#### Deploy Subgraph:
```bash
graph codegen
graph build
graph deploy --studio intown-fundraising
```

---

### Step 5: Frontend Setup (Next.js)

#### Create Next.js App:
```bash
npx create-next-app@latest app --typescript --tailwind --app
cd app
```

#### Install Web3 Dependencies:
```bash
npm install wagmi viem @rainbow-me/rainbowkit @tanstack/react-query
npm install framer-motion zustand graphql graphql-request
```

#### Create `lib/wagmi.ts`:
```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'InTown Fundraising',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [mainnet, sepolia],
});
```

#### Create `lib/contracts.ts`:
```typescript
export const contracts = {
  itmvToken: {
    address: process.env.NEXT_PUBLIC_ITMV_TOKEN_ADDRESS as `0x${string}`,
    abi: [...], // Import from compiled artifacts
  },
  campaignFactory: {
    address: process.env.NEXT_PUBLIC_CAMPAIGN_FACTORY_ADDRESS as `0x${string}`,
    abi: [...],
  },
};
```

---

### Step 6: IPFS Setup (Pinata)

#### Sign up at https://pinata.cloud

#### Add to `.env`:
```bash
PINATA_API_KEY=your_api_key
PINATA_SECRET_KEY=your_secret_key
```

#### Create Upload API Route (`app/api/upload/route.ts`):
```typescript
import { NextRequest, NextResponse } from 'next/server';
import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_SECRET_KEY
);

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  const result = await pinata.pinFileToIPFS(file);
  
  return NextResponse.json({
    ipfsHash: result.IpfsHash,
    url: `ipfs://${result.IpfsHash}`
  });
}
```

---

## 🎨 Frontend Components

### Progress Meter Component:
```typescript
'use client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

export function ProgressMeter({ campaignId }: { campaignId: number }) {
  const { data } = useQuery({
    queryKey: ['campaign', campaignId],
    queryFn: async () => {
      // Fetch from subgraph
      const response = await fetch(process.env.NEXT_PUBLIC_SUBGRAPH_URL, {
        method: 'POST',
        body: JSON.stringify({
          query: `
            query GetCampaign($id: ID!) {
              campaign(id: $id) {
                currentAmount
                fundingGoal
                percentageFunded
              }
            }
          `,
          variables: { id: campaignId.toString() }
        })
      });
      return response.json();
    },
    refetchInterval: 5000 // Update every 5 seconds
  });

  const percentage = data?.campaign?.percentageFunded || 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-8">
      <motion.div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-8 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
      >
        <span className="flex items-center justify-center h-full text-white font-bold">
          {percentage}%
        </span>
      </motion.div>
    </div>
  );
}
```

---

## 🔐 Security Checklist

Before mainnet deployment:

- [ ] **Smart Contract Audit** - Get contracts audited by OpenZeppelin or Trail of Bits
- [ ] **Test Coverage** - Ensure 100% test coverage
- [ ] **Refund Logic Testing** - Test all edge cases for refunds
- [ ] **Gas Optimization** - Optimize contract gas usage
- [ ] **Frontend Security** - Implement rate limiting and input validation
- [ ] **Private Key Security** - Use hardware wallet or secure key management
- [ ] **Multi-sig Treasury** - Use Gnosis Safe for treasury wallet
- [ ] **Emergency Pause** - Test pause functionality
- [ ] **Monitoring** - Set up Sentry and Datadog alerts

---

## 📊 Testing Checklist

### Smart Contract Tests:
```bash
# Run all tests
npm test

# Run with coverage
npx hardhat coverage

# Run gas reporter
REPORT_GAS=true npm test
```

### Test Scenarios:
- [ ] Deploy all contracts successfully
- [ ] Create campaign
- [ ] Mint tickets (all tiers)
- [ ] Mint land NFTs
- [ ] Mint sponsorship NFTs
- [ ] Reach funding goal
- [ ] Release funds (70/30 split)
- [ ] Fail to reach goal
- [ ] Request refunds
- [ ] Burn ITMV tokens for shoutouts
- [ ] Upload sponsorship banners
- [ ] Emergency pause/unpause

---

## 🚀 Mainnet Deployment Checklist

### Pre-Deployment:
- [ ] Audit completed and issues resolved
- [ ] All tests passing
- [ ] Gas optimization complete
- [ ] Frontend tested on testnet
- [ ] Subgraph deployed and indexed
- [ ] IPFS infrastructure ready
- [ ] Marketing materials prepared
- [ ] Legal compliance reviewed

### Deployment Day:
1. **Deploy ITMV Token**
2. **Deploy Campaign Factory**
3. **Create First Campaign**
4. **Verify all contracts on Etherscan**
5. **Seed Uniswap liquidity pool**
6. **Deploy subgraph to mainnet**
7. **Update frontend with mainnet addresses**
8. **Deploy frontend to Vercel**
9. **Launch marketing campaign**
10. **Monitor transactions and gas usage**

---

## 📞 Support & Resources

### Documentation:
- Smart Contracts: See `contracts/src/` for inline documentation
- Frontend: See `README.md` for architecture details
- API: See subgraph schema in `subgraph/schema.graphql`

### Community:
- Discord: https://discord.gg/intownmetaverse
- Twitter: @IntownMetaverse
- GitHub: https://github.com/intown-metaverse

### Emergency Contacts:
- Smart Contract Issues: security@intownmetaverse.com
- Frontend Issues: dev@intownmetaverse.com
- General Support: support@intownmetaverse.com

---

## 🎉 You're Ready!

Your InTown Fundraising Platform is now set up and ready to launch. Follow the deployment checklist carefully, and don't hesitate to reach out for support.

**Good luck with your campaign! 🚀**
