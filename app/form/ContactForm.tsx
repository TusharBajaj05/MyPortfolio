'use client'

import { useState, useRef, useEffect } from "react"
import emailjs from '@emailjs/browser';
import { CircleCheck, SendHorizonal, Smile } from "lucide-react";
import Validation from "./validation";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<any>({});
    const [submit, setSubmit] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const handleChange = (e: any) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e: any) => {
        e.preventDefault(); 
        const error = Validation(formData);
        setErrors(error);

        console.log(Object.keys(error).length);
        const currentForm = form.current;
        if (currentForm == null) return;

        {Object.keys(error).length === 0
        &&
        emailjs.sendForm('service_co3u8m6', 'template_lwu9lre', currentForm, {
            publicKey: 'rf_jYuCy9VRNVTl7l',
            })
            .then(() => {
                setSubmit(true);
                console.log('SUCCESS!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error) => {
                setSubmit(false);
                console.log('FAILED...', error.text);
            },
        );}
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name}
                className="w-full pl-[10px] pr-5 py-[15px] rounded-[10px] border-2
                    placeholder:text-[#999999] placeholder:text-sm inline-block">
            </input>
            {errors.name && <p className="text-destructive mt-2 ml-2">{errors.name}</p>}
            <input type="text" name="email" placeholder="Email" onChange={handleChange} value={formData.email}
                className="w-full pl-[10px] pr-5 py-[15px] mt-6 rounded-[10px] border-2
                     placeholder:text-[#999999] placeholder:text-sm inline-block">
            </input>
            {errors.email && <p className="text-destructive mt-2 ml-2">{errors.email}</p>}
            
            <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message}
                className="w-full h-[120px] pl-[10px] pr-5 py-5 mt-6 rounded-[10px] border-2
                 placeholder:text-[#999999] placeholder:text-sm resize-none">
            </textarea>
            {errors.message && <p className="text-destructive mt-2 ml-2">{errors.message}</p>}

            { !submit? (
                <div className="flex justify-center lg:justify-normal">
                    <button type="submit" className="flex bg-purple-500 px-6 py-3 mt-[30px]
                        rounded-sm gap-2 text-white items-center text-base font-semibold">
                        submit
                        <SendHorizonal className="text-white w-5 h-5" />
                    </button>
                </div>
            )
            :
            (
                <div className="flex flex-col justify-center gap-y-4 items-center mt-[30px] lg:flex-row lg:justify-normal lg:gap-x-4">
                    <button onClick={() => alert("You have already submitted the form.\n\n Thank You. Have a nice day!")} 
                        className="flex bg-purple-500 px-6 py-3 rounded-sm gap-2 text-white items-center text-base font-semibold">
                        submitted
                        <CircleCheck className="text-white fill-blue-500 w-5 h-5" />
                    </button>
                    <p className="flex items-center gap-x-1 text-lg font-medium">Thank you for submitting
                        <Smile className="fill-yellow-400 w-6 h-6" />
                    </p>
                </div>
            ) }
        </form>
    )
}