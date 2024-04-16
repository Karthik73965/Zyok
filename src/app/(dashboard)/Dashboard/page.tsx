'use client'
import { getWorkspaces } from '@/_lib/actions/UserActions'
import DashNav from '@/components/(dashboard)/DashNav'
import ButtonWorkspace from '@/components/(dashboard)/MainDash/Button.workspace'
import CardsWorkspaces from '@/components/(dashboard)/MainDash/CardsWorkspaces'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
type Props = {}

export default function page({ }: Props) {
  const {user,isLoaded} = useUser()
  const [workspaces, setWorkspaces] = useState<any>([])
  const[fetchend , setfetchend]= useState(false)
  console.log( workspaces)

  useEffect(()=>{
    const fetchWorkspaces = async () => {
      try {
        const fetchedWorkspaces = await getWorkspaces(user?.id);
        console.log( fetchedWorkspaces);
        
        setWorkspaces(fetchedWorkspaces.workspaces);
        setfetchend(true)

      } catch (error) {
        console.error("Error fetching workspaces:", error);
        // Handle errors here (display to user, etc.)
      }
    };
    fetchWorkspaces()
  },[isLoaded])
  return (
    <main className='bg-white'>
      <DashNav />
      <section className='h-16 a flex justify-between align-middle mx-[10vw] my-10'>
        <div className='text-3xl text-gray-600'>Your Workspaces</div>
        <ButtonWorkspace />
      </section>
      <section className='mx-[10vw] mt-10  grid gap-y-6  grid-cols-3 justify-between'>
       {
         fetchend && workspaces?.map((i:any)=>{
          console.log(i)

          return <CardsWorkspaces name= {i.name} description={i?.description} FormsNo={i.FormsNo} FormSubmit={i.FormSubmit} />
        })
       }
      </section>
    </main>
  )
}