import hre, { network } from "hardhat";

async function main() {
   if (network.name !== "liskSepolia") return console.log("Must be on Lisk Sepolia network");
   const PRIVATE_KEY = process.env.PRIVATE_KEY as string
   const rpcProvider = process.env.LISK_SEPOLIA_RPC_URL
   const contract = await hre.ethers.deployContract("DrugLedger")
   await contract.waitForDeployment()
   console.log(`Contract Deployed on ${network.name} at address ${contract.target}`)

}

main().catch(error => {
   console.error(error)
   process.exitCode = 1;
})