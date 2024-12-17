import React, { useState } from 'react'
import {ethers} from "ethers"
import ABI from "../src/assets/Cert.json"
import address from "../src/assets/deployed_addresses.json";

const App = () => {
  const [formdata,setFormdata]=useState({
    id:0,
    name:'',
    course:'',
    grade:'',
    date:''
  })

const [output,setOutput]=useState('');
function handlechange(e){
//  console.log(e.target.value);
const { name, value } = e.target;
setFormdata((prevFormdata) => ({
  ...prevFormdata,
  [name]: value,
}));
console.log(formdata);

 
}
 async function connecttometamask(){
    const provider= new ethers.BrowserProvider (window.ethereum);// we need a provider here we interact from front so we select browserprovider function
    //variable to store the signer (ath account vazhi aayitt annu connect)
    const signer =await provider.getSigner();//now we have set the signer for this use method called getsigner
    console.log(signer.address);
    alert(signer.address);
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
     const receipt =await certiInstance.issue (formdata.id,
                         formdata.name,
                         formdata.course,
                         formdata.grade,
                         formdata.date
    );
    console.log(receipt);
  }
  async function getcertificate() {
    const id = document.getElementById("ID").value;
    const provider= new ethers.BrowserProvider (window.ethereum);
    const signer =await provider.getSigner();
    const cAbi= ABI.abi;
    const cAddress=address['CertModule#Cert'];
    const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
    const txtvalue= await certiInstance.Certificates(id);
    console.log(txtvalue);
    setOutput(`${txtvalue[0]} is certified in the Course ${txtvalue[1]} passed by the grade ${txtvalue[2]} on the date ${txtvalue[3]} .`)
  }
  return (
    <div>
      <div>
        <button onClick={connecttometamask} > Connect to MetaMask</button>
      </div>
      <div>
        <form action="" onSubmit={handlesubmit}>
         <div>
         <label htmlFor="ID"> ID</label>
         <input type="number" name="id" id="id" onChange={handlechange}/>
         </div>
         <div>
         <label htmlFor="">Name</label>
         <input type="text" name="name" id="name" onChange={handlechange}/>
         </div>
        <div> 
         <label htmlFor="">Course</label>
        <input type="text" name="course" id="course"  onChange={handlechange}/>
        </div>
         <div>
         <label htmlFor="">Grade</label>
         <input type="text" name="grade" id="grade"  onChange={handlechange}/>
         </div>
          <div>
            <label htmlFor="">Date</label>
            <input type="date" name="date" id="date"onChange={handlechange} />
          </div>
          <div>
            <input type='submit' value="submit" /> 
          </div>
        </form>
      </div>
      <div>
        <input type="number" name="ID" id="ID"  />
        <button onClick={getcertificate}>Get certificate</button>

        {/* <input type="button" value="get certificate" id="" onClick={getcertificate}/> */}
      </div>
      <div>
        <p>{output}</p>
      </div>
    </div>
  )
}

export default App