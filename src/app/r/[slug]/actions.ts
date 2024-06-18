'use server'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function FindEndpoint(Endpoint: string) {
    try {
        const fetchendpoint = await prisma.endpoint.findMany({
            where: {
                OR: [{ Endpoint }]
            }
        })
        if (fetchendpoint.length < 1) {
            return "no endpoint found"
        }
        return fetchendpoint[0]
    } catch (error) {
        console.log(error)
        return "error while fetching"
    }
}

export async function StoringData(formdata: Object, EndpointId: string, WorkspaceId: string , discord_wh :string , slack_wh:string  ,email :string , analytics:AnalyticsType) {
    try {
        const submitted = await prisma.submissions.create({
            data: {
                formdata,
                EndpointId: EndpointId,
                WorkspaceId: WorkspaceId,
                webhook: "https://example.com/webhook",
                webhook_status: "pending",
                discord: discord_wh,  // Leave empty if not used
                discord_status: "nill",
                slack: slack_wh,  // Leave empty if not used
                slack_status: "nill",
                analytics,
                email: email,
                email_status: "pending",
                no_feilds: 10,  // Number of fields in the form
            }
        })
        return submitted
    } catch (error) {
        console.log(error, "loggig in function")
        return "fucked up something "
    }
}

export const Sending_slack_wh = async (formdata: object, slack_wh: string | null , Id:string) => {
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/slack" : ""


    try {
        const fetching = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, slack_wh })
        })
        if (fetching.ok) {
            UpdateSlack(Id)
            console.log("slack sent succesfull ")
        } else {
            console.log("something went wrong  slack ", fetching)
        }
    } catch (error) {
        console.log(error)
    }
}
export const Sending_discord_wh = async (formdata: object, discord_wh: string | null,Id:string) => {
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/discord" : ""
    try {
        const fetching = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, discord_wh })
        })
        if (fetching.ok) {
            UpdateDiscord(Id)
            console.log("discord sent succesfull ")
        } else {
            console.log("something went wrong discord ", fetching)
        }
    } catch (error) {
        console.log(error)
    }
}
export const Sending_email = async (formdata: object, email: string, endpoint: string | null,Id:string) => {
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/email" : ""
    try {
        const fetching = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, email, endpoint })
        })
        if (fetching.status === 200) {
            UpdateEmail(Id)
        } else {
            console.log("something went wrong email  ", fetching)
        }
    } catch (error) {
        console.log(error)
    }
}


// UPDATING 
export const UpdatingSUbmissions = async (Endpoint: string) => {
    try {
        const endpoint = await FindEndpoint(Endpoint)
        const Id = endpoint.Id
        if (endpoint !== "error while fetching" || "no endpoint found") {
            await prisma.endpoint.update({
                where: { Id },
                data: { submissions: endpoint.submissions + 1 },

            })
        }
        return ""
    } catch (error) {
        console.log(error)
        return "error while fetching"
    }

}
//updating submissions  -> get three parameters -  Id of submission  ,  status & url link so that pk will be Id of submission and you can change the status accordingly and update the url too 

export const UpdateSlack = async (Id: string,) => {
    try {
        const status = await prisma.submissions.update({
            where: { Id },
            data: {
                slack_status: "true",
            }
        })
    } catch (error) {
        console.log(error, "UpdateSlack")

    }
}

export const UpdateDiscord = async(Id:string)=>{
    try {
        const status = await prisma.submissions.update({
            where: { Id },
            data: {
                discord_status: "true",
            }
        })
    } catch (error) {
        console.log(error, "UpdateDiscord")

    }
}
export const UpdateEmail = async(Id:string)=>{
    try {
        const status = await prisma.submissions.update({
            where: { Id },
            data: {
                email_status: "true",
            }
        })
    } catch (error) {
        console.log(error, "UpdateEmail")

    }
}


interface AnalyticsType {
    Os:string,
    Browser :string,
    DeviceType:string
}