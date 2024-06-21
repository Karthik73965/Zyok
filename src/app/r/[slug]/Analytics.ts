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
            Os,
            Browser,
            DeviceType
        }
    } catch (error) {
        console.log("some error happned")
        return {
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
      console.log(info.analytics , " anayltics"); 
  
      const Os = analytics.Os;
      const Browser = analytics.Browser;
      const DeviceType = analytics.DeviceType;
  
      // Update OS count
      if (!(Os in PreAnalytics.Os)) {
        PreAnalytics.Os[Os] = 1;
      } else {
        if (typeof PreAnalytics.Os[Os] === 'number') {
          PreAnalytics.Os[Os] += 1;
        } else {
          PreAnalytics.Os[Os] = 1;
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
            const update = await prisma.endpoint.update({
              where: { Id },
              data: {
                analytics: PreAnalytics,
              },
            }); 
            return update
      
    } catch (error) {
      // Handle general errors
      return error
    }
  };
interface analytics_type {
    Os: string,
    Browser: string,
    DeviceType: string
}

export const update_location = async (Endpoint: string, location: any) => {
  try {
    const info = await FindEndpoint(Endpoint);
    const prelocations = info.location

    // locatin checking and updating locations constant and then updating in the database
    const country = location?.country ||"";
    const city = location.city;
    const state = location.state;

    // Location checking and updating prelocation counts
    if (!(country in prelocations.country)) {
      prelocations.country[country] = 1;
    } else {
      if (typeof prelocations.country[country] === 'number') {
        prelocations.country[country] += 1;
      } else {
        prelocations.country[country] = 1;
      }
    }

    if (!(city in prelocations.city)) {
      prelocations.city[city] = 1;
    } else {
      if (typeof prelocations.city[city] === 'number') {
        prelocations.city[city] += 1;
      } else {
        prelocations.city[city] = 1;
      }
    }

    if (!(state in prelocations.state)) {
      prelocations.state[state] = 1;
    } else {
      if (typeof prelocations.state[state] === 'number') {
        prelocations.state[state] = 1;
      } else {
        prelocations.state[state] = 1;
      }
    }

    const Id = info.Id || "";
    const update = await prisma.endpoint.update({
      where: { Id },
      data: {
        location: prelocations,
      },
    });
    return update
  } catch (error) {
    return error
  }
}

