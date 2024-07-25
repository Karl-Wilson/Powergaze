"use client"
import GridWrapper from "../../common/components/core/gridWrapper"
import ApplianceLayout from "../appliance/component/layout/applianceLayout"

const ApplianceView = () =>{
    
    return(
        <GridWrapper>
            <ApplianceLayout class="col-start-1 col-span-4 md:col-span-5"/>
        </GridWrapper>
    )
}

export default ApplianceView