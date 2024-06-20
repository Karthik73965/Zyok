'use server'

import { prisma } from "@/_lib/prisma"
import { object } from "zod";

export const FetchingSubmissions = async (
  EndpointId: string,
  page: number = 1,
  limit: number = 3
) => {
  try {
    const submissions = await prisma.submissions.findMany({
      where: { EndpointId },
      orderBy: { submittedAt: 'desc' },// Order by 'createdAt' in descending order
      skip: (page - 1) * limit,
      take: limit,
    });
    return submissions;
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return []; // Return an empty array on error (optional)
  }
};

export const getSubmissionCount = async (EndpointId: string): Promise<number> => {
  try {
    const count = await prisma.submissions.count({ where: { EndpointId } });
    return count;
  } catch (error) {
    console.error("Error fetching submission count:", error);
    return 0; // Return 0 or a default value on error
  }
};

export const getEndpoint = async (EndpointId: string):Promise<string> => {
  console.log(EndpointId, "----------------------------------------------------------")
  try {
    const Endpoint = await prisma.endpoint.findMany({
      where: { EndpointId }
    })

    return Endpoint[0].Endpoint
  } catch (error) {
    console.log(error)
    return ""

  }

}