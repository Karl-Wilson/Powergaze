"use client"
import LoginPage from "@/src/website/auth/view/login"
import PageWrapper from "@/src/website/common/component/pageWrapper"
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../layout";



const Login = () =>{
    const user = useContext(UserContext)
    const router = useRouter()
  
    if(user == false){
        return(
            <PageWrapper>
                <LoginPage/>
            </PageWrapper>
        )
    }else if(user){
        //redirect 
        router.push("/app")
        return(<div>loading inner</div>)
    }
      return(<div>loading outer</div>)
    
}

export default Login