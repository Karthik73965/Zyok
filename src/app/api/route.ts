import { NextRequest, NextResponse } from 'next/server';
import parser from 'ua-parser-js'
import { updating_endpoint } from '../r/[slug]/Analytics';


export async function GET(req: NextRequest) {
    const ip = (req.headers.get('x-forwarded-for'))
    const userAgent = req.headers.get('User-Agent') || ""
    // const browser = getBrowserfromAgent(userAgent)
    const uaResult = parser(userAgent);
    const os = uaResult.os.name
    const browser = uaResult?.browser?.name || 'Unknown';
    const deviceType = uaResult?.device?.type || 'Unknown'
    // await updating_endpoint("SGZvRAe" , analytics)
    return NextResponse.json({ message: 'GET request successful!', ip, os, browser, deviceType, })
}