import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: Request,    ) {
    const ip = (req.headers.get('x-forwarded-for'))
    return NextResponse.json({ message: 'GET request successful!' , ip  })
}