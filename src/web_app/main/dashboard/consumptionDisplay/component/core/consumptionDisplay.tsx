import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type consumption = {
    title: string
    icon: string
    value: string | number
    unit?: string
    class?: string
    unitClass?: string
    valueClass?: string
}
const ConsumptionDisplay = (props:consumption) =>{
    return(
        <div className={classJoiner("rounded-xl py-3 px-6 relative text-white flex flex-col", props.class, lato.className)}>
            <div className={classJoiner("text-xl z-20")}>{props.title}</div>
            <div className="flex flex-row items-center z-20 h-full w-full absolute top-0 left-0 py-3 px-6 box-border">
                <div className="flex flex-row items-end font-bold break-words">
                    <span className={classJoiner("text-4xl", props.valueClass)}>{props.value}</span>
                    {props.unit && <span className={classJoiner("text-2xl", props.unitClass)}>{props.unit}</span>}
                </div>
                
            </div>
            <img src={props.icon} className="absolute z-10 bottom-0 right-0 w-36 h-auto"/>
        </div>
    )
}

export default ConsumptionDisplay