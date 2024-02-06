'use client'
import axios from "axios"
import { useRouter } from "next/navigation"

export const LogOutBtn = ()=>{
     const router = useRouter();

    const TokenBtn = async()=>{
        try{
            await axios.get("/api/user/logout");
            router.push("/")
            router.refresh()
        }catch(error:any){
            throw new Error("Cookies not clear")
        }finally{

        }
        
    }
    
    return(
        <div>
            <button onClick={TokenBtn}>Logout</button>
        </div>
    )
}