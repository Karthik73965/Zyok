'use server'

import { prisma } from "@/_lib/prisma"

export const FetchingSubmissions= async (EndpointId:string)=>{
    try {
        const submissions = await prisma.submissions.findMany({
            where:{EndpointId}
        })
        return submissions
    } catch (error) {
        return []
    }
}