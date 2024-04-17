import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: Request,    ) {
    const { id, userId}  = await req.json; // Extract parameters from query string

    return NextResponse.json({ message: 'GET request successful!' })
}