"use client";
import DashNav from '@/components/(dashboard)/DashNav';
import React, { useEffect, useMemo, useState } from 'react';
import { FetchingSubmissions, getEndpoint, getSubmissionCount } from './actions';
import ShowDetails from '@/components/(dashboard)/Endpoints/ShowDetails';
import { MdDangerous, MdDone } from 'react-icons/md';

type Props = {
    params: { slug: string }
}

export default function Page({ params }: Props) {
    const endpointId = params.slug;
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [TotalSubmissions, SetTotalSubmissions] = useState<number>(0)
    const [Endpoint, SetEndpoint] = useState<string>("")
    const [formData, setFormData] = useState<any[]>([])

    const flattenedSubmissions = useMemo(() => {
        return submissions.flat();
    }, [submissions]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedSubmissions = await FetchingSubmissions(endpointId);
                const Submissions = await getSubmissionCount(endpointId)
                const info = await getEndpoint(endpointId)
                SetEndpoint(info)
                SetTotalSubmissions(Submissions)
                setSubmissions(fetchedSubmissions);
            } catch (error) {
                console.error("Error fetching submissions:", error);
            }
        };
        fetchData();
    }, [endpointId]);

    const handleShowMore = async () => {
        setIsLoadingMore(true);
        try {
            const fetchedSubmissions = await FetchingSubmissions(
                endpointId,
                currentPage + 1
            );
            setSubmissions((prevSubmissions) => [...prevSubmissions, ...fetchedSubmissions]);
            setCurrentPage(currentPage + 1);
        } catch (error) {
            console.error("Error fetching more submissions:", error);
        } finally {
            setIsLoadingMore(false);
        }
    };

    useEffect(() => {
        const newFormData = flattenedSubmissions.map(submission => submission.formdata);
        setFormData(newFormData);
    }, [flattenedSubmissions]);

    return (
        <>
            <div className="mb-20">
                <DashNav />
            </div>
            <main className='bg-white  mx-[10vw]'>
                <section className='h-16 a flex justify-between align-middle  my-10'>
                    <div className='text-3xl '> {
                        Endpoint ? <div className=' text-2xl text-gray-700'>https://zyok.vercel.app/r/<span className='text-3xl text-black'>{Endpoint}</span> - <span className='text-3xl text-black'>{TotalSubmissions} {""}Submissions</span></div> : ""
                    } </div>
                </section>
                <section className=''>
                    <div className="space-y-8">
                        {formData.map((data, index) => (
                            <>
                                <section className='flex flex-w  -mb-5 justify-between'>
                                    <div className='flex  ml'>
                                        <div className='flex mr-[2vw]'>
                                            discord status :{
                                                submissions[index].discord_status !== "true" ? <MdDangerous  className='text-red-500 m-1 text-xl' />:<MdDone className='text-green-400' />
                                            }
                                        </div>
                                        <div className='flex  mr-[2vw] ' >
                                            email :{
                                                submissions[index].email_status  !== "true" ? <MdDangerous  className='text-red-500 m-1 text-xl ' />:<MdDone className='text-green-400  m-1 text-xl' />

 
                                            }
                                        </div>
                                        <div className='flex mr-[2vw] '>
                                            slack status :{
                                                submissions[index].slack_status !== "true" ? <MdDangerous  className='text-red-500 m-1 text-xl' />:<MdDone className='text-green-400  m-1 text-xl ' />
                                            }
                                        </div>
                                    </div>
                                    <div className=''> <ShowDetails data={data} /></div>
                                </section>
                                <div key={index} className="submission   rounded-lg">
                                    <div className="flex  -mt-9 w-[80vw] overflow-x-scroll  ">
                                        {Object.entries(data).map(([key, value], idx) => (
                                            <div key={idx} className="key-value-pair  ">
                                                <div className=" capitalize text-gray-900 px-3  text-lg w-[200px] truncate text-md font-bold"><span className=''>{key.trim()}</span></div>
                                                <span className="block text-gray-900 border-2 border-gray-400 p-2   truncate  h-[50px] text-ellipsis overflow-hidden  ">{String(value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </section>
                <center>
                    {TotalSubmissions > submissions.length && (
                        <button
                            className="bg-black text-center my-10 text-white  py-2 px-4 rounded-xl"
                            disabled={isLoadingMore}
                            onClick={handleShowMore}
                        >
                            {isLoadingMore ? 'Loading...' : 'Show More'}
                        </button>
                    )}
                </center>
            </main>
        </>
    );
}
