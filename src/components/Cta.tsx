import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

type Props = {}

export default function Cta({ }: Props) {
    return (
        <center className='bg text-white py-16 '>
            <h3 className='text-5xl'>Form Endpoint for your <br/> all needs </h3>
            <div className=' flex justify-center align-middle gap-x-4'>
            <button className="w-48 mt-10 align-middle justify-center border-2 m-[2px]  border-gray-950 rounded-full  bg-slate-900/[0.8] flex  p-2 text-xl hover:scale-105 hover:shadow-2xl hover:gap-x-1 transition duration-200 ease-in"><span>Get Started</span> <LuArrowRight   className='m-1' />
            </button>
            <button className="w-48 mt-10 align-middle justify-center border-2 m-[2px]  border-gray-950 rounded-full  bg-slate-900/[0.8] flex  p-2 text-xl hover:scale-105 hover:shadow-2xl hover:gap-x-1 transition duration-200 ease-in"><span>Contact Us </span> <LuArrowRight   className='m-1' />
            </button>
            </div>
        </center>
    )
}