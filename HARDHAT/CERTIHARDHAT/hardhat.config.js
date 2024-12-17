require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork:"localhost",
  // we have specific which network like blockchain
  networks:{ //hardhat node
    localhost:{ //hardhat network simulation 
      url:" http://127.0.0.1:8545/" 
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/fqTixvEzDrB3Wm-W-tSTgOTOe9fmZm5q",
      accounts:[process.env.private_key]
    }
  }
};
