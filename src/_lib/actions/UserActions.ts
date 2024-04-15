'use server'
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Server action function to fetch user details
export async function getUserDetails(userId:String | any) {
    console.log(userId)
  try {
    
    const user = await prisma.user.findMany({
        where: {
          OR: [{ userId}], // Specify user ID(s) to find
        },
      });
    console.log(user)

    // Handle cases where user is not found
    if (!user) {
      return { error: 'User not found' };
    }


    return user;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return { error: 'Internal server error' }; // Handle errors gracefully
  } finally {
    await prisma.$disconnect(); // Close Prisma connection to avoid leaks
  }
}

// Server action function to get all workspaces for a user
export async function getWorkspaces(userId: any) {
  if(userId ==null ) return {error:"userId gto null"}
  else{
  try {
    const workspaces = await prisma.workspaces.findMany({
      where: { userId }, // Filter by user ID
 // Include related user data (optional)
    });

    return { workspaces }; // Return an array of retrieved workspaces
  } catch (error) {
    console.error('Error fetching workspaces:', error);
    return { error: 'Failed to fetch workspaces' }; // Return an error message
  }}
  }