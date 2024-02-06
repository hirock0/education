import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { SchemaData } from "@/lib/models/model";
import { ConnectioDb } from "@/lib/connection/connection";
ConnectioDb()
export async function GET(request:NextRequest){
    try{
    const token = request.cookies.get("token")?.value || "";
    const verifyToken:any = Jwt.verify(token,process.env.TOKEN_SECRET!);
    const email = {email:verifyToken.email}
    const meUser = await SchemaData.findOne(email).select("-password");
    return NextResponse.json({Message:"File is got",success:true,meUser})

    }catch(error){
        return NextResponse.json({Message:"File is not found",success:false})
    }
    
}