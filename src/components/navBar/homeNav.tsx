'use client'
import Image from "next/image";
import Style from './nav.module.css';
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ProfileDetails from "../profileDetails/profileDetails";


export default function Nav(){

    const[flag,setFlag]=useState(false);
    const[profileFlag,setProfileFalg]=useState(false)
   
    const SidemenuList = ()=>{
        let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
        if(!flag){
            menuList.style.transform=`translateX(${0}px)`
            setFlag((prev)=>!prev)
        }else{
            menuList.style.transform=`translateX(${-250}px)`
            setFlag((prev)=>!prev)
        }
    }







    
const courses = ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    menuList.style.transform=`translateX(${-250}px)`;
    couRses.style.display="block";
    stuDents.style.display="none";
    teacHers.style.display="none";
    aboutUs.style.display="none";
    contaCt.style.display="none";
    profileDets.style.display = "none";
    setProfileFalg(false)
    setFlag(false)
    
}
const students= ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    menuList.style.transform=`translateX(${-250}px)`;
    couRses.style.display="none";
    stuDents.style.display="block";
    teacHers.style.display="none";
    aboutUs.style.display="none";
    contaCt.style.display="none";
    profileDets.style.display = "none";
    setProfileFalg(false)
    setFlag(false)
}

const teachers = ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    menuList.style.transform=`translateX(${-250}px)`;
    couRses.style.display="none";
    stuDents.style.display="none";
    teacHers.style.display="block";
    aboutUs.style.display="none";
    contaCt.style.display="none";
    profileDets.style.display = "none";
    setProfileFalg(false)
    setFlag(false)
   
}

const aboutus= ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    menuList.style.transform=`translateX(${-250}px)`;
    couRses.style.display="none";
    stuDents.style.display="none";
    teacHers.style.display="none";
    aboutUs.style.display="block";
    contaCt.style.display="none";
    profileDets.style.display = "none";
    setProfileFalg(false)
    setFlag(false)
   
}
const contact = ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    menuList.style.transform=`translateX(${-250}px)`;
    couRses.style.display="none";
    stuDents.style.display="none";
    teacHers.style.display="none";
    aboutUs.style.display="none";
    contaCt.style.display="block";
    profileDets.style.display = "none";
    setProfileFalg(false)
    setFlag(false)
}

const[meData,setMeData]=useState({name:"",image:""});
const profileData = async()=>{ 

    try{
            let userdata:any = await axios.get("/api/user/me");
            setMeData(userdata.data.meUser);
   
    }catch(error:any){
        console.log("file not found",error)
    }
}



const OnprofileDetails = ()=>{
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    if(!profileFlag){
        profileDets.style.display = "block";
        setProfileFalg((prev)=>!prev);
    }else{
        profileDets.style.display = "none";
        setProfileFalg((prev)=>!prev)
    }
}


const DocumentClicking = ()=>{
    let couRses = document.querySelector("#Courses") as HTMLElement;
    let stuDents = document.querySelector("#Students") as HTMLElement;
    let teacHers = document.querySelector("#Teachers") as HTMLElement;
    let aboutUs = document.querySelector("#AboutUs") as HTMLElement;
    let contaCt = document.querySelector("#Contact") as HTMLElement;
    let menuList = document.querySelector("#Side_menu_list") as HTMLElement;
    let hamDiv = document.querySelector("#menu_line_div") as HTMLElement;
    let profileDets = document.querySelector("#profiledetails") as HTMLElement;
    let profileNameDiv = document.querySelector("#profileName") as HTMLElement;

    document.addEventListener("click",(e:any)=>{
        if(!couRses.contains(e.target) && e.target.id !== "courseBtn"){
            couRses.style.display="none";
        }
        if(!stuDents.contains(e.target) && e.target.id !== "studenBtn"){
            stuDents.style.display="none";
        }
        if(!teacHers.contains(e.target) && e.target.id !== "teacherBtn"){
            teacHers.style.display="none";
        }

        if(!aboutUs.contains(e.target) && e.target.id !== "aboutusBtn"){
            aboutUs.style.display="none";
        }
        if(!contaCt.contains(e.target) && e.target.id !== "contactBtn"){
            contaCt.style.display="none";
        }

        if(!menuList.contains(e.target) && !hamDiv.contains(e.target)){
            menuList.style.transform=`translateX(${-250}px)`;
            setFlag(false)
        }
        if(!profileDets.contains(e.target) && !profileNameDiv.contains(e.target)){
            profileDets.style.display = "none";
            setProfileFalg(false)
        }
            
    });
   

};



useEffect(()=>{
    DocumentClicking();
    profileData();

},[meData]);

    return(
        <nav id={Style.nav} className=" z-50 fixed left-0 right-0 top-0 backdrop:filter backdrop-blur-3xl bg-zinc-860/100 opacity-100 h-24 flex items-center justify-center">
            <div className="  w-full container flex items-center justify-between">
                
                <div className="cursor-pointer" id="menu_line_div" onClick={SidemenuList}>
                    <Image id={Style.menu_line} src={"/all_svg/menu-line.svg"} alt={"menu_line"} width={25} height={25}/>
                </div>

                <div id={Style.navMiddle} className=" flex items-center justify-center relative">
                    <ul id={Style.navUl} className=" navUlClass flex items-center justify-between w-full h-24 ">
                        <li id="courseBtn" onMouseOver={courses} className=" select-none hover:underline underline-offset-8 ">Coursers</li>
                        <li id="studenBtn" onMouseOver={students} className=" select-none hover:underline underline-offset-8 ">Students</li>
                        <li id="teacherBtn" onMouseOver={teachers} className=" select-none hover:underline underline-offset-8 ">Teachers</li>
                        <li id="aboutusBtn" onMouseOver={aboutus} className=" select-none hover:underline underline-offset-8 ">About Us</li>
                        <li id="contactBtn" onMouseOver={contact} className=" select-none hover:underline underline-offset-8 ">Contant Us</li>
                    </ul>
                </div>
                <div id="profileName">
                    {
                        meData?
                        <div  onClick={OnprofileDetails} className="text-white flex items-center gap-1 cursor-pointer select-none ">
                                <img
                                    src={meData.image}
                                    alt="profileImage"
                                    width={40}
                                    height={40}
                                    className=" rounded-full"
                                />
                  
                                <div className=" text-xs pl-3 text-nowrap max-sm:pr-5">
                                    {
                                        meData.name
                                    }
                                </div>
                            
                        </div>
                        
                        :

                        <Link href={`/user/login`}> <label id={Style.loginbtn} htmlFor="login" className=" border p-1 pr-3 pl-3 rounded-sm hover:bg-blue-800 cursor-pointer select-none active:bg-green-900">Login</label></Link>
                        
                    
                    }
                    <ProfileDetails/>
                    
                </div>
            </div>

        </nav>
    )
};