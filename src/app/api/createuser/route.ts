import { usercreated } from "@/_lib/db/usercreated";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request,    ) {
  const WEBHOOK_SECRET = "whsec_9aDCj7T8vDFv+plellTwYzLLDk9EJnyW";
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json("Error occured", {
      status: 400,
    });
  }
  const { id } = evt.data;
  const eventType = evt.type;
  if (eventType === "user.created") {
    try {
      const something = await usercreated({
        email: payload?.data?.email_addresses?.[0]?.email_address,
        username: payload?.data?.first_name || payload?.data?.username,
        img_link: payload?.data?.profile_image_url ,
        Id: payload?.data?.id,
      });
      if(something ){
        return NextResponse.json({messsage:"I think its doen "})
      }
    } catch (error: any) {
      throw NextResponse.json("worst case")
    }
  }
}