'use client'

import { default as Js } from '../svg/icon-javscript.svg';
import { default as Ts } from '../svg/icon-typescript.svg';
import { default as React } from '../svg/icon-react.svg';
import { default as Next } from '../svg/icon-nextjs.svg';
import { default as Html } from '../svg/html.svg';
import { default as Css } from "../svg/css3.svg";
import { default as Tailwind } from "../svg/tailwindcss.svg";
import { default as Sql } from "../svg/sql.svg";
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
        },
    }),
};

export default function Skills(){
    return(
        <div className="my-[60px] mx-5 md:my-[120px] lg:my-[150px] md:mx-2">
            <h1 className="text-white text-center font-medium text-xl leading-6 md:text-3xl">
                Skills
            </h1>
            <p className="text-center text-[#E3E4E6] px-7 text-sm leading-6 
                mt-[6px] md:mt-4 md:text-lg">
                The Skills, technologies I am really good at
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-[30px] justify-between 
                text-center mt-[30px] sm:gap-x-28 md:gap-x-24 lg:gap-x-0 md:mt-24 md:px-2">
                <motion.div 
                    variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={1}
                    className='flex flex-col gap-y-2 items-center'>
                    <Js className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" /> 
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        Javascript
                    </p>
                </motion.div>
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={2}
                className='flex flex-col gap-y-2 items-center'>
                    <Ts className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        Typescript
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={3}
                className='flex flex-col gap-y-2 items-center'>
                    <React className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        React
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={4}
                className='flex flex-col gap-y-2 items-center'>
                    <Next className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        Next.js
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={5}
                className='flex flex-col gap-y-2 items-center'>
                    <Html className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        HTML
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={6}
                className='flex flex-col gap-y-2 items-center'>
                    <Css className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        CSS
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={7}
                className='flex flex-col gap-y-2 items-center'>
                    <Tailwind className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        Tailwind CSS
                    </p>
                </motion.div>
                
                <motion.div
                variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    custom={8}
                className='flex flex-col gap-y-2 items-center'>
                    <Sql className="w-[42px] h-[42px] md:h-[64px] md:w-[64px]" />
                    <p className='text-[#D1D5DB] text-xs md:text-lg font-inter tracking-tighter'>
                        SQL
                    </p>
                </motion.div>
                
            </div>
        </div>
    )
}