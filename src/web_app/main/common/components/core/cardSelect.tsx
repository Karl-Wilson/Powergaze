import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"
import { ChangeEventHandler, LegacyRef } from "react"

type select = {
    values: string[] | number[]
    class?: string
    selectRef?: LegacyRef<HTMLSelectElement>
    change?: ChangeEventHandler
    default?: string
}
const CardSelect = (props:select) =>{
    return(
        <div className={classJoiner(props.class, "")}>
            <select className={classJoiner("w-full h-full border border-neutral-300 border-solid py-2 px-4 box-border rounded-xl", lato.className)} ref={props.selectRef} onChange={props.change} value={props.default}>
                {props.values.map(item=>{
                    // if(item == props.default){
                    //     return <option key={item as string + Math.random()} selected>{item}</option>
                    // }
                    return <option key={item as string + Math.random()}>{item}</option> 
                })}
            </select>
        </div>
        
    )
}

export default CardSelect