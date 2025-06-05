import mongoose from "mongoose";


const gallerySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    catogery:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        require:true
    }
})

const gallery =  mongoose.models.Gallery ||mongoose.model("Gallery",gallerySchema,"Gallery")

export default gallery;