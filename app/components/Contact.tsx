import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../form/ContactForm";
import React from "react";


function Contact(){
    return(
        <div id='Contact' className="font-work mx-auto max-w-2xl lg:max-w-7xl md:px-6">
            <h1 className="text-white text-center font-medium text-xl mx-5 leading-6 md:mx-0 md:text-3xl">
                Let&apos;s collaborate and craft something extraordinary!
            </h1>

            <p className="text-gray-300 mx-10 text-center mt-4 text-sm leading-6 sm:mx-16 md:text-xl md:mx-12 lg:mx-32 ">
                If you like what you see, (and how could you not?) why not shoot me 
                an email? I would love to talk more about your team dynamics and the 
                    products you create.
            </p>

            <div className="flex flex-col-reverse justify-between mt-[30px] mx-5 rounded-[15px] bg-white 
                md:mt-[60px] md:mx-0 lg:mt-[90px] lg:px-[90px] lg:py-[50px] lg:flex-row">
                <div className="mx-[70px] mb-5 md:mb-8 lg:mx-0">
                    <div className="flex gap-x-[13px] items-center py-2.5 rounded-[10px] 
                        cursor-default hover:shadow-[0px_8px_64px_#1C19191F] md:hover:shadow-[0px_12px_64px_#1C19191F] md:p-6">
                        <div className="bg-[#EDD8FF80] rounded-sm p-4">
                            <Mail className="text-purple-500 stroke-2 " />
                        </div>
                        <div className="flex flex-col space-y-1">
                        <span className="text-[#424E60] text-xs md:text-sm">
                            My Email
                        </span>
                        <span className="text-[#132238] font-medium tracking-tighter text-xs md:text-base">
                            Tusharbajaj.tb@gmail.com
                        </span>
                        </div>
                    </div>

                    <div className="flex gap-x-[13px] items-center py-2.5 rounded-[10px] 
                        cursor-default hover:shadow-[0px_8px_64px_#1C19191F] md:hover:shadow-[0px_12px_64px_#1C19191F] md:p-6">
                        <div className="bg-[#EDD8FF80] rounded-sm p-4">
                            <Phone className="text-purple-500 stroke-2 " />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-[#424E60] text-xs md:text-sm">
                                Phone Number
                            </span>
                            <span className="text-[#132238] font-medium tracking-tighter text-xs md:text-base">
                                +1 250-797-9044
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-x-[13px] items-center py-2.5 rounded-[10px] 
                        cursor-default hover:shadow-[0px_8px_64px_#1C19191F] md:hover:shadow-[0px_12px_64px_#1C19191F] md:p-6">
                        <div className="bg-[#EDD8FF80] rounded-sm p-4">
                            <MapPin className="text-purple-500 stroke-2 " />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-[#424E60] text-xs md:text-sm">
                                Address
                            </span>
                            <span className="text-[#132238] font-medium tracking-tighter text-xs md:text-base">
                                Canada
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full my-5 px-5 md:my-8 md:px-8 lg:my-0 lg:px-0 lg:w-[510px]">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(Contact);