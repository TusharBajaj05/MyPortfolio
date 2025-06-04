import { Copyright } from 'lucide-react';
import { default as TB } from '../svg/logo.svg';
import {Heart} from "lucide-react";

export default function Footer(){
    return(
        <div className="flex justify-center gap-[10px] font-work items-center mx-auto 
        max-w-2xl mt-[81px] lg:max-w-7xl md:mt-[92px] md:gap-[18px]">
            <div className='relative rounded-full w-[45px] h-[45px] bg-white'>
                <TB className='absolute top-[50%] left-[50%] transform -translate-x-1/2
                    -translate-y-1/2 w-full h-[25px]' />
            </div>
            <div className='flex text-white items-center gap-1'>
                <Copyright className='w-4 h-4' />
                <span className='text-sm md:text-base'>2024</span>
                <div className='bg-white h-3.5 w-[1px]' />
                <h3 className='flex text-sm font-medium md:text-base'>Tushar Bajaj. Made with&nbsp;<Heart color='red' fill='red' /> &nbsp;and lots of coffee</h3>
                
            </div>
        </div>
    )
}