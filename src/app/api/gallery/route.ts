import gallery from "@/app/models/galleryModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const body = await req.json();
    // console.log(body);
    const {title,description,catogery,imageURL} = body;

    const newImage = new gallery({
        title,
        description,
        catogery,
        imageURL
    })

    await newImage.save();


    return NextResponse.json({
        message:"gallery posted"
    })
        
    } catch (error:unknown) {
        return NextResponse.json({
            message:"error sending image",
            error
        })
    }
}