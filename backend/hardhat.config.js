require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const POLYGON_RPC_URl = process.env.POLYGON_RPC_URl
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGON_API_KEY = process.env.POLYGON_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      }
    ],
  },
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5
    },
    mumbai: {
      url: POLYGON_RPC_URl,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      gasPrice: 8000000000,
      gas: 12450000,
      timeout: 60000,
      websockets: true,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  // in case you want to verify for mumbai testnet
  // mumbai: {
  //   apiKey: POLYGON_API_KEY,
  // },
}