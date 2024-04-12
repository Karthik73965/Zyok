import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as z from 'zod';
import { NextResponse } from 'next/server';

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

export  async function POST(req: Request, res: NextApiResponse) {
 
    const userBody = await req.json();
    console.log(userBody)

    try {
      const parsedUser = userSchema.safeParse(userBody);

      if (!parsedUser.success) {
        console.log(  parsedUser.error.issues);
        console.log("body" , req.body)
        
        return new Response("chudu")
      }

      const { username, email, img_link, Id , workspaces, LinksNo, premium } = parsedUser.data;

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          img_link, 
          workspaces,
          LinksNo,
          premium,
          Id
        },
      });
      return NextResponse.json({
        message: newUser
      },{
        status:201
      })

    } catch (error) {
      console.error(error);
      return new Response (`madda gudavalli`, {
        status:400
      })
    }
}
