import React from 'react'
import imagePath from '../assets/online-course.png';
import { Link } from 'react-router-dom';
import {ethers} from "ethers"


const Home = () => {
    async function connecttometamask(){
        const provider= new ethers.BrowserProvider (window.ethereum);// we need a provider here we interact from front so we select browserprovider function
        //variable to store the signer (ath account vazhi aayitt annu connect)
        const signer =await provider.getSigner();//now we have set the signer for this use method called getsigner
        console.log(signer.address);
        alert(signer.address);
         }
  return (
    <div className='bg-gray-200 h-[600px] '>
        <div className="flex justify-end  p-2 ">
            <button className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100"  onClick={connecttometamask} >Connect to MetaMask</button>
            <Link to='/issue' className="rounded w-40 h-10 p-2 pl-6 text-justify text-white bg-sky-500">Issue certificate</Link>
        </div>
        <div className="text-center text-4xl font-extrabold">
            <p>Certificate Dapp</p>
        </div>
        <div className=" ">
            <div className=" flex justify-center items-center mt-12 " >
                <img className="w-40 h-40" src={imagePath} alt="" />
            </div>
        </div>
        <div className="flex justify-center items-center  mt-12 ">
            <input className="border border-sky-500" type="text" placeholder="       enter certificate ID to View"/>
            <input className="border border-sky-500 bg-sky-500 w-24 text-slate-100 ml-4" type="button" name="" value="search" />
        </div>

    </div>
  )
}

export default Home