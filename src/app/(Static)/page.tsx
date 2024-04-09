"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Home/HeroSection'
import Demo from '@/components/Home/Demo'
import Companies from '@/components/Home/Companies'
import FrameWorks from '@/components/Home/FrameWorks'
import Feautures from '@/components/Home/Feautures'
import Analytics from '@/components/Home/Analytics'
import Image from 'next/image'
import Globe from '@/components/Home/Globe'
import Cta from '@/components/Cta'
import Fottter from '@/components/Fottter'
 type Props = {}
export default function page({ }: Props) {
  return (
    <>
    <div className='body text-white'>
      <Navbar />
      <main className='    pt-[100px]'>
        <HeroSection/>
      </main>
        <Demo/>
        <Companies/>
        <FrameWorks/>
        <Analytics/>
        <Feautures />
    </div>
        <Globe/>
        <Cta/>
        <Fottter/>  
        </>
  )
}