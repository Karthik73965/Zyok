import React from 'react'
import { MdContentCopy } from "react-icons/md";

type Props = {
    Endpoint: String,
    email: String,
    slack_wh: String,
    discord_wh: String,
    webhook: String,
    Submissions:Number
}

export default function Endpointbox({ Endpoint, email, slack_wh, discord_wh, webhook,Submissions }: Props) {
    return (
        <div className='w-[540px] border-[0.5px] px-4 border-gray-400  rounded-xl p-6 py-4 pr-10 shadow-2xl'>
            <div className='flex justify-between align-middle'>
                <div className='flex'>
                    <button className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 rounded-full w-10 h-10 overflow-hidden">
                        &nbsp;
                    </button>
                    <div className='ml-3 flex'>
                        <div className='font-semibold hover:underline  mt-2 text-slate-700'>
                            https://zyok.in/r/{`${Endpoint}`}
                        </div>
                        <MdContentCopy className='mt-3 ml-3' />


                    </div>
                </div>
                <div className='-mt-3'>
                    <center className='bg-black p-1 w-32  flex ml-2 text-white  px-3  py-1 text scale-75 -ml  rounded-2xl '>
                        Submitted {`${Submissions.toString()}`}
                    </center>
                </div>
            </div>
            <div className='flex pl-14 '>
                Automations list soon
            </div>
        </div>
    )
}