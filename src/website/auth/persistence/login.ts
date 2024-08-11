import { useState } from "react"
import AUTH from "@/src/common/authentication/initialize"

const useLogin = () =>{
    const [error, setError] = useState<any>()
    async function testSubmit (email: string, password: string){
        let result = await AUTH.signIn(email, password)
        return result
    }
    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        let emailData = document.querySelector("[name='Email']") as HTMLFormElement
        let passwordData = document.querySelector("[name='Password']") as HTMLFormElement
        let email = emailData.value.toString().trim()
        let password = passwordData.value.toString().trim()
        let emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]+$/
        let passwordRegex = /^[\w\d@#$%^&*+-=_]+$/
        try {
            if(email?.match(emailRegex) && password?.match(passwordRegex)){
                testSubmit(email, password).then((result)=>{
                    if(result.error) throw result.error
                }).catch((error)=>{
                    setError(error)
                })
            }else{
                throw "Email or Password is incorrect"
            } 
        } catch (error) {
            setError(error)
        }
    }
    const change = () =>{
        setError(null)
    }
    return {error, submit, change}
}

export default useLogin