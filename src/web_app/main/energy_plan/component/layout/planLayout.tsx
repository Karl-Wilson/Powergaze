import { classJoiner } from "@/src/common/utils/helper"
import PlanContainer from "../container/planContainer"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import DataState from "../../../common/components/core/dataState"
import useLoadData from "../../../common/persistence/loadData"
import { setEnergyPlan } from "@/src/web_app/common/store/reducer/dashboardReducer"

type layout = {
    class?:string
}

const PlanLayout = (props:layout) =>{
    let data:[] | {name?: string, isActive?: boolean}[] = useSelector((state: RootState)=>state.dashboard.energy_plan)
    let {isLoading} = useLoadData("/api/plan", setEnergyPlan, data)
    return(
        <div className={classJoiner(props.class, "grid grid-cols-1 md:grid-cols-3 gap-6")}>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <DataState data={data}>
                {data.map(plan=>{
                        return <PlanContainer title={plan.name? plan.name: ""} isActive={plan.isActive? plan.isActive : false} key={plan.name? plan.name+plan.isActive : ""}/>
                })}
            </DataState>}
        </div>
    )
}

export default PlanLayout