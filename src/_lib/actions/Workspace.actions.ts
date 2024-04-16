'use server'
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function CreateWorkSpace (name :String , description:String, userId :any){
    console.log(name ,description , userId)
    if(userId ==null ) return {error:"userId gto null"}

    try {
        const newWorkspace = await prisma.workspaces.create({
          data: {
            name, // Directly reference the variable name
            description, // Directly reference the variable name
            userId, // Directly reference the variable name
          },
        });
    
        console.log('Workspace created:', newWorkspace);
        return { workspace: newWorkspace }; // Return the created workspace details
      } catch (error) {
        console.error('Error fetching workspaces:', error);
        return { error: 'Failed to fetch workspaces' }; // Return an error message
      }

}