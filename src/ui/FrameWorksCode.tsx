 
import { HiOutlineClipboardList } from "react-icons/hi";

type Props = {}

export default function FrameWorksCode({ }: Props) {
    return (
        <>
            <main className= '  w-[70vw] shadow-lg shadow-gray-500 border border-gray-400 mt-10 rounded-xl '  >
                <section className='   flex  justify-between px-10 py-5 bg-gray-950 bg-opacity-80 rounded-t-xl b border-b-[1px] border-gray-800 '  >
                    <div>React js </div>
                    <HiOutlineClipboardList size={25} />

                </section>
                <section>
                    <div className=" p-4 text-white pl-10 font-mono text-sm rounded-lg overflow-auto">
                        <div className="flex flex-col space-y-2">
                            <span className="text-[#569cd6]"># Add these attributes to your settings.py file:</span>
                            <span>
                                <span className="text-[#dcdcaa]">EMAIL_BACKEND</span> ={" "}
                                <span className="text-[#ce9178]">django.core.mail.backends.smtp.EmailBackend   </span>
                            </span>
                            <span>
                                <span className="text-[#dcdcaa]">RESEND_SMTP_HOST</span> ={" "}
                                <span className="text-[#ce9178]">smtp.resend.com</span>
                            </span>
                            <span>
                                <span className="text-[#dcdcaa]">RESEND_SMTP_PORT</span> = <span className="text-[#b5cea8]">587</span>
                            </span>
                            <span>
                                <span className="text-[#dcdcaa]">RESEND_SMTP_USERNAME</span> ={" "}
                                <span className="text-[#ce9178]">   resen   </span>
                            </span>
                            <span>
                                <span className="text-[#dcdcaa]">RESEND_SMTP_PASSWORD</span> ={" "}
                                <span className="text-[#ce9178]">   re_123456789   </span>
                            </span>
                            <span />
                            <span className="text-[#569cd6]"># Use Django   s get_connection and EmailMessage:</span>
                            <span>
                                <span className="text-[#c586c0]">with</span>
                                get_connection({"\n          "}
                            </span>
                            <span>
                                <span className="text-[#9cdcfe]">host</span>
                                =settings.
                                <span className="text-[#dcdcaa]">RESEND_SMTP_HOST</span>,{"\n          "}
                            </span>
                            <span>
                                <span className="text-[#9cdcfe]">port</span>
                                =settings.
                                <span className="text-[#dcdcaa]">RESEND_SMTP_PORT</span>,{"\n          "}
                            </span>
                            <span>
                                <span className="text-[#9cdcfe]">username</span>
                                =settings.
                                <span className="text-[#dcdcaa]">RESEND_SMTP_USERNAME</span>,{"\n          "}
                            </span>

                            <span>
                                <span className="text-[#9cdcfe]">to</span>=<span className="text-[#ce9178]">   delivered@resend.dev   </span>,
                                {"\n          "}
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}