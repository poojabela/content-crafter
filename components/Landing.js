import { signIn } from "../firebase/firebase"
import { useUser } from "../firebase/AuthContextProvider"

const Landing = () => {
    const { isLoading } = useUser();

    return ( 
        <div className="flex flex-col items-center justify-center text-center h-[60vh] w-[min(920px,_100%)] mx-auto px-3">
            <h1 className="text-[25px] mb-2 md:text-[40px]">Craft content with confidence.</h1>
            <p className="text-[#687076] text-sm w-[min(700px,_100%)] mb-6 md:text-lg">Craft content effortlessly with Content Crafter, the AI-powered writing tool. Write captivating social media posts, blog articles, and more.</p>
            <button className="p-2 text-sm bg-[#000] text-[#fff] rounded-md bg-[linear-gradient(-33deg,_#FFA07A_5%,_#FFB6C1)] md:p-3 md:text-[15px] disabled:cursor-not-allowed" onClick={signIn} disabled={isLoading}>Let's get started</button>
            <div className="design w-[min(500px,_100%)] h-[500px] bg-[linear-gradient(-33deg,_#FFA07A_5%,_#FFB6C1)] blur-[1000px] absolute z-[-1] rounded-[999px] top-0"></div>
        </div>
     );
}
 
export default Landing;