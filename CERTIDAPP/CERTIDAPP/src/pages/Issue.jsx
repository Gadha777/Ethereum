import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ABI from "../assets/Cert.json"
import address from "../assets/deployed_addresses.json";
import {ethers} from "ethers"

const Issue = () => {
    const [formdata,setFormdata]=useState({
        course:'',
        id:'',
        name:'',
      
        grade:'',
        date:''
      })
    function handlechange(e){
        //  console.log(e.target.value);
        const { name, value } = e.target;
        setFormdata((prevFormdata) => ({
          ...prevFormdata,
          [name]: value,
        }));
        console.log(formdata);
        
         
        }
    async function handlesubmit(e) {
        e.preventDefault();
        const provider= new ethers.BrowserProvider (window.ethereum);// we need a provider here we interact from front so we select browserprovider function
        //variable to store the signer (ath account vazhi aayitt annu connect)
        const signer =await provider.getSigner();
        const cAbi= ABI.abi;
        const cAddress=address['CertModule#Cert'];
        console.log(cAddress);
        // this interact with the smartcontract
        const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
        console.log(certiInstance);
        //now interact with function inside the contract
         const receipt =await certiInstance.issue (formdata.course,
                             formdata.id,
                             formdata.name,
                             formdata.grade,
                             formdata.date
        );
        console.log(receipt);
      }
  return (
    <div>
        <div class="flex ">
            <p class="font-bold flex justify-start text-2xl">Certificate Dapp</p>
            <div class="flex justify-end  p-2  ml-auto mt-0">
                <Link class="rounded w-24 h-10 p-2 pl-6 mr-4 text-justify mt-0 "  to="/" >Home</Link>
                <Link to="/issue" class="rounded w-40 h-10 p-2 pl-6 text-justify bg-sky-500  text-slate-100 ">Issue certificate</Link>
            </div>
        </div>
       <form onSubmit={handlesubmit}>
       <div class="border border-slate-500 bg-slate-100 w-4/5 ml-20 mt-8 h-4/5">
            <p class="ml-12 mt-10 text-2xl">Issue New Certificate</p>
            <div class="ml-12 mt-2">
                <label for="">Select Course*</label>
                    <br/>
                        <select class="bg-slate-300 w-5/12 h-7" name="course" id="course"  onChange={handlechange} >
                        <option value="Certified Blockchain Associate" >Certified Blockchain Associate</option>
                        <option value="cyber security analyst">cyber security analyst</option>
                        <option value=""></option>
                        <option value=""></option>
                        </select>
            </div>
                    <br/>
                    <br/>
            <div class="ml-12 mt-2"><label for="">Certifate ID*</label>
                    <br/>
                    <input class="bg-slate-300 w-5/12 h-7" type="text" placeholder="Certificate ID"name="id" id="id" />
            </div>
            <br/>
            <div class="ml-12 mt-2">
                <label  for="">Select Grade*</label>
                    <br/>
                        <select class="bg-slate-300 w-5/12 h-7" name="grade" id="grade"  >
                        <option value="">A+</option>
                        <option value="">A</option>
                        <option value="">B+</option>
                        <option value="">B</option>
                        <option value="">C+</option>
                        <option value="">C</option>
                        <option value="">D+</option>
                        <option value="">D</option>
                        <option value="">F</option>
                        </select>
            </div>
                        <br/>
            <div class="ml-12 mt-2">
                <label for="" >Issue Date*</label>
                        <br/>
                <input type="date" class="bg-slate-300 w-5/12 h-7" name="date" id="date" onChange={handlechange}/>
            </div>
            <div class="ml-12 mt-2 rounded w-40 h-10 p-2 pl-6 text-justify bg-sky-500  text-slate-100 mb-8 "><input class="button1" type="submit" value="Issue Certifate"/></div>

        </div>
       </form>

    </div>
  )
}

export default Issue