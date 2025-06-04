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
                        Dec 2023 - Present
                    </p>
                
                    <div className="lg:mt-[1290px] xl:mt-[885px]">
                        <h3 className="text-purple-500 text-[25px] leading-[25px] font-normal">
                            Infosys, Calgary
                        </h3>
                        <p className="text-[#E3E4E6] text-base leading-4 font-normal mt-[14px] tracking-tight">
                            June 2022 - Aug 2023
                        </p>
                    </div>
                </motion.div>

                <div className="text-center pb-16 hidden lg:block">
                    <div className="h-8 w-8 rounded-full bg-purple-500 border-2"></div>
                    <div className="border-gray-300 border-dashed border-2 inline-block -mb-[6px] lg:h-[1800px] xl:h-[1260px]"></div>
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
                        Dec 2023 - Present
                    </p>

                    <h3 className="text-purple-500 text-lg leading-[18px] md:text-[25px] md:leading-[25px]">
                        Front-End Developer
                    </h3>
                    <p className="mt-[14px] text-white">
                        As a freelance developer, I&apos;ve partnered with clients to build performant, user-friendly web apps using <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. I focus on clean code, modern UI/UX, and robust architecture.
                    </p>

                    <div className="space-y-6 mt-[14px]">
                        <div>
                            <h1 className="text-white font-semibold">🏠 Property Listing Platform</h1>
                            <ul className="text-[#E3E4E6] ml-4 mt-[6px] list-disc text-sm md:leading-6">
                                <li>Implemented dynamic routing and server-side rendering with <strong>Next.js</strong></li>
                                <li>Added debounced search and filtering by location, price, and availability</li>
                                <li>Designed <strong>responsive UI</strong> based on Figma designs</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white font-semibold">💪 Fitness Coaching Dashboard</h1>
                            <ul className="text-[#E3E4E6] ml-4 mt-[6px] list-disc text-sm md:leading-6">
                                <li>Integrated <strong>calendar API</strong> for real-time session bookings</li>
                                <li>Built reusable <strong>React hooks</strong> for state management</li>
                                <li>Mobile-first layout using <strong>Tailwind CSS</strong></li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white font-semibold">🛍️ E-commerce Storefront</h1>
                            <ul className="text-[#E3E4E6] ml-4 mt-[6px] list-disc text-sm md:leading-6">
                                <li><strong>Stripe</strong> integration for secure payments</li>
                                <li>Implemented <strong>lazy loading</strong> and <strong>code splitting</strong> for performance</li>
                                <li>Real-time inventory updates and advanced product filtering</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white font-semibold">📝 Custom Blog CMS</h1>
                            <ul className="text-[#E3E4E6] ml-4 mt-[6px] list-disc text-sm md:leading-6">
                                <li>Integrated with <strong>Sanity.io</strong> for headless content management</li>
                                <li>Implemented <strong>ISR</strong> for <strong>SEO</strong> and performance</li>
                                <li>Enabled live preview and non-technical content editing</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white font-semibold">💡 Key Contributions</h1>
                            <ul className="text-[#E3E4E6] ml-4 mt-[6px] list-disc text-sm md:leading-6">
                                <li><strong>JWT-based</strong> role-based access control (RBAC)</li>
                                <li><strong>Lighthouse/DevTools</strong> audits improved load times up to 70%</li>
                                <li><strong>REST</strong> & <strong>GraphQL</strong> integrations with <strong>React Query</strong> + <strong>Axios</strong></li>
                                <li><strong>WCAG</strong> accessibility via <strong>semantic HTML</strong> & <strong>ARIA</strong> attributes</li>
                            </ul>
                        </div>  
                    </div>

{/*                 
                <ul className="mt-[6px] pl-4 list-disc text-[#E3E4E6] text-sm md:leading-6">
                    <li className="mb-1 md:mb-2">
                        Designed and developed multiple client-facing web applications using Next.js, React, TypeScript, and Tailwind CSS,
focusing on performance, scalability, and clean UI/UX principles.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Built a property listing platform enabling landlords to post and manage listings, while tenants could filter properties by
location, price, and availability. Implemented server-side rendering with dynamic routing and debounced search queries
to improve response time and user engagement.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Created a fitness coaching dashboard for personal trainers to manage clients, sessions, and workout plans. Integrated
calendar APIs and custom hook-based state management to sync session bookings in real-time.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Developed an e-commerce storefront featuring product filtering, real-time inventory updates, and Stripe integration
for secure payments. Used lazy loading and route-level code splitting to keep performance optimal across mobile devices.– Implemented role-based access control (RBAC) using JWT and middleware in Next.js API routes to secure admin
dashboards, client areas, and payment gateways.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Delivered a custom blog CMS using a headless CMS backend (Sanity), allowing non-technical users to manage content
with live preview capabilities. Built reusable components and implemented ISR (Incremental Static Regeneration) for
SEO and performance.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Worked with clients to translate Figma designs into responsive interfaces, ensuring cross-browser compatibility and WCAG
accessibility standards using semantic HTML and ARIA attributes.
                    </li>
                    <li className="mb-1 md:mb-2">
                        Performed performance audits and optimizations using Chrome DevTools and Lighthouse. Identified and resolved render
blocking scripts, oversized images, and unoptimized bundle sizes—improving load time by up to 70%
                    </li>
                    <li className="mb-1 md:mb-2">
                        Collaborated with backend developers to integrate REST and GraphQL APIs, handling edge cases like retries, caching,
and optimistic UI updates using libraries like React Query and Axios.
                    </li>
                </ul> */}

                    <h3 className="text-purple-500 text-lg leading-[18px] mt-20 lg:hidden">
                        Infosys, Calgary
                    </h3>
                    <p className="text-[#E3E4E6] text-xs leading-3 mt-[10px] mb-5 tracking-tight lg:hidden">
                        June 2022 - Aug 2023
                    </p>
                
                    <h3 className="text-purple-500 text-lg leading-[18px] md:text-[25px] md:leading-[25px] lg:mt-[80px]">
                        Associate Engineer
                    </h3>
                    <p className="text-white mt-[14px]">
                        Worked on an enterprise-grade internal assessment platform in a sprint-based team. Focused on performance, form logic, and UI precision.
                    </p>
                    {/* <h1 className="text-white font-semibold mt-[14px] text-5">
                        Key Contributions:
                    </h1> */}
                    <ul className="mt-[6px] ml-4 list-disc text-[#E3E4E6] text-sm space-y-1 md:space-y-2 md:leading-6">
                        <li>
                            Developed dynamic quiz forms using <strong>React</strong> and <strong>custom hooks</strong>
                        </li>
                        <li>
                            Reduced boilerplate by 45% through <strong>modular form logic</strong>
                        </li>
                        <li>
                            Solved data rendering lag with <code>react-window</code> (60% faster loads)
                        </li>
                        <li>
                            Built responsive, pixel-perfect UIs from Figma designs
                        </li>
                        <li>
                            Reduced bundle size by 35% via <strong>lazy loading</strong> and <strong>dynamic imports</strong>
                        </li>
                        <li>
                            Participated in SCRUM, code reviews, and paired sessions to enhance delivery quality
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}