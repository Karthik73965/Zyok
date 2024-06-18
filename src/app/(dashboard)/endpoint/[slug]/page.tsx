"use client";
import DashNav from '@/components/(dashboard)/DashNav';
import React, { useEffect, useMemo, useState } from 'react';
import { FetchingSubmissions } from './actions'; // Assuming this imports the action

type Props = {
    params: { slug: string }
}

export default function Page({ params }: Props) {
    const endpointId = params.slug;
    const [submissions, setSubmissions] = useState<any[]>([]);

    const flattenedSubmissions = useMemo(() => {
        return submissions.flat();
    }, [submissions]);

    const [formData, setFormData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedSubmissions = await FetchingSubmissions(endpointId);
                setSubmissions(fetchedSubmissions);
            } catch (error) {
                console.error("Error fetching submissions:", error);
            }
        };
        fetchData();
    }, [endpointId]);

    useEffect(() => {
        const newFormData = flattenedSubmissions.map(submission => submission.formdata);
        setFormData(newFormData);
    }, [flattenedSubmissions]);

    return (
        <>
            <div className="mb-20">
                <DashNav />
            </div>
            <h5 className="text-6xl">
                {endpointId}
            </h5>
            <div className="space-y-8">
                {formData.map((data, index) => (
                    <div key={index} className="submission p-6 bg-white rounded-lg shadow-md">
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(data).map(([key, value], idx) => (
                                <div key={idx} className="key-value-pair">
                                    <span className="block font-semibold text-gray-700">{key.trim()}:</span>
                                    <span className="block text-gray-900">{String(value)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
}
