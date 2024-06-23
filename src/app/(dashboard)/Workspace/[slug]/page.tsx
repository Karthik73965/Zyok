"use client"
import DashNav from '@/components/(dashboard)/DashNav'
import { useRouter } from 'next/navigation';
import ButtonLink from '@/components/(dashboard)/workspace/Button.link';
import WorkspaceDash from '@/components/(dashboard)/workspace/WorkspaceDash';
import { GetWorkspace } from '@/_lib/actions/Workspace.actions';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Endpointbox from '@/components/(dashboard)/Endpoints/Endpoint.box';
type Props = {}

export default function Page({ params }: { params: { slug: string } }) {
  const [WorkspaceInfo, SetWorkspaceInfo] = useState<Object | any>({})
  const [links , setlinks] = useState<any[]>([])
  const WorkspaceId = params.slug
  const { user, isLoaded } = useUser()
  const userId = user?.id
  useEffect(() => {
    const Fetching = async () => {
      const FetchedWorkspace = await GetWorkspace(userId, WorkspaceId)
      const id = userId
      if(FetchedWorkspace?.workspace[0].userId == id){
        SetWorkspaceInfo(FetchedWorkspace?.workspace[0])
      }
    }
    Fetching()
  }, [isLoaded ,userId , WorkspaceId])
  useEffect(()=>{
    fetch('/api/GetLinks' ,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        WorkspaceId:params.slug
      })
    }).then((res)=>res.json()).then((data)=>setlinks(data))
    
  },[params.slug])

  return (
    <>
      <div className='mb-20'>
        <DashNav />
        <WorkspaceDash />
      </div>
      <main className='bg-white pt-10'>
        <section className='h-16 a flex justify-between align-middle mx-[10vw] my-10'>
          <div className='text-3xl '> {
              WorkspaceInfo ? <div className='capitalize text-bal'>{WorkspaceInfo.name} - <span className='text-gray-500'>Links</span></div> : ""
            } </div>
          <ButtonLink Work_Id={WorkspaceId} />
        </section>
        <section className='flex px-[10vw]'>
          <section className='w-[500px]  bg-black h-[30vh]'>&nbsp;</section>
          <section className=' mx-5  grid  gap-y-5 '>
         {/* {
          links.map((i, index)=>{
            return <div key={index}>{i.Endpoint} {i.submissions.toString()} {i.email} {i.webhook ==null ? "no":i.webhook} {i.slack_wh ==null ? "no":i.slack_wh} {i.discord_wh ==null ? "no":i.discord_wh}  </div>
          })
         } */}
         {
          links.map((i, index)=>{
                return <Endpointbox key={index} Endpoint={i.Endpoint} email={i.email} slack_wh={i.slack_wh} discord_wh={i.discord_wh} webhook={i.webhook} Submissions={i.submissions } EndpointId={i.EndpointId} />
          })
         }
          </section>
          <section className='w-[500px]  bg-black h-[30vh]'>&nbsp;</section>
        </section>
      </main>
    </>
  )
}