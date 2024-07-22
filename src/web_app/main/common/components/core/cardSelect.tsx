import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type select = {
    values: string[] | number[]
    class?: string
}
const CardSelect = (props:select) =>{
    return(
        <div className={classJoiner(props.class, "")}>
            <select className={classJoiner("w-full h-full border border-neutral-300 border-solid py-2 px-4 box-border rounded-xl", lato.className)}>
                {props.values.map(item=>{
                    return <option>{item}</option>
                })}
            </select>
        </div>
        
    )
}

export default CardSelect