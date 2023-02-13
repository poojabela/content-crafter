import Link from "next/link";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import Router from "next/router";

const HomeSection = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user === null) {
            Router.push('/')
        }
    })


    return ( 
        <div className="justify-center content-center grid grid-cols-1 w-[min(920px,_100%)] mx-auto px-3 py-28 gap-3 md:grid-cols-2 lg:grid-cols-3 ">

            <Link href="/blog" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)] border-2 rounded hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl">🅱 Blog Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Generate professional-looking blog posts with ease. </p>
            </Link>

            <Link href="/greeting" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)] border-2 rounded-md hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl">✉ Greetings Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Create personalized greetings for any occasion.</p>
            </Link>

            <Link href="/email" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)] border-2  rounded-md hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl">📧 Email Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Generator custom emails that match your brand's voice and style</p>
            </Link>

            <Link href="/caption" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)] border-2 rounded-md hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl">🖋 Post Caption Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Create attention-grabbing and engaging captions for your social media posts</p>
            </Link>

            <Link href="/scripts" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)] border-2 rounded-md hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl">📜 Youtube scripts Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Generate professional and engaging scripts for their YouTube videos</p>
            </Link>

            <Link href="/heading" className="p-2 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.2)]  border-2 rounded-md hover:-translate-y-1 hover:duration-300 hover:ease-in-out">
                <h1 className="text-2xl ">📝 Headline Generater</h1>
                <p className="mt-3 text-[#687076] text-sm">Generate create eye-catching and attention-grabbing headlines</p>
            </Link>
        </div>
     );
}
 
export default HomeSection;