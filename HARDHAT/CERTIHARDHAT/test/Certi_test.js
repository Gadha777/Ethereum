const { loadFixture } = require('@nomicfoundation/hardhat-toolbox/network-helpers');
const {expect}=require('chai');
const {ethers}=require('hardhat');
// const Certi = require('../ignition/modules/Certi');
describe('Certi',function(){
    async function deploycontract (){
        const [admin ,other]=await ethers.getSigners();
        const cert=await ethers.getContractFactory('Cert');
        const Cert=await cert.deploy();
        return{Cert,admin,other}
    }
    it ("should be deployed only by admin",async function () {
        const {Cert,admin}=await loadFixture (deploycontract);
        console.log(admin);
        expect(Cert.deploymentTransaction().from).to.equals(admin.address);
    })
    it ("Able to issue & read certificate",async function () {
        const {Cert,admin}=await loadFixture (deploycontract);
        await Cert.issue(1,"sumi","CED","A","12/2/2024");
        const Certi=await Cert.Certificates(1);
        expect(Certi[0]).to.equals("sumi");
        expect(Certi[1]).to.equals("CED");
        expect(Certi[2]).to.equals("A");
        expect(Certi[3]).to.equals("12/2/2024");
    })
    it("only admin can issue the certificate ", async function () {
        const {Cert,other}=await loadFixture (deploycontract);
        await expect(Cert.connect(other).issue(2,"arya","ced","s","1/2/2024")).to.be.revertedWith("unauthorized access")
    })
})