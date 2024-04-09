import React from 'react'
import { Button } from '@/ui/moving-border'
import { LuArrowRight } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";

type Props = {}


  // need to create a section as in getform.io
export default function HeroSection({}: Props) {
  return (
    <>
    <center><Button className='w-auto p-2'> <IoCodeSlash size={25} className='mr-2' />
          Over 1000+ devlopers love the project</Button></center>
        <center className=' text-7xl mt-10  font-semibold'>
        Form Endpoints that <br/> talk to your apps
          <p className='text-[20px] mt-8 font-normal text-gray-500'>
            Zyok streamlines form creation, automates workflows, <br/>and integrates with your favorite tools!</p>
        
            <button className="w-48 mt-10 align-middle justify-center border-2 m-[2px]  border-gray-950 rounded-full  bg-slate-900/[0.8] flex  p-2 text-xl hover:scale-105 hover:shadow-2xl hover:gap-x-1 transition duration-200 ease-in"><span>Zyok is Free</span> <LuArrowRight className='m-1' />
            </button>
          
        </center>
    </>

  )
}