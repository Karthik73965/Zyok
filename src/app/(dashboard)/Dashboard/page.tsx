import React from 'react'
import DashNav from '@/components/(dashboard)/DashNav'
import ButtonWorkspace from '@/components/(dashboard)/MainDash/Button.workspace'
import CardsWorkspaces from '@/components/(dashboard)/MainDash/CardsWorkspaces'
type Props = {}

export default function page({ }: Props) {
  return (
    <main className=''>
      <DashNav />
      <section className='h-16 a flex justify-between align-middle mx-[10vw] my-10'>
        <div className='text-3xl text-gray-600'>Your Workspaces</div>
        <ButtonWorkspace />
      </section>
      <section className='mx-[10vw] flex justify-between'>
        <CardsWorkspaces />
        <CardsWorkspaces />
        <CardsWorkspaces />
      </section>
      <section className='mx-[10vw] mt-11 flex justify-between'>
        <CardsWorkspaces />
        <CardsWorkspaces />
        <CardsWorkspaces />
      </section>
    </main>
  )
}