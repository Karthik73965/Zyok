import React from 'react'
import { IoMdSend } from "react-icons/io";

type Props = {}

export default function CardsWorkspaces({ }: Props) {
    return (
        <section className=' w-[350px] border-[0.5px] border-gray-400 rounded-xl p-6 pr-10 shadow-2xl'>
            <div className='flex justify-between align-middle'>
                <div className='flex'>
                    <button className="text-white  bg-green-800 rounded-full w-10 h-10 overflow-hidden">
                        F
                    </button>
                    <div className='ml-3 w-[180px]'>
                        <div className='font-semibold text-slate-700'>
                            Default workspace
                        </div>
                        <p className='text-sm text-gray-500'>Yuo can add description </p>
                    </div>
                </div>
                <div className='-mt-3'>
                    <button className='bg-black p-1 text-white  px-2 py-1 text scale-75  rounded-2xl '>
                        upgrade
                    </button>
                </div>
            </div>
           <div className='flex pl-2 mt-3 pt-3'>
           <IoMdSend className='text-gray-600 m-[2px]' />
            <span className='text-sm'> 30 Submitted</span>
           </div>
        </section>
    )
}