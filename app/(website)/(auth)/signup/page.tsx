"use client"
import SignupPage from "@/src/website/auth/view/signup"
import PageWrapper from "@/src/website/common/component/pageWrapper"
import { useContext } from "react"
import { UserContext } from "../layout"
import { useRouter } from "next/navigation"

const Signup = () =>{
    const user = useContext(UserContext)
    const router = useRouter()
  
    if(user == false){
        return(
            <PageWrapper>
                <SignupPage/>
            </PageWrapper>
        )
    }else if(user){
        //redirect 
        router.push("/app")
        return(<div>loading inner</div>)
    }
      return(<div>loading outer</div>)
}

export default Signup