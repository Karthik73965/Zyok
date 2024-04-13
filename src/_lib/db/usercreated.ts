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
  Id :z.string()
});
type userCreateProps = z.infer<typeof userSchema>;

export async function usercreated({
    email,
    username,
    Id,
    img_link
  }: userCreateProps) {
    try {  
        const newUser = await prisma.user.create({
          data: {
            username,
            email,
            img_link, 
            Id
          },
        });
        return newUser
  
      } catch (error) {
        console.error(error);
        return 'nmadda gudavalli'
      }
    
}  