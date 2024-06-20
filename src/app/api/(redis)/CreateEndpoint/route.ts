import { prisma } from "@/_lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { userId, Endpoint  ,WorkspaceId,email , discord_wh ,  slack_wh ,webhook  } = await req.json()
    try {
        console.log("creatign endpoint ")
        const newpoint = await prisma.endpoint.create({
            data:{
                userId,
                Endpoint,
                WorkspaceId,
                email,
                discord_wh,
                slack_wh,
                webhook,
                analytics
            }
        })
        return NextResponse.json(newpoint)
    } catch (error) {
        return NextResponse.json({message:error})
    }
    
}
const  analytics = {
    Os:{},
    Browser:{},
    DeviceType:{}
}