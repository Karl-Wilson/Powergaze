import { useRouter } from "next/navigation"
import useAuthStateChange from "../../utils/hooks/authStateChange"

type layout = {
    children: React.ReactNode
    redirect: string
    reverse?: boolean
}
const AuthorizeLayout = (props:layout) =>{
    const {user} = useAuthStateChange()
    const router = useRouter()

    if(!props.reverse){
        //default: if user is signed in show content
        if(user){
            return  <>{props.children}</> 
        }else if(user == false){
            //redirect
            router.push(props.redirect)
            return <div>Loading inside</div>
        }
    }else{
        //if user is logged in redirect to another page
        if(user){
             //redirect
            router.push(props.redirect)
            return <div>Loading inside</div>
        }else if(user == false){
            return  <>{props.children}</>
        }
    }
    
    return <div>Loading outside</div>
}

export default AuthorizeLayout