import Image from 'next/image'
import React from 'react'
import CompanyCard from '@/ui/CompanyCard'
type Props = {}

export default function Companies({}: Props) {
  return (
    <center className='mt-14'>
     <span  className='text-gray-500 text-xl'> Giving Endpoints  to modern teams and  companies</span>     
     <section>
   <div className='flex justify-center align-middle my-3 gap-x-5 '>
   <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
  </div>
   <div className='flex justify-center align-middle gap-x-5  '>
   <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
     <CompanyCard/>
  </div>
   
     </section>
    </center>
  )
}