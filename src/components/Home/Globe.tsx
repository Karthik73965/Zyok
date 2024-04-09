import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Globe({}: Props) {
  return (
   <>
   <center className='  pt-32'>
    <h4 className='relative text-6xl z-50 text-white'>Analytics which can occur <br/> all over the world</h4>
        <Image className='-mt-32  opacity-70' src={'/globe.png'} width="1000" height="100" alt='something'/>
   </center>
   </>
  )
}