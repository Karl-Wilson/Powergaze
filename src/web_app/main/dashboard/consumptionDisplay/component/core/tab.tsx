import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"
import { MouseEvent, MouseEventHandler } from "react"

type tab = {
    label: string
    click: MouseEventHandler
    class?: string
    active?: boolean
}
const Tab = (props: tab) =>{
    return(
        <div className={classJoiner("p-4 box-border hover:border-b-8 hover:border-b-[#666CFF] hover:border-solid hover:text-[#666CFF]", 
            props.class, props.active? "border-b-8 border-b-[#666CFF] border-solid text-[#666CFF]" : "border-b-0", 
            lato.className, "font-bold text-xl cursor-pointer")} onClick={props.click}>
            <span>{props.label}</span>
        </div>
    )
}

export default Tab