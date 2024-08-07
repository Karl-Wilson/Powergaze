import FormButtons from "./formButtons"
import { classJoiner } from "@/src/common/utils/helper"

type form = {
    class?: string
    children: React.ReactNode
    page: string,
    action?: (formData: FormData)=>void
    submit?: (e: React.SyntheticEvent)=>void
    id?: string
}

const Form  = (props: form) =>{

    return(
        <div className={classJoiner("flex flex-row justify-center items-center", props.class)}>
            <form className="grid grid-cols-1 grid-rows-3 gap-4 w-full md:w-80 " action={props.action} id={props.id}>
            <div className="row-start-1 row-span-2">
                {props.children}
            </div>
            <FormButtons page={props.page} class="row-start-3" submitAccount={props.submit}/>
        </form>
        </div>
    )
}

export default Form