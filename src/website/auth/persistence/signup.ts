import { useState } from "react"
import DATABASE from "@/src/common/authentication/initialize"

const useSignup = () =>{
    const [error, setError] = useState<any>()
    async function testSubmit (email: string, password: string){
        let result = await DATABASE.createUser(email, password)
        return result
    }
    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        let emailData = document.querySelector("[name='Email']") as HTMLFormElement
        let passwordData = document.querySelector("[name='Password']") as HTMLFormElement
        let confirm_passData = document.querySelector("[name='Confirm_Password']") as HTMLFormElement
        let email = emailData.value.toString().trim()
        let password = passwordData.value.toString().trim()
        let confirm_pass = confirm_passData.value.toString().trim()

        let emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]+$/
        let passwordRegex = /^[\w\d@#$%^&*+-=_]+$/
        let confirm_passRegex = /^[\w\d@#$%^&*+-=_]+$/
        try {
            if(email?.match(emailRegex) && password?.match(passwordRegex) && confirm_pass?.match(confirm_passRegex)){
                console.log("matched")
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

export default useSignup