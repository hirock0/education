import { ConnectioDb } from "../connection/connection";
ConnectioDb()
import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    fatherName:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    motherName:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    dateOfBirth:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    regNo:{
        type:Number,
        required:[true,"Fill the name"],
        unique:true

    },
    degOrClass:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    nid:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    mertialStaus:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    mobile:{
        type:Number,
        required:[true,"Fill the name"],
        unique:true

    },
    email:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    password:{
        type:String,
        required:[true,"Fill the name"]
    },
    country:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    present_address:{
        village:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        post:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        thana:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        district:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        postcode:{
            type:Number,
            required:[true,"Fill the name"],
            unique:true
        }
    },
    permanant_address:{
        village:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        post:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        thana:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        district:{
            type:String,
            required:[true,"Fill the name"],
            unique:true
        },
        postcode:{
            type:Number,
            required:[true,"Fill the name"],
            unique:true
        }
    },
    gender:{
        type:String,
        required:[true,"Fill the name"],
        unique:true

    },
    image:{
        type:String,
        required:[true,"Fill the name"]
    },
    policy:{
        type:Boolean,
        required:[true,"Fill the name"],
        unique:true

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenVerify:Date,
    token:String,
    tokenVerify:Date
});

export const SchemaData = mongoose.models.signupdatas || mongoose.model("signupdatas",UserSchema);