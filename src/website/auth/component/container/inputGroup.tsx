import Input from "@/src/common/components/core/form/input"
import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"

type inputGroup = {
    page: string
}

const InputGroup = (props:inputGroup) =>{
    const theme = {borderColor: "border-neutral-200", textColor: "text-neutral-400", bgColor: "bg-white",  borderWidth: "border"}
    const isLoginPage = ():boolean =>{
        if(props.page == "login") return true
        return false
    }
    return(
        <>
            <Input  name="Email" type="text" label="Email" inputType="default" theme={theme} class="mb-4"/>
            <Input  name="Passowrd" type="password" label="Password" inputType="default" theme={theme}  class="mb-4"/>
            {!isLoginPage() && <Input  name="Passowrd" type="password" label="Conirm Password" inputType="default" theme={theme}  class="mb-4"/>
            }
            {isLoginPage() && <Link href="/reset" className={classJoiner("text-sm", montserrat.className)}>Forget Email or Password</Link>}
        </>
    )
}

export default InputGroup