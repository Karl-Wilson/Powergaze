"use client"
import { useCreatePlan, useUpdatePlan } from "@/src/web_app/common/hooks/settings"
import GridWrapper from "../../common/components/core/gridWrapper"
import CreatePlanLayout from "../component/layout/createPlanLayout"
import PlanLayout from "../component/layout/planLayout"
import Settings from "../../settings/view/settings"

const EnergyPlan =( ) =>{
    const {isCreatePlan, setCreatePlanVisibility} = useCreatePlan()
    const {isUpdatePlan, setUpdatePlanVisibility} = useUpdatePlan()
    const click = () =>{

    }
    return(
        <>
            <GridWrapper>
                <CreatePlanLayout class="row-start-1 col-start-1 col-span-4 md:col-span-12"/>
                <PlanLayout class="row-start-2 col-start-1 col-span-4 md:col-span-12"/>
            </GridWrapper> 
            {isCreatePlan && <Settings title="Create Plan" submit={click} submitLabel="Create" closeBtn={()=>setCreatePlanVisibility(false)}/>}
            {isUpdatePlan && <Settings title="Update" submit={click} submitLabel="Update" closeBtn={()=>setUpdatePlanVisibility(false)}/>}
        </>
               
    )
}
export default EnergyPlan