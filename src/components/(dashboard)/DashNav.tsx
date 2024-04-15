"use client"
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { getUserDetails, getWorkspaces } from '@/_lib/actions/UserActions'
import { UserButton, useUser } from '@clerk/nextjs'
type Props = {}

const workspace = [
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
  const [membership, setMembership] = useState(false)
  const [Loading, setLoading] = useState(true)
  const [workspaces, setWorkspaces] = useState<any>([])

  const { user, isLoaded } = useUser()
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(user?.id);
        setMembership(userDetails[0].premium); // Assuming membership is a state
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Handle errors here (display to user, etc.)
      }
    };

    const fetchWorkspaces = async () => {
      try {
        const fetchedWorkspaces = await getWorkspaces(user?.id);
        console.log( fetchedWorkspaces);
        
        setWorkspaces(fetchedWorkspaces.workspaces);

      } catch (error) {
        console.error("Error fetching workspaces:", error);
        // Handle errors here (display to user, etc.)
      }
    };

    if (isLoaded) {
      fetchUserDetails();
      fetchWorkspaces();
    }
  }, [isLoaded]);

  return (
    <header className='px-[10vw]  border-b-[1px] py-4 border-gray-200'>
      <nav className=' flex justify-between   align-middle'>
        <div>
          <span className='text-xl flex  gap-x-2 '>
            <span>Z</span> &nbsp;<span className='text-gray'>/</span>
            <span className="flex gap-x-3 cursor-pointer  ">
              <UserButton afterSignOutUrl='/' />
              {user?.username || user?.firstName}
              {/* color code has to be added */}
              <div className='-5'>
                {false ? "" : <div className="rounded-xl px-2 py-1 -ml-3 scale-75 bg-black text-xs text-white">
                  {membership ? "" : "Upgrade"}</div>}
              </div>
              <span className="grid mt-1  ">
              </span>
            </span>
          </span>
        </div>
        <div className='flex   gap-x-4 '>
          <span className='mt-1 text-gray-700'>Report</span>
          <span className='mt-1 text-gray-700 mr-5'>Help</span>
          {
           workspaces.length >0 ? <Dropdown Workspaces={workspaces} /> : ""
          }
        </div>
      </nav>
    </header>
  )
}