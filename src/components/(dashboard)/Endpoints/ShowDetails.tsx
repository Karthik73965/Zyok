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



export default function ShowDetails({data}:{data:object}) {
    const { user } = useUser();
    const router = useRouter();
    const userId = user?.id;







    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-white text-sm bg-black rounded-xl flex py-1 px-2 pt-2">
                    Raw Submission <FiEdit className="m-1" />
                </button>
            </DialogTrigger>
            <DialogContent className="bg-white ">
                <DialogHeader>
                    <DialogTitle>Create endpoint</DialogTitle>
                    <DialogDescription>
                    <div className="overflow-x-scroll w-[400px]">
                    <pre> {JSON.stringify(data, null, 2)} </pre>
                    </div>

                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
