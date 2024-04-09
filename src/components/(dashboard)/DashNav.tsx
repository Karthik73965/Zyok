import React from 'react'
import Dropdown from './Dropdown'
import { Stats } from 'fs'
type Props = {}

const workspaces = [
  {
    Name: "default as",
    Submissions: 2,
    Subscribed: true
  },
  {
    Name: "default",
    Submissions: 2,
    Subscribed: true
  },
  {
    Name: "default",
    Submissions: 2,
    Subscribed: false
  },
  {
    Name: "default",
    Submissions: 2,
    Subscribed: false
  },
  {
    Name: "default",
    Submissions: 2,
    Subscribed: false
  },
  {
    Name: "default",
    Submissions: 2,
    Subscribed: false
  },

]
export default function DashNav({ }: Props) {
  return (
    <header className='px-[10vw]  border-b-[1px] py-4 border-gray-200'>
      <nav className=' flex justify-between   align-middle'>
        <div>
          <span className='text-xl flex  gap-x-2 '>
            <span>Z</span> &nbsp;<span className='text-gray'>/</span>
            <span className="flex gap-x-3 cursor-pointer  ">
              <button className="text-white  bg-orange-600 rounded-full w-7 h-7 overflow-hidden">
                F
              </button>
              Karthik
              {/* color code has to be added */}
              <div className='-5'>
                {false ? "" : <div className="rounded-xl px-2 py-1 -ml-3 scale-75 bg-black text-xs text-white">
                  Upgrade</div>}
              </div>
              <span className="grid mt-1  ">
              </span>
            </span>
          </span>
        </div>
        <div className='flex   gap-x-4 '>
          <span className='mt-1 text-gray-700'>Report</span>
          <span className='mt-1 text-gray-700 mr-5'>Help</span>
          <Dropdown Workspaces={workspaces} />
        </div>
      </nav>
    </header>
  )
}