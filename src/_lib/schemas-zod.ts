import { z } from 'zod';

export const createUserSchema = z.object({
  Id: z.string().optional(), 
  username: z.string().min(1).trim(),
  email: z.string().email().trim(),
  img_link: z.string().optional(),
  workspaces: z.number().nonnegative().optional(),
  LinksNo: z.number().nonnegative().optional(),
  premium: z.boolean().optional(),
});
