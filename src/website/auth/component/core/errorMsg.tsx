import { classJoiner } from "@/src/common/utils/helper"

type errorMsg = {
    class?: string
    error?: string
}
const ErrorMsg = (props: errorMsg) =>{
    return(
        <div className={classJoiner("bg-rose-500 p-4 box-border rounded-xl", props.class)}>
            <p className="text-white">{props.error}</p>
        </div>
    )
}

export default ErrorMsg