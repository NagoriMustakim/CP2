const hre = require("hardhat");
const { verify } = require("./verify")
const fs = require("fs");
async function main() {
  const Ddrive = await hre.ethers.getContractFactory("Ddrive");
  const drive = await Ddrive.deploy();

  await drive.deployed();
  console.log(`drive deployed at: ${drive.address}`);
  console.log("----------deployed------------")

  //verifiying smart contract on etherscan
  let arguments = []
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying...")
    await verify(drive.address, arguments)
  }
  else {
    console.log("something wrong try again");
  }

  //storing address and abi in json format 
  const data = {
    address: drive.address,
    abi: JSON.parse(drive.interface.format('json'))
  }
  fs.writeFileSync('../CP/src/Ddrive.json', JSON.stringify(data))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});