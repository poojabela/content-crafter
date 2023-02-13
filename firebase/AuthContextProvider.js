import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase"

export const AuthContext = createContext(null);
export function AuthContextProvider ({children}) {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        return auth.onAuthStateChanged((newUser) => {
            setUser(newUser)
        })
    }, [])
    return <AuthContext.Provider value={{
        user,
        isLoading: user === undefined 
    }}>{children}</AuthContext.Provider>
}

export function useUser() {
    return useContext(AuthContext)
}