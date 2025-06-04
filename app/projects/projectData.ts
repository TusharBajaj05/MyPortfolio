import neflix from "../../public/Neflix.png";
import eatchefs from "../../public/EatChefs.png";
import ushop from "../../public/ushop.png";

export let projectData = [
    {
        name: 'StreamSphere' as string,
        details: 'Project aimed at replicating the Netflix offers a comprehensive collection of movies and TV shows, along with curated recommendations tailored to each user\'s preferences. Technologies Used - React, Next.js, and Next-Auth for secure authentication, Supabase and Prisma to manage the database, Enhanced with Tailwind CSS, Shadcn UI for styling' as string,
        images: neflix as any,
        url: 'https://neflix-nextjs.vercel.app/' as string,
    },
    {
        name: 'EATCHEF\'S' as string,
        details: 'Food Website with recipes, chef profiles and user reviews. This platform gives you your appetite for delicious dishes. Technologies Used- HTML,CSS, Bootstrap and JavaScript' as string,
        images: eatchefs as any,
        url: 'https://eatchefs.netlify.app/' as string,
    },
    {
        name: 'E-COMMERCE' as string,
        details: 'E-commerce platform that can cater to a diverse range of customers and offer a wide array of products for men, women and teens with seamless navigation and secure transactions. Technologies Used - ReactJS, NextJS,  Stripe for payment integration, Sanity.io for content management, Tailwind CSS and shadcn UI for stylimg' as string,
        images: ushop as any,
        url: 'https://ushop-xi.vercel.app/' as string,
    },
];