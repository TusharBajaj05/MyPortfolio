'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectImage(props: any){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return(
        <div className="flex justify-center">
            <motion.div 
            ref = {ref}
            style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}>
            <Image 
                src={props.image}
                alt="Project"
                priority
                width={600}
                height={600}
                className="rounded-[10px] w-full h-[210px] px-[45px] sm:h-[320px] sm:w-[480px]
                    md:h-[400px] md:w-full lg:py-[30px] lg:px-0 lg:w-[530px] lg:h-full"
            />
            </motion.div>
        </div>
        

/* <motion.div initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} 
transition={{duration: 1, delay: 0.2, ease: easeOut}}
className="flex justify-center"> */

        // <div className="flex justify-center items-center">
        //     <div 
        //         className="relative w-[280px] h-[210px] sm:w-[400px] sm:h-[320px] md:w-[450px] md:h-[380px] lg:w-[520px] lg:h-[420px] rounded-[10px] before:absolute before:top-[-50%]
        //             before:right-[-50%] before:bottom-[-50%] before:left-[-50%] overflow-hidden
        //             before:bg-gradient-to-r from-purple-200 via-purple-500 to-pink-200 
        //             before:animate-spin-slow">

        //     </div>

        //     <Image 
        //         alt="Project"
        //         priority
        //         src={props.image}
        //         width={600}
        //         height={600}
        //         className="absolute w-[270px] h-[200px] sm:w-[385px] sm:h-[305px] 
        //             md:w-[435px] md:h-[365px] lg:w-[500px] lg:h-[400px] rounded-[10px]"
        //     />
        // </div>
    )
}