import mongoose from "mongoose";

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
    } catch (error) {
        console.log(error);
    }
}