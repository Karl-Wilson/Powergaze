import { classJoiner } from "@/src/common/utils/helper"

type badge = {
    icon: string
    count?: number
    class?: string
}
const Badge = (props:badge) =>{
    return(
        <div className={classJoiner("relative cursor-pointer", props.class)}>
            {props.count && <div className="rounded-full p-1 box-border h-3 absolute top-0 right-0">{props.count}</div>}
            <img src={props.icon} className="size-11"/>
        </div>
    )
}

export default Badge