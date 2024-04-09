"use client"
import React from 'react'
import FrameworkIcon from '@/ui/FrameworkIcon'
import FrameWorksCode from '@/ui/FrameWorksCode'

type Props = {}

export default function FrameWorks({}: Props) {
  return (
    <div className='flex align-middle justify-center'>
    <div className='mt-28  '>
   <center>
   <h4 className='text-orange-300 font-semibold'>No Need to Install Any pakage</h4>
    <h2 className='text-5xl mt-5'>Integrate Today with no Hassle</h2>
    <p className='text-xl mt-3 font-normal text-gray-500 text-[20px]'>A Simple Endpoint that can track all your needs without any hesistation and other stuff</p>
   </center>
    <main>
      <section className='flex  justify-center align-middle gap-x-10 mt-10 w-[90vw] overflow-x-auto'>
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
        <FrameworkIcon Name={"React js"} Image={"React js "} />        
             
      </section>  
      <section className='flex align-middle justify-center'>
        <FrameWorksCode/>
      </section>
    </main>
    </div>
    </div>
  )
}