"use client"
import React from 'react'
import Image from 'next/image'
type Props = {
    
}

export default function CompanyCard({}: Props) {
  return (
   <>
 <div className='flex justify-center align-middle'>
 <Image src='/company-img/metaimg.png' alt="Meta" width="40" height="0" className="grayscale hover:grayscale-0" />
     <span className='mt-6'>Metadatansol</span>
 </div>
   </>
  )
}