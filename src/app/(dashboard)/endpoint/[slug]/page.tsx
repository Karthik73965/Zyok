"use client";
import DashNav from '@/components/(dashboard)/DashNav';
import React, { useEffect, useMemo, useState } from 'react';
import { FetchingSubmissions, getEndpoint, getSubmissionCount } from './actions';
import ShowDetails from '@/components/(dashboard)/Endpoints/ShowDetails';

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
                    <div className="space-y-8  ">
                        {formData.map((data, index) =>
                            <main key={index} className='border-2 rounded-xl my-3 shadow-2xl p-2 overflow-hidden border-gray-400'>
                                <section className='flex flex-w  -mb-5 justify-between'>

                                    <div className='ml-[65vw]'>
                                        <ShowDetails
                                            data={data}
                                            discord={submissions[index].discord_status}
                                            email={submissions[index].email_status}
                                            slack={submissions[index].slack_status}
                                            country={submissions[index].location.country}
                                            city={submissions[index].location.city}
                                            state={submissions[index].location.state}
                                            Os={submissions[index].analytics.Os}
                                            Browser={submissions[index].analytics.Browser}
                                            DeviceType={submissions[index].analytics.DeviceType}
                                            submittedAt={submissions[index].submittedAt}
                                        />
                                    </div>
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
                            </main>
                        )}
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
