import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "../../../common/components/core/card"
import PlanBody from "../core/planBody"
import PlanMenu from "../core/planMenu"
import {useUpdatePlan} from "@/src/web_app/common/hooks/settings"
import { MouseEventHandler } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import { setEnergyPlan } from "@/src/web_app/common/store/reducer/dashboardReducer"

type container = {
    title: string
    isActive: boolean
    class?: string
}
const PlanContainer = (props: container) =>{
    const {setUpdatePlanVisibility} = useUpdatePlan()
    const energy_plan = useSelector((state: RootState)=>state.dashboard.energy_plan)
    const dispatch = useDispatch()
    const click = () =>{
        //originally, this should change activate or deactivate in server
        const plans:any = [...energy_plan];
        let newPlans = []
       for(let i=0; i<plans.length;i++){
            let plan:any = plans[i]
            let {...data} = plan
            if(data.name == props.title){
                if(data.isActive == true){
                    data.isActive = false
                }else{
                    data.isActive = true
                }
            }
            plans[i] = data 
        }
        dispatch(setEnergyPlan(plans))
    }
    return(
        <DashboardCard class={classJoiner(props.class, "grid grid-cols-1")}>
            <CardHeader title={props.title} class="mb-auto font-bold row-start-1"><PlanMenu click={()=>setUpdatePlanVisibility(true)}/></CardHeader>
            <CardBody class="flex flex-col justify-end row-start-2">
                <PlanBody isActive={props.isActive} click={click}/>
            </CardBody>
        </DashboardCard>
    )
}

export default PlanContainer