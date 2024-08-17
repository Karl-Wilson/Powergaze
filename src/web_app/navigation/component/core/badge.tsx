import { MenuContentWrapper, MenuDropdown, MenuWrapper, useMenu } from "@/src/common/components/core/menuBuilder"
import { classJoiner } from "@/src/common/utils/helper"
import { useState } from "react"

type badge = {
    icon: string
    count?: number
    class?: string
    children?: React.ReactNode
    dropdownClass?: string
}
const Badge = (props:badge) =>{
    const {display, click} = useMenu()
    const [count, setCount] = useState(props.count)
    const menuClick = () =>{
        click()
        setCount(0)
    }
    const checkCount = () =>{
        if(count && count > 0){
            return true
        }
        return false
    }
    return(
        <MenuWrapper class={classJoiner("relative cursor-pointer", props.class)}>
            <MenuContentWrapper click={menuClick}>
                {checkCount() && <div className="rounded-full size-5 flex flex-col justify-center items-center box-border absolute top-0 right-0 bg-dashboard-red text-xs text-white font-bold">{props.count}</div>}
                <img src={props.icon} className="size-11" />
            </MenuContentWrapper>
            <MenuDropdown display={display} class="right-0 top-12 bg-white z-30">
                {props.children}
            </MenuDropdown>
        </MenuWrapper>
    )
}

export default Badge