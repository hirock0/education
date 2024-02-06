'use client'
import Style from './rightNav.module.css'
import { useEffect } from 'react'

export default function RightSideNav(){


    const courses_side = ()=>{
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;

                couRses_side .style.display="block";
                stuDents_side .style.display="none";
                teacHers_side .style.display="none";
                aboutUs_side .style.display="none";
                contaCt_side .style.display="none";


    }
    const students_side = ()=>{ 
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;
          
                couRses_side .style.display="none";
                stuDents_side .style.display="block";
                teacHers_side .style.display="none";
                aboutUs_side .style.display="none";
                contaCt_side .style.display="none";
        
            
   
    }
    
    const teachers_side = ()=>{
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;
    
                couRses_side .style.display="none";
                stuDents_side .style.display="none";
                teacHers_side .style.display="block";
                aboutUs_side .style.display="none";
                contaCt_side .style.display="none";


       
     }
    
    const aboutus_side= ()=>{
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;
    
                couRses_side .style.display="none";
                stuDents_side .style.display="none";
                teacHers_side .style.display="none";
                aboutUs_side .style.display="block";
                contaCt_side .style.display="none";
       
    }
    const contact_side = ()=>{
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;
    
                couRses_side .style.display="none";
                stuDents_side .style.display="none";
                teacHers_side .style.display="none";
                aboutUs_side .style.display="none";
                contaCt_side .style.display="block";
    }
    
    const DocumentClicking_side = ()=>{
        let couRses_side = document.querySelector("#Courses_side") as HTMLElement;
        let stuDents_side  = document.querySelector("#Students_side") as HTMLElement;
        let teacHers_side  = document.querySelector("#Teachers_side") as HTMLElement;
        let contaCt_side  = document.querySelector("#Contact-side") as HTMLElement;
        let aboutUs_side  = document.querySelector("#AboutUs_side") as HTMLElement;
        document.addEventListener("click",(e:any)=>{
            if(!couRses_side.contains(e.target) && e.target.id !== "cousersBtn_side"){
                couRses_side.style.display="none";
              
            }
            if(!stuDents_side.contains(e.target) && e.target.id !== "studentBtn_side"){
                stuDents_side.style.display="none";

                
            }
            if(!teacHers_side.contains(e.target) && e.target.id !== "teacherBtn_side"){
                teacHers_side.style.display="none";
            }
    
            if(!aboutUs_side.contains(e.target) && e.target.id !== "aboutusBtn_side"){
                aboutUs_side.style.display="none";
            }
            if(!contaCt_side.contains(e.target) && e.target.id !== "contactBtn_side"){
                contaCt_side.style.display="none";
            }
                
        });
    
    };
    
    useEffect(()=>{
        DocumentClicking_side()
    });



    return(
    
                <div id={Style.rightNavDiv} className="">
                    <ul id={Style.rightNavUl}  className=" flex flex-col gap-4 backdrop:filter backdrop-blur-3xl bg-zinc-860/100 opacity-95 border">
                        <li id='cousersBtn_side' onClick={courses_side}>coursers</li>
                        <li id='studentBtn_side' onClick={students_side}>Students</li>
                        <li id='teacherBtn_side' onClick={teachers_side}>Teachers</li>
                        <li id='aboutusBtn_side' onClick={aboutus_side}>About Us</li>
                        <li id='contactBtn_side' onClick={contact_side}>Contant us</li>  
                    </ul>
                </div>
 
    )
}