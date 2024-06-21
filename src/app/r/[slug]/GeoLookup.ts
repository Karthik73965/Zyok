
export const geoip = async (ip:string ):Promise<object>=>{
    try {
        const url = process.env.TYPE == "Test" ? "http://localhost:5000/geo" : ""
        const details = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip })
        })
        const response = await details.json()
        return response
    } catch (error) {
        return {
            country: "unknown",
            city: "unknown",
            state:"unkown"
        }
        
    }
}