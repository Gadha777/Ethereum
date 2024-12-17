import { Router } from "express";
import {ethers} from "ethers";
import ABI from "../Routes/Cert.json"  assert { type: "json" };
import address from "../Routes/deployed_addresses.json"  assert { type: "json" };


const certiroute=Router();
// when using hardhat node
const provider =new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
const signer=await provider.getSigner();
console.log(signer.address);
// when using sepolia 
// const provider =new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/fqTixvEzDrB3Wm-W-tSTgOTOe9fmZm5q");
// const signer=new ethers.Wallet(process.env.private_key)
// console.log(signer.address);


const certiInstance= new ethers.Contract(address["CertModule#Cert"],ABI.abi,signer)


certiroute.get('/',(req,res)=>{
    console.log("hi")
    res.send("working !")
})
certiroute.post('/issue',async(req,res)=>{
    const {id,name,course,grade,date}=req.body;
    const receipt=await certiInstance.issue(id,name,course,grade,date)
    console.log(receipt);
    if(receipt)
    {
        res.send(receipt.hash);
    }
    else{
        res.status(404).json({message:"your transaction failed"})
    }
})
certiroute.get('/getcertificate',async(req,res)=>{
    const id= req.query.id;
    console.log(id);
    
    const viewvalue = await certiInstance.Certificates(id);
    res.send(viewvalue);
    console.log(id)
})

export {certiroute};