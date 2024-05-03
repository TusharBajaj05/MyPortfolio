'use client'

import { AlignJustify, Download } from "lucide-react";
import { Link } from "react-scroll";
import { default as TB } from "../svg/logo.svg";
import { useState } from "react";
import { X } from "lucide-react";

const links = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/About', id: 'about' },
    { name: 'Work', href: '/Work', id: 'work' },
    { name: 'Projects', href: '/Projects', id: 'projects' },
    { name: 'Contact', href: '/Contact', id: 'contact' },
]


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${open ? "w-full h-full fixed top-0 left-0 z-50 bg-black bg-black/90 overflow-hidden transition duration-300 delay-100 overflow-x-hidden" : 
            "flex items-center justify-between font-work py-4 px-5 mt-2 mx-auto max-w-2xl sticky top-0 bg-black z-50 lg:max-w-7xl md:p-6 md:mt-[10px] lg:mt-5"}`}>
           
            
                <div className={`${open ? "block" : "hidden"}`}>
                    <X className="w-[30px] h-[30px] mx-5 mt-10 mb-[50px] sm:mx-[50px] md:mt-[60px] md:mx-[90px] md:mb-[70px] md:w-12 md:h-12 text-white cursor-pointer" onClick={() => setOpen(false)} />
                    <div className="flex flex-col justify-center items-center">
                        {links.map((link) => (
                        <div key={link.id} className="mb-[60px]">
                            <Link to={link.name} smooth={true} offset={-50} id={link.id} duration={2000} delay={500}
                                className="text-white text-3xl leading-8 transition duration-300 hover:text-purple-500 hover:cursor-pointer"
                                onClick={() => setOpen(false)}>
                                {link.name}
                            </Link>
                        </div>
                        ))}
                    </div>    
                </div>
            <div className={`${open ? "hidden" : "flex gap-4 items-center lg:hidden"}`}>
                <AlignJustify className="w-[30px] h-[30px] cursor-pointer md:w-12 md:h-12 text-white transition duration-1000 delay-1000" onClick={() => setOpen(true)} />
                <TB className="w-[30px] h-[30px] md:pt-1 md:h-12 md:w-12" />
            </div>

            <div className="flex" >
                <Link to='Home' offset={-200}><TB className="hidden w-full h-12 lg:block" /></Link>
            </div>

            <nav className="hidden items-center lg:flex lg:gap-3">
                {links.map((link) => (
                    <div key={link.id}>
                        <Link to={link.name} smooth={true} offset={-230} id={link.id} duration={2000} delay={500}
                            className="text-base font-medium text-white py-2 px-3 
                                lg:py-3 lg:px-6 transition duration-100 hover:text-purple-500 hover:cursor-pointer hover:font-semibold">
                            {link.name}
                        </Link>
                    </div>
                ))}

                <a href="Resume.pdf" download="Resume">
                    <button className="rounded-3xl bg-purple-500 hover:bg-purple-600 transition duration-300">
                        <span className="flex py-2 px-4 text-sm font-medium text-white 
                            transition duration-100 lg:py-3 lg:px-6 lg:text-base ">
                            Download CV
                            <Download className="h-5 pt-1 animate-bounce lg:ml-1 lg:h-6" /></span>

                    </button></a>
            </nav>

            <a href="Resume.pdf" download="Resume" className= {`${open ? "hidden" : "lg:hidden"}`}>
                <button className="rounded-2xl bg-purple-500 hover:bg-purple-600 transition duration-300">
                    <span className="flex py-[5px] px-3 text-sm tracking-tighter font-medium text-white transition duration-100 md:py-3 md:px-6">
                        Download CV
                    <Download className="pt-1 h-[18px] animate-bounce" /></span>
                </button></a>
        </div>
    )
}