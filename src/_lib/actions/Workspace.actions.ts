'use server'
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function CreateWorkSpace(name: String, description: String, userId: any) {
  if (userId == null) return { error: "userId gto null" }

  try {
    const newWorkspace = await prisma.workspaces.create({
      data: {
        name, // Directly reference the variable name
        description, // Directly reference the variable name
        userId, // Directly reference the variable name
      },
    });
    return { workspace: newWorkspace }; // Return the created workspace details
  } catch (error) {
    console.error('Error fetching workspaces:', error);
    return { error: 'Failed to fetch workspaces' }; // Return an error message
  }

}
export async function GetWorkspace( userId: any ,WorkspaceId :String) {
  try {
    const workspace = await prisma.workspaces.findMany({
      where: {
        WorkspaceId 
      },
    });
    if (!workspace) {
      return { error: 'Workspace not found' }; // Informative error message
    }
   

    return { workspace }; // Return the workspace details
  } catch (error) {
    console.log(error)
  }
}