import { connectToDatabse } from "@/app/dbConfig/dbconfig";
import cloudinary from "@/app/lib/config";
import ClientProject from "@/app/models/clientProjectModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await connectToDatabse();
    const body = await req.json();
    // console.log(body);

    // const {name,company,workDid,testimonial} = body;

    // console.log(name,company,testimonial,workDid)

     const newProject = new ClientProject(body);
    const savedProject = await newProject.save();

    return NextResponse.json({
      message: "Client project added successfully",
      data: savedProject,
    }, { status: 201 });

        
    } catch (error:unknown) {
        console.error("Error saving project:", error);
    return NextResponse.json({
      message: "Failed to add client project",
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
    }
}