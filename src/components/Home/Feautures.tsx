import AccorditionFeautures from '@/ui/AccorditionFeautures'
import React from 'react'

type Props = {}

export default function Feautures({}: Props) {
  return (
    <center className='mt-28'>
            <h3 className=' '><span className='text-5xl '>Powerful features for modern <br/> marketing teams & Developers</span></h3>
            <p className='mt-3 font-normal text-gray-500'>Dub.co is more than just a link shortener. Weve built a suite of powerful features that gives you marketing superpowers.</p>
           <center className='w-[1200px]  border shadow-lg shadow-gray-300 border-gray-400 mt-10  rounded-xl px-10  flex'>
          <section className='py-10 pr-8 border-r-2'> <AccorditionFeautures/></section>
           <center className='p-10'> here some videos will be there no problem for that 
         </center>
           </center>
    </center>
  )
}