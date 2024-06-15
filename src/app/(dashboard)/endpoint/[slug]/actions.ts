'use server'

import { prisma } from "@/_lib/prisma"

export const FetchingSubmissions= async (EndpointId:string)=>{
    console.log(EndpointId)
    try {
        const submissions = await prisma.submissions.findMany({
            where:{EndpointId}
        })
        console.log(submissions)
        return submissions
    } catch (error) {
        console.log("----------------------------------------------------------------------------------------------------------------")
        return []
    }
}