'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import Link from "next/link"

export default function ProfileDetails(){

    const[userDataofProfile,setUserDataofProfile]=useState({name:"",fatherName:"",motherName:"",email:"",nid:""})
    
const meUserData = async()=>{
    try{
        const userDataProfile = await axios.get('/api/user/me');
        setUserDataofProfile(userDataProfile.data.meUser);
    }catch(error){
        console.log("file not ff")
    }


 }

 useEffect(()=>{
    meUserData();
    
 },[userDataofProfile])
    return(
        <main id="profiledetails" className=" fixed top-24 w-52 right-0 h-80 hidden backdrop:filter backdrop-blur-3xl bg-slate-800/100 opacity-95 pl-3 pt-4 ">
            <ul  className=" flex flex-col gap-5">
                <Link href={{pathname:"user/profile"}}><li>Profile</li></Link>
                <li>Events</li>
                <li>Groups</li>
                <li>Company</li>
                <li>Business</li>
                <li>Settings</li>
            </ul>
            <div className=" pt-4">
            </div>
            
        </main>
    )
}