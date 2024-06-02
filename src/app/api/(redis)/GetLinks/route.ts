import { prisma } from "@/_lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const {WorkspaceId} = await req.json()
    try {
        const Links = await prisma.endpoint.findMany({

            where:{
               WorkspaceId
            }
        })
        return NextResponse.json(Links  )
    } catch (error) {
        console.log(error)
        NextResponse.json({some:"someerror"})
    }
}