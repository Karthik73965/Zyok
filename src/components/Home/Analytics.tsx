import React from 'react'

type Props = {}

export default function Analytics({}: Props) {
  return (
    <>
    <main className='flex justify-around bg-slate-950 bg-opacity-40 mt-24 border-y-2  border-gray-800 p-10 align-middle  '>
        <section className='pr-6 '>
            <center className='text-6xl mb-2'>30 {""} +</center>
            <div className='text-xl text-gray-500'>Active Users</div>
        </section>
        <section className=' pr-6 '>
            <center className='text-6xl mb-2'>30 {""} +</center>
            <div className='text-xl text-gray-500'>Active Users</div>
        </section>
        <section className='pr-6 '>
            <center className='text-6xl mb-2'>30 {""} +</center>
            <div className='text-xl text-gray-500'>Active Users</div>
        </section>
    </main>
    </>
  )
}