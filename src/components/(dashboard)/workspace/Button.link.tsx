"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@clerk/nextjs";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation"; // For redirection
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { RandomEndpoint } from "@/_lib/functions/RandomEndpoint";



export default function Buttonendpoint(Work_Id: any) {
  const { user } = useUser();
  const router = useRouter();
  const userId = user?.id;
  const [Endpoint, SetEndpoint] = useState<string>()
  const WorkspaceId = Work_Id.Work_Id
  const email = user?.emailAddresses[0].emailAddress || ""
  const [discord_wh , setdiscord_wh] = useState<string | null>(null)
  const [slack_wh , setslack_wh] = useState<string | null>(null)
  const [webhook , setwebhook] = useState<string | null>(null)
  const [name, setName] = useState("");




  const GenerateEndpoint = async () => {
    const endpoint = await RandomEndpoint()
    console.log(endpoint)
    SetEndpoint(endpoint)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch ('/api/CreateEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          Endpoint,
          WorkspaceId,
          email,
          discord_wh,
          slack_wh,
          webhook
        })
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const createdEndpoint = await response.json();
      } catch (error) {
      console.error("Error creating workspace:", error);
      alert("An unexpected error occurred");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white bg-black rounded-xl h-10 flex py-1 px-2 pt-2">
          Create endpoint <FiEdit className="m-1" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white ">
        <DialogHeader>
          <DialogTitle>Create endpoint</DialogTitle>
          <DialogDescription>Fill out the details for your new endpoint .</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                https://zyok.vercel.app/r/
              </label>

              <div className="flex w-96 gap-x-5">
                <input
                  id="name"
                  className="col-span-3 ml-[70px] placeholder-gray-800 underline  "
                  value={Endpoint}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Refresh_it"
                  disabled
                  required
                />
                <span><TfiReload onClick={GenerateEndpoint} size={20} /></span>
              </div>

            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                email :
              </label>
              <input
                id="description"
                className="col-span-3 cursor-not-allowed"
                value={email || ""}
                disabled
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Discord webhook_url  :
              </label>
              <input
                id="description"
                className="col-span-3 "
                onChange={(e)=>setdiscord_wh(e.target.value)}
                
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Slack webhook_url :
              </label>
              <input
                id="description"
                className="col-span-3 "
                onChange={(e)=>setslack_wh(e.target.value)}
                
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                custom webhook_url :
              </label>
              <input
                id="description"
                className="col-span-3 "
                onChange={(e)=>setwebhook(e.target.value)}
                    
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit">Create endpoint</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
