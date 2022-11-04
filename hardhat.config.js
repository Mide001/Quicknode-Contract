require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
