"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FiEdit } from "react-icons/fi";
import { MdDangerous, MdDone } from 'react-icons/md';


interface props {
    data: object,
    discord: string,
    email: string,
    slack: string,
    country: string,
    city: string,
    state: string,
    Os: string,
    Browser: string,
    DeviceType: string,
    submittedAt: Date
}


export default function ShowDetails({ data, discord, email, slack, country, city, state, Os, Browser, DeviceType, submittedAt }: props) {

    const submittedAtString = submittedAt.toString(); // Replace with your actual IST date string

    function convert(dateString: string) {
        // Parse the input date string to a Date object
        const date = new Date(dateString);

        // Get the UTC time components
        const utcHours = date.getUTCHours();
        const utcMinutes = date.getUTCMinutes();

        // Calculate the IST time components
        const istHours = utcHours;
        const istMinutes = utcMinutes;

        // Handle overflow in minutes
        const finalMinutes = istMinutes % 60;
        let finalHours = istHours + Math.floor(istMinutes / 60);

        // Handle overflow in hours
        finalHours = finalHours % 24;

        // Set the IST time components to the date object
        date.setUTCHours(finalHours);
        date.setUTCMinutes(finalMinutes);

        // Return the date object with the updated time
        return date;
    }
    const date = convert(submittedAtString)
    console.log(date, "---------------------------------------")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-white text-sm w-auto bg-black rounded-xl flex py-1 px-2 pt-2">
                    Raw Submission <FiEdit className="m-1" />
                </button>
            </DialogTrigger>
            <DialogContent className="bg-white ">
                <DialogHeader>
                    <DialogTitle className="text-2xl underline">Submission details </DialogTitle><br />
                    <DialogDescription className="overflow-x-hidden">
                        <h6 className="text-xl font-semibold">Raw submission :</h6>
                        <div className=" ">
                            <pre className="mt-3"> {JSON.stringify(data, null, 2)} </pre>
                        </div>
                        <h6 className="text-xl font-semibold mt-5">Automation status :</h6>
                        <div className='flex  mt-4'>
                            <div className='flex mr-[2vw]'>
                                discord status :{
                                    discord !== "true" ? <MdDangerous className='text-red-500  text-xl' /> : <MdDone className='text-green-400 text-xl' />
                                }
                            </div>
                            <div className='flex  mr-[2vw] ' >
                                email :{
                                    email !== "true" ? <MdDangerous className='text-red-500  text-xl ' /> : <MdDone className='text-green-400   text-xl' />


                                }
                            </div>
                            <div className='flex mr-[2vw] '>
                                slack status :{
                                    slack !== "true" ? <MdDangerous className='text-red-500 text-xl' /> : <MdDone className='text-green-400  text-xl ' />
                                }
                            </div>
                        </div>
                        <section>
                            <br /> <h5 className="text-xl font-semibold">Location details :</h5>
                            <div className="text-lg mt-2"><span className="font-semibold ">Country </span> : {country}</div>
                            <div className="text-lg "><span className="font-semibold w-24 ">city </span>  : {city}</div>
                            <div className="text-lg "><span className="font-semibold w-24 ">state </span>  : {state}</div>
                        </section>
                        <section>
                            <br /> <h5 className="text-xl font-semibold">Analytics details :</h5>
                            <div className="text-lg mt-2"><span className="font-semibold ">OS </span> : {Os}</div>
                            <div className="text-lg"><span className="font-semibold ">Browser </span> : {Browser}</div>
                            <div className="text-lg"><span className="font-semibold ">Device  </span> : {DeviceType}</div>
                        </section>
                        <div className="mt-5"><span className="text-xl font-semibold">Submitted at :</span> <br /> {date.toString()}</div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
