'use client'

import Image from "next/image"
import avatar from "../../public/avatar.png";
import { easeInOut, motion } from "framer-motion";

export default function About(){
    return(
        <motion.div whileInView={{opacity: 1, y: 0}} initial= {{opacity: 0, y: 100}} transition={{ease: "easeOut", duration: 1}}
            id='About' className="flex flex-col bg-[#0F0E0E] mt-[60px] mb-5 w-full
            lg:flex-row lg:justify-between lg:mt-60 lg:p-[40px] md:rounded-[10px]">
            <div className="relative mt-5 h-[145px] sm:h-[280px] md:h-[400px] lg:mt-0 lg:w-[35%] xl:w-[30%]">
                <motion.div animate={{opacity: [1,0.5,1]}} transition={{ease: easeInOut, duration: 2, repeat: Infinity}}
                
                    className="absolute top-[50%] left-[50%] transform -translate-x-1/2
                    -translate-y-1/2 w-[80px] h-[80px] sm:w-44 sm:h-44 md:w-64 md:h-64 bg-[#CFA9FF] rounded-full opacity-70 blur-2xl lg:opacity-50">
                </motion.div>
                
                <Image
                    src={avatar}
                    alt="Avatar"
                    priority
                    width={500}
                    height={500}
                    className="absolute lg:top-8 xl:top-4 w-full h-full object-contain py-[10px] px-6 md:py-2 md:px-4"
                />

            </div>
            <div className="my-5 mx-5 text-center lg:text-left md:my-10 md:mx-12 lg:my-0 lg:mx-0 lg:w-[60%] lg:py-10">
                <h1 className="mb-5 font-medium text-white md:text-[30px] md:leading-6 md:mb-12">
                    About me
                </h1>
                {/* <motion.p whileInView= {{opacity: [1], x: 0}} initial= {{opacity: 0, x: 200}} transition={{duration: 0.5}}
                    className="font-light text-[#E3E4E6] text-sm leading-6 md:text-xl md:leading-8">
                    Hey there! I&apos;am Tushar Bajaj, Software developer passionate about 
                    creating eye-catching, accessible and user friendly applications. 
                    My interest include joining an exciting team of passionate people, 
                    learn new skills and make new friends. I love to interact with 
                    customers and know their pain points which helps to bring new ideas 
                    to the business.
                    <br /> <br />
                    Other than coding, I love to cook food, watch movies and travel to 
                    new places.
                    I&apos;m excited to connect and work together and refine my skills 
                    with the right company. 
                </motion.p> */}
                <motion.p whileInView= {{opacity: [1], x: 0}} initial= {{opacity: 0, x: 200}} transition={{duration: 0.5}}
                    className="font-light text-[#E3E4E6] text-sm leading-6 md:text-xl md:leading-8">
                        I&apos;m a frontend developer with expertise in React and Next.js, specializing in creating engaging user experiences and responsive web applications. My work focuses on building modern interfaces using cutting-edge technologies like TypeScript, Tailwind CSS, and Shadcn UI.
                        <br />
                        I&apos;ve developed StreamSphere, a Netflix-inspired streaming platform featuring personalized recommendations and secure user authentication, and built a comprehensive e-commerce platform serving diverse customer segments with seamless navigation and integrated payment solutions using Stripe.
                        <br/>
                        My approach combines clean, maintainable code with exceptional user experience design, ensuring every application delivers both functionality and visual appeal. 
                </motion.p>
            </div>
        </motion.div>
    )
}