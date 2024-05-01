'use client'

import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ProjectInfo(props: any){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.60 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return(
        <div className="my-[30px] text-center lg:w-[42%] md:my-[60px] lg:my-[69.25px] lg:mr-[18px] lg:text-left">
            <motion.div 
            ref = {ref}
            style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            }}>
            <p className="text-[#E3E4E6] text-base font-semibold mb-4">
                {props.projectData.name}
            </p>
            <p className="text-[#E3E4E6] mb-4 text-sm leading-6 font-light 
                md:text-lg md:leading-8 md:mb-6 md:tracking-tight">
                {props.projectData.details}
            </p>
            <p className="text-[#E3E4E6] text-lg font-light mb-5 md:mb-[60px]">
                Website Design
            </p>

            <div className="flex justify-center lg:justify-normal">
                <a href={props.projectData.url} target="_blank">
                <motion.button 
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px #E3E4E6",
                        boxShadow: "0px 0px 8px #A855F7",
                    }}
                    className="flex text-[#E3E4E6] px-4 py-2 rounded-[24px] border-[1px] gap-2
                    text-base hover:bg-purple-500 hover:border-purple-500">
                    View Work <ChevronRight />
                </motion.button></a>
            </div>
            </motion.div>
        </div>
        
    )
}
