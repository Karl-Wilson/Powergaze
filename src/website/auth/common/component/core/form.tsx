import Input from "@/src/common/components/core/form/input"
import Link from "next/link"
import FormButtons from "../container/formButtons"
import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type form = {
    class?: string
    children: React.ReactNode
    page: string
}

const Form  = (props: form) =>{
    return(
        <div className={classJoiner("flex flex-row justify-center items-center", props.class)}>
            <form className="grid grid-cols-1 grid-rows-3 gap-4 w-full md:w-80 ">
            <div className="row-start-1 row-span-2">
                {props.children}
            </div>
            <FormButtons page={props.page} class="row-start-3"/>
        </form>
        </div>
    )
}

export default Form