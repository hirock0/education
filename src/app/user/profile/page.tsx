"use client"
import { LogOutBtn } from "@/components/user/logout/logOut";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Style from './profile.module.css'
export default function Profile(){
    const[medata,setMedata]=useState({name:"",fatherName:"",motherName:"",email:"",image:""})

    const meUserData = async()=>{
        const meData = await axios.get("/api/user/me");
        setMedata(meData.data.meUser)
    }

    useEffect(()=>{
        meUserData()
    },[medata])
    return(
        <main className=" text-black  h-screen w-full">
            <div className=" ">
                <div className=" flex items-center justify-center pt-10">
                    <Image
                        src={medata.image}
                        alt=""
                        height={100}
                        width={100}
                        className=" rounded-full"
                    />
                </div>
                <ul id={Style.Ul} className="text-black flex flex-col justify-center items-center gap-2 ">
                    <li><span>Name:</span><span>{medata.name}</span></li>
                    <li><span>FatherName:</span><span>{medata.fatherName}</span></li>
                    <li><span>MotherName:</span><span>{medata.motherName}</span></li>
                    <li><span>Email:</span><span>{medata.email}</span></li>
                </ul>
            </div>
            <div className=" bg-red-600 text-white flex align-center justify-center w-20 mt-10 ml-10 cursor-pointer">
                <LogOutBtn/>
            </div>
        </main>
    )
}