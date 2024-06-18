import { prisma } from "@/_lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { userId, Endpoint  ,WorkspaceId,email , discord_wh ,  slack_wh ,webhook  } = await req.json()
    try {
        const newpoint = await prisma.endpoint.create({
            data:{
                userId,
                Endpoint,
                WorkspaceId,
                email,
                discord_wh,
                slack_wh,
                webhook,
                analytics:{
                    Os:{},
                    Browser:{},
                    DeviceType:{}
                }
            }
        })
        return NextResponse.json(newpoint)
    } catch (error) {
        return NextResponse.json({message:error})
    }
    
}