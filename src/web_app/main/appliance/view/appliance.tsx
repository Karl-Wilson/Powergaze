"use client"
import GridWrapper from "../../common/components/core/gridWrapper"
import { DashboardBoundry } from "../../common/components/errorboundary"
import ApplianceLayout from "../appliance/component/layout/applianceLayout"

const ApplianceView = () =>{
    
    return(
        <GridWrapper>
            <DashboardBoundry class="col-start-1 col-span-4 md:col-span-5"><ApplianceLayout class="col-start-1 col-span-4 md:col-span-5"/></DashboardBoundry>
        </GridWrapper>
    )
}

export default ApplianceView