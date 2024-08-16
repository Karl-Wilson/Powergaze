import { useRouter } from "next/navigation"
import useAuthStateChange from "../../utils/hooks/authStateChange"
import Loading from "../../components/core/loading"

type layout = {
    children: React.ReactNode
    redirect: string
    reverse?: boolean
}
const AuthorizeLayout = (props:layout) =>{
    const {user} = useAuthStateChange()
    const router = useRouter()

    if(!props.reverse){
        //default: if user is signed in show content, //dasboard
        if(user){
            return  <>{props.children}</> 
        }else if(user == false){
            //redirect
            router.push(props.redirect)
            return <Loading/>
        }
    }else{
        //if user is logged in redirect to another page, //e.g login page
        if(user){
             //redirect
            router.push(props.redirect)
            return <Loading/>
        }else if(user == false){
            return  <>{props.children}</>
        }
    }
    
    return <Loading/>
}

export default AuthorizeLayout