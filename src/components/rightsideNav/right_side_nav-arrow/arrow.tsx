'use client'
import Image from "next/image"
import { useState } from "react";



export default function RightNavArrow(){
const [flag,setFlag]=useState(false);
const Right_nav_animation = ()=>{
        let rightNavDiv = document.querySelector("#Right_nav_List") as HTMLElement;
        let rightBtn= document.querySelector("#arrowBtn") as HTMLElement;
        let leftBtn= document.querySelector("#arrowBtn2") as HTMLElement;
        if(!flag){
            rightNavDiv.style.transform=`translateX(${0}px)`;
            rightBtn.style.display = "none"
            leftBtn.style.display = "block"
            setFlag((prev)=>!prev)
        }else{
            rightNavDiv.style.transform=`translateX(${150}px)`;
            leftBtn.style.display = "none"
            rightBtn.style.display = "block"
            setFlag((prev)=>!prev)
        }

   }

    return(
            <>
            <button id="arrowBtn" onClick={Right_nav_animation} className="  p-1 rounded-full cursor-pointer bg-blue-700">
                <Image src={"/all_svg/arrow-left-line.svg"} alt="arrow" width={20} height={20} className=" select-none"/>     
            </button>
            <button id="arrowBtn2" onClick={Right_nav_animation} className=" hidden p-1 rounded-full cursor-pointer bg-blue-700">
                <Image src={"/all_svg/arrow-right-line.svg"} alt="arrow" width={20} height={20} className=" select-none"/> 
            </button>
            
            </>
    )
}