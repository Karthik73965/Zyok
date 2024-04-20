import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server';

const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =  Redis.fromEnv()

export async function POST(req: Request) {
    const { endpoint } = await req.json();
    try {
        const exists = await redis.exists(endpoint);
        if (exists) {
            return NextResponse.json({ message: 'Endpoint exists' });
        }
        await redis.set(endpoint, JSON.stringify(endpoint));
        return NextResponse.json({ message: 'endpoint set successfully!', endpoint });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error setting random value' });
    }

}