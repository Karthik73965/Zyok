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
import { CreateWorkSpace } from "@/_lib/actions/Workspace.actions";

export default function ButtonWorkspace() {
  const { user } = useUser();
  const userId = user?.id;
  const router = useRouter(); // Get router instance

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!name || !description) {
      alert("Please enter both name and description");
      return;
    }

    try {
      // Replace with your actual server action function call
      const response = await CreateWorkSpace(name, description, userId);

      if (response.error) {
        console.error("Error creating workspace:", response.error);
        alert("Failed to create workspace");
        return;
      }

      router.push("/Dashboard"); // Redirect to dashboard after successful creation
    } catch (error) {
      console.error("Error creating workspace:", error);
      alert("An unexpected error occurred");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white bg-black rounded-xl h-10 flex py-1 px-2 pt-2">
          Create Workspace <FiEdit className="m-1" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>Fill out the details for your new workspace.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                id="name"
                className="col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Description
              </label>
              <textarea
                id="description"
                className="col-span-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit">Create Workspace</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
