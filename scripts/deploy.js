const { ethers } = require("hardhat");

async function main() {
  const sayGmContract = await ethers.getContractFactory("SayGm");

  const deployedSayGmContract = await sayGmContract.deploy();

  await deployedSayGmContract.deployed();

  console.log("SayGm Contract Address: ", deployedSayGmContract.address);

}

main().then(() => process.exit(0)).catch((error) => {
  console.log(error);
  process.exit(1);
});