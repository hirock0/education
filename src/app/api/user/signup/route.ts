import { NextRequest, NextResponse } from "next/server";
import { SchemaData } from "@/lib/models/model";
import Jwt  from "jsonwebtoken";
import bcryptjs from "bcryptjs"
import { ConnectioDb } from "@/lib/connection/connection";
ConnectioDb()
export async function GET(){
    let data = await SchemaData.find()
    return NextResponse.json({message:"file found",data})
}
export async function POST(request:NextRequest){
    try{
        let reqData = await request.json();

        const{
         name,
         fatherName,
         motherName,
         dateOfBirth,
         regNo,
         degOrClass,
         nid,
         mertialStaus,
         mobile,
         email,
         password,
         country,
         present_address,
         permanant_address,
         gender,
         image,
         policy
        }=reqData;
        const Salt = await bcryptjs.genSalt(10);
        const hasedPassword = await bcryptjs.hash(password,Salt);
    
        let newSchemaData = await new SchemaData({
         name,
         fatherName,
         motherName,
         dateOfBirth,
         regNo,
         degOrClass,
         nid,
         mertialStaus,
         mobile,
         email,
         password:hasedPassword,
         country,
         present_address,
         permanant_address,
         gender,
         image,
         policy
     });
     let data  = await newSchemaData.save();
     const tokenData = {
        id:data._id,
        email:data.email,
        regNo:data.regNo,
        name:data.name
     }
     const token:any = Jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"});
     const response = NextResponse.json({message:"file found",success:true,data});
     response.cookies.set("token",token,{httpOnly:true});
     return response;
         

    }catch(error:any){
        return NextResponse.json({message:"File not found"})
    }

}