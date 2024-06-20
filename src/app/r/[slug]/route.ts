'use server'

import { NextResponse } from "next/server"
import { FindEndpoint, Sending_discord_wh, Sending_email, Sending_slack_wh, StoringData,  UpdatingSUbmissions } from "./actions"
import { Analytics, updating_endpoint } from "./Analytics"

export async function POST(req: Request , { params }: { params: { slug: string } }) {
    try {
        // storing values 
        const endpoint = params.slug
        const body = await req.json()

        //userAgent 
        const userAgent = req.headers.get('User-Agent') || ""

        //parsing useragent to analytics of the page 
        const analytics = await Analytics(userAgent)

        // conditions
        if(endpoint.length !=7  || typeof endpoint != "string"  ){
            return NextResponse.json({message:"Invalid endpoint "})
        }
        if (!body || typeof body !="object") return NextResponse.json({ message: "Invalid json or empty json" }) // empty json 
        
     // FETCHING ENDPOINT 
       const EndpointInfo =  await  FindEndpoint(endpoint)
       if ( EndpointInfo == "no endpoint found" ){
        return NextResponse.json({message:"Something went wrong"})
       }
       // GATHERING VALUES FOR IT 
       const EndpointId = EndpointInfo.EndpointId
       const WorkspaceId = EndpointInfo.WorkspaceId
       const email = EndpointInfo.email
       const discord_wh = EndpointInfo.discord_wh
       const slack_wh = EndpointInfo.slack_wh || ""
       const webhook = EndpointInfo.webhook

       //STORING N DB 
       const formdata = body
       const storing = await StoringData(formdata ,EndpointId  ,WorkspaceId ,discord_wh, slack_wh , email , analytics  )
       UpdatingSUbmissions(endpoint) // update submission 
       

       const Id = storing.Id // sanitize 
       Sending_slack_wh(formdata , slack_wh,Id)
       Sending_discord_wh(formdata , discord_wh,Id)
       Sending_email(formdata , email ,endpoint ,Id)
    console.log(analytics, "loggig analytics ")
       const updating = await updating_endpoint(endpoint ,analytics)
       console.log(updating , "upda")
        //returning response 
        return NextResponse.json(EndpointInfo  )

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "json parsing error " })


    }

}