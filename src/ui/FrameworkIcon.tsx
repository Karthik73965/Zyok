import React from 'react'

type Props = {
    Image : String,
    Name :String
}

export default function FrameworkIcon({ Image , Name }: Props) {
    return (
        <div     className='grid'>
        <div className='border-2 border-neutral-600 w-24 p-3 pt-6 flex justify-center  align-middle h-20 rounded-3xl'>
            {Image}
        </div>
        <p className='mt-2'> {Name} </p>
        </div>
    )
}