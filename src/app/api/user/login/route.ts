
import { SchemaData } from "@/lib/models/model";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const{email,password}=reqBody;
        const data = await SchemaData.findOne({email});
        if(!data){
            console.log("Data not found")
        }else{
            const comParePassword = await bcryptjs.compare(password,data.password);

            if(!comParePassword){
                console.log("password is not match")
            }else{
                const tokenData = {
                    id:data._id,
                    email:data.email,
                    regNo:data.regNo,
                    name:data.name
                 }
                const token = Jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"});
                const response = NextResponse.json({Message:"File is founded",success:true});
                response.cookies.set("token",token,{httpOnly:true});
                return response;

            }
        }
    }catch(error:any){
        console.log("Data is invalid")
    }
   
}