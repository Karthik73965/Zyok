import Link from 'next/link';
import React from 'react'
import { IoMdSend } from "react-icons/io";

type Props = {name :string,description?:String,FormsNo:Number,FormSubmit:Number  , WorkspaceId :String}

export default function CardsWorkspaces({name,description,FormsNo,FormSubmit , WorkspaceId}: Props) {
    return (
        <Link href={`/Workspace/${WorkspaceId}`}>
        <section className=' w-[350px] border-[0.5px] border-gray-400 rounded-xl p-6 pr-10 shadow-2xl'>
            <div className='flex justify-between align-middle'>
                <div className='flex'>
                    <button className="text-white  bg-green-800 rounded-full w-10 h-10 overflow-hidden">
                        {name[0]}
                    </button>
                    <div className='ml-3 w-[180px]'>
                        <div className='font-semibold text-slate-700'>
                            {name}
                        </div>
                        <p className='text-sm text-gray-500'>{description} </p>
                    </div>
                </div>
                <div className='-mt-3'>
                    <button className='bg-black p-1 flex w-20 text-white  px-2 py-1 text scale-75  rounded-2xl '>
                     forms  {FormsNo.toString() =="0" ?"1": FormsNo.toString() }
                    </button>
                </div>
            </div>
           <div className='flex pl-2 mt-3 pt-3'>
           <IoMdSend className='text-gray-600 m-[2px]' />
            <span className='text-sm'> {FormSubmit.toString()} Submitted</span>
           </div>
        </section>
        </Link>
    )
}