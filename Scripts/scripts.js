const hre = require("hardhat");

async function main() {
  const PredictionMarket = await hre.ethers.getContractFactory("PredictionMarket");
  const market = await PredictionMarket.deploy("Will Bitcoin exceed $100,000 by July 1, 2025?");
  await market.deployed();
  console.log("Market deployed to:", market.address);
}

main().catch(console.error);