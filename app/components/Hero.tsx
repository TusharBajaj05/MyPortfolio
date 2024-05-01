'use client'

import Image from "next/image";
import wave from "../../public/wave.png";
import profile from "../../public/profile.png";
import { default as Mobile} from "../svg/phone.svg";
import { default as Monitor} from "../svg/monitor.svg";
import { default as Code} from "../svg/code.svg";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; 
import photo from "../../public/file.png";

export default function Hero(){
    return(
        <div className="flex flex-col-reverse mx-[30px] mt-[80px] lg:mx-0 lg:h-[550px] lg:flex-row lg:justify-between lg:mt-[110px]">
            <div className="w-full text-center mt-[30px] lg:w-[48%] lg:text-left md:my-[63px]">
                <h1 className="flex justify-center text-[25px] text-gray-400 font-light 
                    gap-3 md:text-[56px] lg:justify-normal">
                    Hi
                    <Image 
                        src={wave}
                        alt=""
                        height={100}
                        width={100}
                        priority
                        className="w-[28px] mt-1 h-8 object-contain align-middle md:w-[60px] md:h-[60px] md:my-3"
                    />
                </h1>

                <h3 className="text-gray-400 font-light text-[25px] leading-[32.5px] py-2 md:text-[56px] md:leading-[72.8px]">
                    I'm <span className="font-semibold text-[#E3E4E6]">
                        Tushar Bajaj <br /> Software Developer
                        </span>
                </h3>

                <p className="text-[#E3E4E6] font-light text-sm mb-5 md:mb-4 md:text-base md:tracking-tight">
                    Welcome to my portfolio! Incase you have any projects let’s connect and discuss
                </p>

                <div className="flex justify-center my-3 items-center gap-4 md:gap-8 md:my-[30px] lg:justify-normal">
                    <a href="https://github.com/TusharBajaj05" target="_blank">
                        <Github className="bg-white fill-black w-6 h-6 pt-1 rounded-full stroke-1 hover:cursor-pointer md:w-10 md:h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/tusharbajaj05/" target="_blank">
                        <Linkedin className="bg-white fill-black w-6 h-6 pt-1 stroke-1 hover:cursor-pointer md:w-10 md:h-10" />
                    </a>
                </div>

                <Link to='Contact' smooth={true} offset={-250} duration={2000} delay={500}>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                    className="bg-purple-500 py-2 px-5 md:px-6 md:py-3 rounded-3xl
                 text-white text-base font-medium hover:bg-purple-600">
                    Hire Me
                </motion.button>
                </Link>
            </div>

            <div className="relative overflow-hidden h-[220px] sm:h-[350px] md:h-[490px] lg:w-[50%] xl:w-[42%] lg:my-[30px]">
                <div className="absolute top-[62%] left-[51%] transform -translate-x-1/2 -translate-y-1/2 z-10">  
                    <motion.div animate={{rotate: [-50, 50, -50 ]}} transition={{duration: 10, repeat: Infinity, repeatDelay: 0}}
                        className="w-[225px] h-[225px] border-[1px] border-purple-500 rounded-full z-10 sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
                            <Code className="absolute bg-yellow-300 w-[27px] h-[27px] rounded-sm p-1 
                                top-[35%] left-[-5%] sm:w-11 sm:h-11 md:w-[60px] md:h-[60px]" />
                            <Mobile className="absolute bg-yellow-300 w-[27px] h-[27px] rounded-sm p-1 
                                top-[-10%] left-[50%] sm:w-11 sm:h-11 md:w-[60px] md:h-[60px]" />
                            <Monitor className="absolute bg-yellow-300 w-[27px] h-[27px] rounded-sm p-1 
                                top-[40%] left-[90%] sm:w-11 sm:h-11 md:w-[60px] md:h-[60px]" />
                    </motion.div>
                </div>

                <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 
                    -translate-y-1/2 w-[210px] h-[210px] sm:w-[340px] sm:h-[340px] md:w-[455px] md:h-[455px] bg-purple-500 rounded-full">
                </div>

                <Image
                    src={photo}
                    alt="Profile"
                    priority
                    width={700}
                    height={700}
                    className="absolute w-full h-[220px] top-[52%] left-[50%] transform 
                    -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[340px] md:h-[470px]"
                />
            </div>
        </div>
    )
}