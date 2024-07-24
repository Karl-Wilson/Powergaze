import { classJoiner } from "@/src/common/utils/helper"

type unitComp = {
    value: number
    currency: string
}

export const UnitComp = (props: unitComp) =>{
    return(
        <span>{props.currency}{props.value}</span>
    )
}

type statusComp = {
    status: boolean
}

export const StatusComp = (props: statusComp) =>{
    return(
        <span 
        className={classJoiner("box-border px-4 py-1 rounded-full bg-dashboard-green text-sm text-white", props.status? "bg-dahsboard-green" : "bg-dashboard-red")}>
            {props.status? "Running" : "Offline"}
        </span>
    )
}