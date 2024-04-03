import Input from 'postcss/lib/input'
import React from 'react'
import './Demo.css'
type Props = {}

export default function Demo({}: Props) {
  return (
    <center className='mt-5 '>
       <main className='flex  border-2 border-slate-700 shadow-lg shadow-gray-500 rounded-xl max-w-[900px] faurlex-1  justify-'>
       <form className=' rounded-xl border-r-2 border-slate-700 w-[400px] p-5 py-10'>
        <input placeholder="Enter Name " className="input font-thin  my-3" name="text" type="text"/> <br/>
        <input placeholder="Enter email " className="input font-thin" name="text" type="text"/>
       {/* <button className='bg-white w-[300px] text-black p-1 rounded-xl font-semibold my-3' type="button">
        Upload Image
       </button> */}
       <input type='file' className='my-6 scale-100 text-sm'/>
       <button className='bg-white w-[300px] text-black p-1 rounded-xl font-semibold my-3' type="button">
        Submit 
       </button>

    
        </form>
        <section className='bg-transparent 400 w-[600px]'> 
        </section>
       </main>
    </center>
  )
}