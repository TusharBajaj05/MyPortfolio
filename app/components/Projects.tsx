'use client'

import { projectData } from "../projects/projectData";
import ProjectImage from "../projects/projectImages/ProjectImage";
import ProjectInfo from "../projects/projectInfo/ProjectInfo";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Projects(){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    return(
        // <motion.div
        //         ref = {ref}
        //         style={{
        //             scale: scrollYProgress,
        //             opacity: scrollYProgress,
        //         }}>
        <div id='Projects' className="my-[60px] pt-5 bg-[#0F0E0E] font-work md:my-[120px] md:pt-[60px] lg:my-[150px]">
            <h1 className="text-white text-center text-xl leading-6 font-medium md:text-3xl">
                Curious What I&apos;ve Done?
            </h1>

            <div
                className="px-5 mx-auto max-w-2xl overflow-hidden md:px-6 
                    lg:flex lg:pb-[60px] lg:flex-col lg:max-w-7xl">
                {projectData.map((data, idx) => (
                    <div key={idx} 
                        className="flex flex-col-reverse justify-between my-[30px] md:my-[60px]
                            lg:flex-row lg:odd:flex-row-reverse lg:justify-between lg:my-[90px] lg:last:mb-0">
                        <ProjectInfo projectData={{name: data.name , details: data.details, url: data.url}} />
                        <ProjectImage image={data.images} />
                    </div>
                ))}
            </div>
        </div>
    )
}



{/* {projectData.map(data => (
                    <div key={data.id} className="flex flex-col justify-between my-[30px] md:flex-row md:my-[90px]">
                    ({toggle}?
                    (
                    <ProjectImage image={data.images} />
                    <ProjectInfo projectData={{name: data.name, details: data.details}} />
                    )
                    :
                    (<ProjectInfo projectData={{name: data.name, details: data.details}}  />
                    <ProjectImage image={data.images} />
                    )
                    )</div>
                ))} */}