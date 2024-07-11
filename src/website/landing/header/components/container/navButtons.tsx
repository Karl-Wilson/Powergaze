"use client"
import Button from "@/src/common/components/core/button";
import { classJoiner } from "@/src/common/utils/helper";
import { useRouter } from "next/navigation";


type navButtons = {
    class?: string
}
const NavButtons = (props: navButtons) =>{
    const router = useRouter()
    const loginBtn = () =>{
        router.push("/login")
    }
    const signupBtn = () =>{
        router.push("/signup")
    }

    return(
        <div className={classJoiner("flex flex-col md:flex-row items-center md:justify-end pt-4 md:pt-0", props.class)}>
            <Button label="Login" text={{textColor: "md:text-zinc-800 hover:text-btnColor"}} 
                outline={{borderColor: "border-btnColor", borderWidth: "border md:border-0", textColor: "text-btnColor"}} 
                class="w-full md:w-auto mb-2 md:mb-0" click={loginBtn}/>
            <Button label="Get Started" 
                filled={{bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}} 
                class="font-bold w-full md:w-auto" click={signupBtn}/>
        </div>
    )
}
export default NavButtons;