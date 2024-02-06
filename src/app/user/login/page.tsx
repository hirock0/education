"use client"
import { useState } from 'react';
import Style from './login.module.css'
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Login(){
    const router = useRouter()
    const [logindata,setLoginData]=useState({email:"",password:""});
    const onLogin = async(e:any)=>{
        e.preventDefault()
        try{

          const data =  await axios.post("/api/user/login",logindata);
            router.push("/")
            console.log(data)
        }catch(error:any){
            alert("Data not match")
        }

    }
    return(
        <main id={Style.main} className=" text-black min-h-screen  w-full flex items-center justify-center">
            <div id={Style.form_outer_div} className=" border p-10 backdrop:filter backdrop-blur-3xl bg-zinc-860/100 opacity-95 rounded-md">
               <h1 id={Style.heading_text} className=' text-center pb-4 text-base font-thin'>Please put the login data below or <br/> Sign Up</h1>
                <form id={Style.loginForm} className=" rounded-md flex border p-10 flex-col gap-4 items-center">
                    <input 
                    type="email"
                    placeholder="Email or Number"
                    value={logindata.email}
                    onChange={(e)=>setLoginData({...logindata,email:e.target.value})}
                 
                    /> 
                    
                    <input 
                    type="password"
                    placeholder="Password"
                    value={logindata.password}
                    onChange={(e)=>setLoginData({...logindata,password:e.target.value})}
        
                    />
                    <button className=" select-none" onClick={onLogin}>Login</button>
                    
                </form>
                <div className=' flex flex-col items-center justify-center gap-6 pt-4'>
                    <Link href={``}><label htmlFor="forgotPassword" className=' underline underline-offset-8 cursor-pointer'>forgot password?</label></Link>
                    <Link href={`/user/signup`}><label htmlFor="forgotPassword" className=' border p-2 pl-10 pr-10 rounded-md hover:bg-slate-700 active:bg-black cursor-pointer'>Sign Up</label></Link>
                </div>
              
            </div>
        </main>
    )
}