import Button from "@/src/common/components/core/button"
import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"

type formButtons = {
    class?: string
    createAccount?: React.MouseEventHandler
    submitAccount?: React.MouseEventHandler
    page: string
}

const FormButtons = (props: formButtons) =>{
    const isLoginPage = ():boolean =>{
        if(props.page == "login") return true
        return false
    }
    return(
        <div className={classJoiner("flex flex-col md:flex-row w-full", props.class, isLoginPage()? "items-center md:justify-between" : "md:justify-end")}>
            {isLoginPage() && <Link href="/signup" className="font-bold mb-6 md:mb-0 hover:text-btnColor">Create Account</Link>}
            <Button label="Next" 
                filled={{bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}} 
                class="font-bold w-full md:w-auto" click={props.submitAccount}/>
        </div>
    )
}

export default FormButtons