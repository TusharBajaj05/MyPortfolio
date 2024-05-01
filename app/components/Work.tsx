'use client'

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
    },
    animate: (i: number) => ({
        opacity: [0, 0.25, 0.5, 0.75, 1],
        transition: {
            delay: i * 0.2,
        },
    }),
};

export default function Work(){
    return(
        <div className="mx-[30px] md:mx-10 lg:mx-0">
            <h1
                id='Work' className="text-white text-center font-medium text-xl leading-6 md:text-3xl">
                My Work Experience
            </h1>

            <div className="flex justify-between gap-x-[57px] mt-[30px] md:mt-[90px] md:gap-x-[90px] lg:px-[71px] lg:gap-x-[190px]">
                
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                    viewport={{once: true}}
                    className="hidden lg:block lg:w-[30%]">
                    <h3 className="text-purple-500 text-[25px] leading-[25px] font-normal">
                        Freelancing
                    </h3>
                    <p className="text-[#E3E4E6] text-base leading-4 font-normal mt-[14px] tracking-tight">
                        Dec 2023 - Feb 2024
                    </p>
                
                    <div className="lg:mt-[198px] lg:mb-[113px]">
                        <h3 className="text-purple-500 text-[25px] leading-[25px] font-normal">
                            Infosys, Calgary
                        </h3>
                        <p className="text-[#E3E4E6] text-base leading-4 font-normal mt-[14px] tracking-tight">
                            June 2022 - Aug 2023
                        </p>
                    </div>
                </motion.div>

                <div className="text-center pb-16">
                    <div className="h-8 w-8 rounded-full bg-purple-500 border-2"></div>
                    <div className="border-gray-300 border-dashed border-2 h-full inline-block -mb-[6px]"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-500 border-2"></div>
                </div>

                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={5}
                    viewport={{once: true}}
                    className="lg:w-[55%]">
                    <h3 className="text-purple-500 text-lg leading-[18px] lg:hidden">
                        Freelancing
                    </h3>
                    <p className="text-[#E3E4E6] text-xs leading-3 mt-[10px] mb-5 tracking-tight lg:hidden">
                        Dec 2023 - Feb 2024
                    </p>

                    <h3 className="text-purple-500 text-lg leading-[18px] md:text-[25px] md:leading-[25px]">
                        Front-End Developer
                    </h3>
                    <ul className="mt-[14px] pl-4 list-disc text-[#E3E4E6] text-sm md:leading-6">
                        <li className="mb-1 md:mb-2">Worked on Property listing Platform for owners where tenant can search for rental properties</li>
                        <li>Technologies used  - Next.js, React Hooks, TypeScript and Tailwind CSS</li>
                    </ul>

                    <h3 className="text-purple-500 text-lg leading-[18px] mt-20 lg:hidden">
                        Infosys, Calgary
                    </h3>
                    <p className="text-[#E3E4E6] text-xs leading-3 mt-[10px] mb-5 tracking-tight lg:hidden">
                        June 2022 - Aug 2023
                    </p>
                
                    <h3 className="text-purple-500 text-lg leading-[18px] md:text-[25px] md:leading-[25px] lg:mt-[80px]">
                        Associate Engineer
                    </h3>
                    <ul className="mt-[14px] pl-4 list-disc text-[#E3E4E6] text-sm md:leading-6">
                        <li className="mb-1 md:mb-2">2 months Training workshops</li>
                        <li>Worked on the assessment creation platform using React, TypeScript, JavaScript and CSS</li>
                        <li className="my-1 md:mb-2">Worked on a sprint based development cycle and delivered tasks, meeting all the deadlines</li>
                        <li>TCollaborated with UI/UX Designers to transform design concepts into functional websites</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}