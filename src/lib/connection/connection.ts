import mongoose from "mongoose"
export const ConnectioDb = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI!);
        let connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Mongo DB is connected")
        });
        connection.on("error",(error)=>{
            console.log("Mongo DB is not connected" + error)
        })

    }catch(error:any){
        console.log("DB not found")
    }
}