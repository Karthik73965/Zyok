import { PrismaClient } from '@prisma/client';
import * as z from 'zod';

const prisma = new PrismaClient();

const userSchema = z.object({
  username: z.string().nonempty({ message: 'Username is required' }),
  email: z.string().email({ message: 'Invalid email format' }), // Assuming unique email constraint in Prisma
  img_link: z.string(), // Optional image link
  workspaces: z.number().nonnegative().int({ message: 'Workspaces must be a non-negative integer' }).optional(),
  LinksNo: z.number().nonnegative().int({ message: 'LinksNo must be a non-negative integer' }).optional(),
  premium: z.boolean().optional(),
  userId :z.string()
});
type userCreateProps = z.infer<typeof userSchema>;

export async function usercreated({
    email,
    username,
    userId,
    img_link
  }: userCreateProps) {
    try {  
        const newUser = await prisma.user.create({
          data: {
            username,
            email,
            img_link, 
            userId
          },
        });
        const WorkspacesInit = await prisma.workspaces.create ({
          data:{
            userId,
            name :"default workspace",
            description:"you can add description like this"
          }
        })
        return newUser
  
      } catch (error) {
        console.error(error);
        return 'error'
      }
    
}  