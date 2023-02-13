import { logOut, signIn } from "../firebase/firebase"
import { getAuth } from "firebase/auth";
import Router from "next/router";

const Header = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const handleBack = () => {
        Router.push('/home')
    }

    return ( 
        <header className="px-3 py-7 text-center flex justify-between items-center w-[min(920px,_100%)] mx-auto">
            <h1 className="text-xl text bg-[linear-gradient(-33deg,_#FFA07A_5%,_#FFB6C1)] bg-clip-text text-transparent font-extrabold md:text-3xl">Content Crafter</h1>
            <div className="">
                {user && 
                    <button onClick={logOut} className="p-1 text-[#FFA07A] text-sm">Sign out</button>
                }
                {!user && 
                    <button onClick={signIn} className="p-1  text-[#FFA07A] text-sm">Sign in</button>
                }
                {user && 
                <button className="p-3 rounded-md ml-1 text-[#FFA07A] text-sm" onClick={handleBack}>Go back</button>
                }   
            </div>            
        </header>
     );
}
 
export default Header;