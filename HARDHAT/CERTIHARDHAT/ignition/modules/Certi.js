// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
//build module is for building the script for file 
module.exports = buildModule("CertModule", (m) => {

  // This specifies the contract named Cert (from the project’s artifacts) to be deployed.
  const Certi = m.contract("Cert");//specific the contract that to deploy 

  // The deployment details of the Cert contract are returned, which include the deployed address and other metadata.
  return { Certi };// it will give the deployment details
});

