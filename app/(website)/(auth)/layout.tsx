"use client"
import useAuthStateChange from "@/src/common/utils/hooks/authStateChange"
import { createContext } from "react"

type layout = {
    children: React.ReactNode
}
export const UserContext = createContext(null)
const Layout = ({children} : layout) =>{
    const {user} = useAuthStateChange()
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
export default Layout