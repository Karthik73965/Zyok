"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Home/HeroSection'
import Demo from '@/components/Home/Demo'
import Companies from '@/components/Home/Companies'
 type Props = {}
export default function page({ }: Props) {
  return (
    <div className='body text-white'>
      <Navbar />

      <main className='   h-[200vh] pt-[100px]'>
        <HeroSection/>
        <Demo/>
        <Companies/>
      </main>
    </div>
  )
}