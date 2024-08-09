"use client"
import AuthorizeLayout from "@/src/common/authentication/component/authorizationLayout"

type layout = {
    children: React.ReactNode
}

const Layout = ({children} : layout) =>{
    return(
        <AuthorizeLayout redirect="/app" reverse>
            {children}
        </AuthorizeLayout>
            
    )
}
export default Layout