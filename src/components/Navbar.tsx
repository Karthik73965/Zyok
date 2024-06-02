"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/ui/moving-border';
import { RiArrowDropDownLine, } from 'react-icons/ri';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Console } from 'console';
type Props = {}

export default function Navbar({ }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoaded } = useUser()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed flex justify-between z-10   py-2 px-[10vw]  w-[100vw] ${isScrolled ? ' bg-black bg-opacity-65 border-b-[1px] border-gray-800 ' : 'bg-transparent '}`}>
      <h1 className='text-xl font-sans pt-1'>Zyok</h1>
      <ul className='flex gap-x-10 text-sm pt-2'>
        <li className='flex'>Feautures <RiArrowDropDownLine size={20} className='text-gray-700' /></li>
        <li>Docs</li>
        <li>Plans</li>
        <li>FAQs</li>
      </ul>
      {

        isLoaded && user?.id ? <div className='flex gap-x-5'>
          <Link href={'/Dashboard'}>
            <Button

              className=" dark:bg-slate-900  w-40 h-10 text-white  border-slate-800"
            >
              Dashboard
            </Button>
          </Link>
      
         
        </div>
          :
          <Link href={'/Dashboard'}>
            <Button

              className=" dark:bg-slate-900  w-40 h-10 text-white  border-slate-800"
            >
              Get Started
            </Button>
          </Link>
      }
    </nav>
  )
}