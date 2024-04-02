import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Home/HeroSection'
type Props = {}
export default function page({ }: Props) {
  return (
    <div className='body text-white'>
      <Navbar />

      <main className='  h-[200vh] pt-[100px]'>
        <HeroSection/>
      </main>
    </div>
  )
}