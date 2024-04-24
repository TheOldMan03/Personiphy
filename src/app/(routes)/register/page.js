"use client"

import logo from "../../../assets/login.jpeg"
import Image from "next/image"
import {useState} from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register(){

  const router=useRouter()

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
  

  async function registration(){

    try{
      await axios.post("/api/register",user)
      router.push("/login")
    }

    catch(error){
      console.log("Something went wrong with the registration")
    }
  }

  return (
      <div className="bg-white shadow-lg flex flex-col items-center mx-auto mt-16 rounded-xl overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">

      <div className="lg:w-1/2 sm:p-8">
        {/* <h1 className="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">Discover talented and creative professionals.</h1> */}

        <h2 className="text-2xl font-bold mt-4 mb-6 text-gray-700">Register</h2>

        <form action="" className="flex flex-col">
            <div id="input-field" className="flex flex-col mb-4 relative">
                <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
                <label htmlFor="name" className="mb-2 text-gray-700">Your Name</label>
                <input type="name" name="" id="name" placeholder="John Doe" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" onChange={e=>setUser({...user,name:e.target.value})}/>
            </div>


          <div id="input-field" className="flex flex-col mb-4 relative">
            <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
            <label htmlFor="email" className="mb-2 text-gray-700">Your email</label>
            <input type="email" name="" id="email" placeholder="youremail@gmail.com" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" onChange={e=>setUser({...user,email:e.target.value})}/>
          </div>

          <div id="input-field" className="flex flex-col relative">
            <i className="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
            <label htmlFor="Password" className="mb-2 text-gray-700">Password</label>
            <input type="password" name="" id="password" placeholder="your password" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500" onChange={e=>setUser({...user,password:e.target.value})}/>
          </div>

          <button className="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md" onClick={()=>registration()} >Register</button>
        </form>

        <p className="text-gray-500">Already have an account? <Link href="/login" className="text-blue-500 font-semibold underline">Login</Link></p>

      </div>

      <div className="w-1/2">
        <Image src={logo} alt="" className="h-f lg:block hidden"/>
      </div>
    </div>

  )
}
