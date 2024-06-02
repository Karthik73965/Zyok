"use client"
import { getWorkspaces } from '@/_lib/actions/UserActions'
import DashNav from '@/components/(dashboard)/DashNav'
import ButtonWorkspace from '@/components/(dashboard)/MainDash/Button.workspace'
import CardsWorkspaces from '@/components/(dashboard)/MainDash/CardsWorkspaces'
import { useUser } from '@clerk/nextjs'
import { useState , useEffect } from 'react'
import { GetWorkspace } from '@/_lib/actions/Workspace.actions'
type Props = {}

export default function Page({ }: Props) {
  const { user, isLoaded } = useUser()
  const [workspaces, setWorkspaces] = useState<any>([])
  const [fetchend, setfetchend] = useState(false)
  const userId = user?.id 
  const WorkspaceId ="7581a288-ac56-4b85-8587-7c1fee1729e4"

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const fetchedWorkspaces = await getWorkspaces(user?.id);
        setWorkspaces(fetchedWorkspaces.workspaces);
        setfetchend(true)

      } catch (error) {
        console.error("Error fetching workspaces:", error);
        // Handle errors here (display to user, etc.)
      }
    };
    const getwp = async ()=>{
      try {
        const FetchedWorkspce= await GetWorkspace(userId , WorkspaceId  )
      } catch (error) {
        console.log(error)
      }
    }

    fetchWorkspaces()
    getwp()

  }, [isLoaded, user?.id ,userId])
  return (
    <>
      <div className='mb-20'>
      <DashNav />
      </div>
    <main className='bg-white'>
      <section className='h-16  flex justify-between align-middle mx-[10vw] my-10'>
        <div className='text-3xl text-gray-600'>Your Workspaces</div>
        <ButtonWorkspace />
      </section>
      <section className='mx-[10vw] mt-10  grid gap-y-6  grid-cols-3 justify-between'>
        {
          fetchend && workspaces?.map((i: any, index: any) => {
            return <CardsWorkspaces name={i.name} key={index} WorkspaceId={i.WorkspaceId} description={i?.description} FormsNo={i.FormsNo} FormSubmit={i.FormSubmit} />
          })
        }
      </section>
    </main>
    </>
  )
}
