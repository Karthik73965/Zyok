import { prisma } from '@/_lib/prisma';
import parser from 'ua-parser-js'
import { FindEndpoint } from './actions';

export const Analytics = async (userAgent: string) => {

    try {
        const UaResult = parser(userAgent);
        const Os = UaResult.os.name || 'Unknown'
        const Browser = UaResult?.browser?.name || 'Unknown';
        const DeviceType = UaResult?.device?.type || 'Unknown  '

        return {
            UaResult,
            Os,
            Browser,
            DeviceType
        }
    } catch (error) {
        console.log("some error happned")
        return {
            UaResult: 'Unknown',
            Os: 'Unknown',
            Browser: 'Unknown',
            DeviceType: 'Unknown',
        }
        throw error
    }
}


// updating endpoint analytics 

export const updating_endpoint = async (Endpoint: string, analytics: analytics_type) => {
    try {
      const info = await FindEndpoint(Endpoint);
      const PreAnalytics = info.analytics;
      console.log(PreAnalytics , " anayltics");
  
      const Os = analytics.Os;
      const Browser = analytics.Browser;
      const DeviceType = analytics.DeviceType;
  
      // Update OS count
      if (!(Os in PreAnalytics.OS)) {
        PreAnalytics.OS[Os] = 1;
      } else {
        if (typeof PreAnalytics.OS[Os] === 'number') {
          PreAnalytics.OS[Os] += 1;
        } else {
          PreAnalytics.OS[Os] = 1;
        }
      }
  
      // Update Browser count (similar logic)
      if (!(Browser in PreAnalytics.Browser)) {
        PreAnalytics.Browser[Browser] = 1;
      } else {
        if (typeof PreAnalytics.Browser[Browser] === 'number') {
          PreAnalytics.Browser[Browser] += 1;
        } else {
          PreAnalytics.Browser[Browser] = 1;
        }
      }
  
      // Update DeviceType count (similar logic)
      if (!(DeviceType in PreAnalytics.DeviceType)) {
        PreAnalytics.DeviceType[DeviceType] = 1;
      } else {
        if (typeof PreAnalytics.DeviceType[DeviceType] === 'number') {
          PreAnalytics.DeviceType[DeviceType] += 1;
        } else {
          PreAnalytics.DeviceType[DeviceType] = 1;
        }
      }
  
      const Id = info.Id || "";
      try {
        const update = await prisma.endpoint.update({
          where: { Id },
          data: {
            analytics: PreAnalytics,
          },
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    } catch (error) {
      // Handle general errors
    }
  };
interface analytics_type {
    Os: string,
    Browser: string,
    DeviceType: string
}