import mongoose from "mongoose";
import admin from "../models/adminModel";

let URI:string;

if(process.env.NODE_ENV=="development"){
    URI = process.env.MONGO_URI!
}
else{
    URI = process.env.MONGO_ATLAS_URI!
}

export async function connectToDatabse (){
    try {
        await mongoose.connect(URI);

        mongoose.connection.on("connected",()=>{
            console.log("Connected to database")
        })

        mongoose.connection.on("error",()=>{
            console.log("Error connecting to databse");
        })

        await defaultAdminCreation();
    } catch (error) {
        console.log(error);
    }
}


async function defaultAdminCreation(){
    const existingAdmin = await admin.findOne({email:"admin@gmail.com"})

    if(!existingAdmin){
        const defaultAdmin = new admin({
            email:"admin@gmail.com",
            password:"admin123",
        })
        await defaultAdmin.save();
    }

}