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

export async function StoringData(formdata: Object) {
    try {
        const submitted = await prisma.submissions.create({
            data: {
                formdata,
                EndpointId: "ep_1234",
                WorkspaceId: "ws_5678",
                webhook: "https://example.com/webhook",
                webhook_status: "pending",
                discord: "",  // Leave empty if not used
                discord_status: "nill",
                slack: "",  // Leave empty if not used
                slack_status: "nill",
                email: "john.doe@example.com",
                email_status: "pending",
                no_feilds: 10,  // Number of fields in the form
            }
        })
        return "submiited succesfully "
    } catch (error) {
        console.log(error, "loggig in function")
        return "fucked up something "
    }
}

export const Sending_slack_wh = async (formdata: object, slack_wh: string) => {
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/slack" : ""


    try {
        const fetching = await  fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, slack_wh })
        })
        if(fetching.ok){
            console.log("slack sent succesfull ")
        } else{
            console.log("something went wrong  slack " , fetching)
        }
    } catch (error) {
        console.log(error)
    }
}
export const Sending_discord_wh = async (formdata:object , discord_wh:string,)=>{
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/discord" : ""
    try {
        const fetching = await  fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, discord_wh })
        })
        if(fetching.ok){
            console.log("discord sent succesfull ")
        } else{
            console.log("something went wrong discord " , fetching)
        }
    } catch (error) {
        console.log(error)
    }
}
export const Sending_email = async(formdata:object , email :string , endpoint :string)=>{
    const url = process.env.TYPE == "Test" ? "http://localhost:5000/email" : ""
    try {
        const fetching = await  fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formdata, email ,endpoint })
        })
        if(fetching.ok){
            console.log("email sent succesfull ")
        } else{
            console.log("something went wrong email  " , fetching)
        }
    } catch (error) {
        console.log(error)
    }
}