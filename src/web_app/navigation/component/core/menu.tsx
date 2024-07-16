import { classJoiner } from "@/src/common/utils/helper"
import { MouseEventHandler } from "react"

type menu = {
    icon: string
    click: MouseEventHandler
    class?: string
}
const Menu = (props:menu) =>{
    return(
        <img src={props.icon} className={classJoiner("size-6 cursor-pointer", props.class)} onClick={props.click}/>
    )
}

export default Menu