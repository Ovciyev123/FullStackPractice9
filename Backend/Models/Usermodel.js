import { model, Schema } from "mongoose";





const UserShema=new Schema({


    name:String,
    job:String,
    salary:Number,
    image:String
})



export const Usermodel=model("users",UserShema)