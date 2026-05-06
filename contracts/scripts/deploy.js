const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting InTown Fundraising Platform Deployment...\n");

  const [deployer] = await hre.ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);
  console.log("💰 Account balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "ETH\n");

  // Configuration
  const TREASURY_WALLET = process.env.TREASURY_WALLET || deployer.address;
  const ARTIST_WALLET = process.env.ARTIST_WALLET || deployer.address;
  const FUNDING_GOAL = hre.ethers.parseEther(process.env.FUNDING_GOAL || "1200"); // Default $1.2M
  const BASE_URI = process.env.BASE_TOKEN_URI || "ipfs://QmYourBaseURI";

  console.log("⚙️  Configuration:");
  console.log("   Treasury Wallet:", TREASURY_WALLET);
  console.log("   Artist Wallet:", ARTIST_WALLET);
  console.log("   Funding Goal:", hre.ethers.formatEther(FUNDING_GOAL), "ETH");
  console.log("   Base URI:", BASE_URI, "\n");

  // 1. Deploy ITMV Token
  console.log("📦 Deploying ITMV Token...");
  const ITMVToken = await hre.ethers.getContractFactory("ITMVToken");
  const itmvToken = await ITMVToken.deploy();
  await itmvToken.waitForDeployment();
  const itmvAddress = await itmvToken.getAddress();
  console.log("✅ ITMV Token deployed to:", itmvAddress);
  console.log("   Initial Supply: 1,000,000,000 ITMV\n");

  // 2. Deploy Campaign Factory
  console.log("📦 Deploying Campaign Factory...");
  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  const factory = await CampaignFactory.deploy(TREASURY_WALLET);
  await factory.waitForDeployment();
  const factoryAddress = await factory.getAddress();
  console.log("✅ Campaign Factory deployed to:", factoryAddress, "\n");

  // 3. Create First Campaign
  console.log("📦 Creating first campaign...");
  const artistName = process.env.ARTIST_NAME || "Drake Concert 2026";
  
  const tx = await factory.createCampaign(
    artistName,
    ARTIST_WALLET,
    FUNDING_GOAL,
    `${artistName} Tickets`,
    "TICKET",
    `${artistName} Land`,
    "LAND",
    `${artistName} Sponsorships`,
    "SPONSOR",
    BASE_URI
  );

  console.log("⏳ Waiting for transaction confirmation...");
  const receipt = await tx.wait();
  console.log("✅ Campaign created! Transaction:", receipt.hash);

  // Get campaign details
  const campaignId = 0;
  const campaign = await factory.getCampaign(campaignId);
  
  console.log("\n🎉 Campaign Details:");
  console.log("   Campaign ID:", campaignId);
  console.log("   Artist Name:", campaign.artistName);
  console.log("   Escrow Contract:", campaign.escrowContract);
  console.log("   Ticket Contract:", campaign.ticketContract);
  console.log("   Land Contract:", campaign.landContract);
  console.log("   Sponsorship Contract:", campaign.sponsorshipContract);
  console.log("   Funding Goal:", hre.ethers.formatEther(campaign.fundingGoal), "ETH");

  // 4. Activate Campaign
  console.log("\n📦 Activating campaign...");
  const activateTx = await factory.activateCampaign(campaignId);
  await activateTx.wait();
  console.log("✅ Campaign activated! Sales are now live.\n");

  // Summary
  console.log("=" .repeat(60));
  console.log("🎊 DEPLOYMENT COMPLETE!");
  console.log("=" .repeat(60));
  console.log("\n📋 Contract Addresses:");
  console.log("   ITMV Token:", itmvAddress);
  console.log("   Campaign Factory:", factoryAddress);
  console.log("   Escrow:", campaign.escrowContract);
  console.log("   Tickets:", campaign.ticketContract);
  console.log("   Land:", campaign.landContract);
  console.log("   Sponsorships:", campaign.sponsorshipContract);
  
  console.log("\n📝 Next Steps:");
  console.log("   1. Verify contracts on Etherscan:");
  console.log(`      npx hardhat verify --network ${hre.network.name} ${itmvAddress}`);
  console.log(`      npx hardhat verify --network ${hre.network.name} ${factoryAddress} "${TREASURY_WALLET}"`);
  console.log("\n   2. Seed Uniswap liquidity pool with ITMV tokens");
  console.log("\n   3. Update frontend with contract addresses");
  console.log("\n   4. Deploy subgraph to The Graph");
  console.log("\n   5. Launch marketing campaign!");

  // Save deployment info
  const deploymentInfo = {
    network: hre.network.name,
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    contracts: {
      itmvToken: itmvAddress,
      campaignFactory: factoryAddress,
      campaign: {
        id: campaignId,
        escrow: campaign.escrowContract,
        tickets: campaign.ticketContract,
        land: campaign.landContract,
        sponsorships: campaign.sponsorshipContract,
      }
    },
    configuration: {
      treasuryWallet: TREASURY_WALLET,
      artistWallet: ARTIST_WALLET,
      fundingGoal: hre.ethers.formatEther(FUNDING_GOAL),
      artistName: artistName,
    }
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/${hre.network.name}-${Date.now()}.json`;
  fs.mkdirSync("./deployments", { recursive: true });
  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
  console.log(`\n💾 Deployment info saved to: ${deploymentPath}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Deployment failed:");
    console.error(error);
    process.exit(1);
  });
