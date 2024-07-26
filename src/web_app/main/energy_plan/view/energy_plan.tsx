"use client"
import GridWrapper from "../../common/components/core/gridWrapper"
import CreatePlanLayout from "../component/layout/createPlanLayout"
import PlanLayout from "../component/layout/planLayout"

const EnergyPlan =( ) =>{
    return(
        <GridWrapper>
            <CreatePlanLayout class="row-start-1 col-start-1 col-span-4 md:col-span-12"/>
            <PlanLayout class="row-start-2 col-start-1 col-span-4 md:col-span-12"/>
        </GridWrapper>
    )
}
export default EnergyPlan