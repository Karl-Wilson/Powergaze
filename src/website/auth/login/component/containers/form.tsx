import Input from "@/src/common/components/core/form/input"
import Link from "next/link"
import FormButtons from "./formButtons"
import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type form = {
    class?: string
}

const Form  = (props: form) =>{
    const theme = {borderColor: "border-neutral-200", textColor: "text-neutral-400", bgColor: "bg-white",  borderWidth: "border"}
    return(
        <div className={classJoiner("flex flex-row justify-center items-center", props.class)}>
            <form className="grid grid-cols-1 grid-rows-3 w-full md:w-80">
            <div className="row-start-1 row-span-2">
                <Input  name="Email" type="text" label="Email" inputType="default" theme={theme} class="mb-4"/>
                <Input  name="Passowrd" type="password" label="Password" inputType="default" theme={theme}  class="mb-4"/>
                <Link href="/reset" className={classJoiner("text-sm", montserrat.className)}>Forget Email or Password</Link>
            </div>
            <FormButtons class="row-start-3"/>
        </form>
        </div>
    )
}

export default Form