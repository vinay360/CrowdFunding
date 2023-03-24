require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('./tasks/task');

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
    localhost: {
      url: 'http://localhost:8545',
    },
  },
};
