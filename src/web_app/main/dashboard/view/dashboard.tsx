import GridWrapper from "../../common/components/core/gridWrapper"
import ApplianceStatus from "../applianceStatus/component/layout/applianceStatus"
import ApplianceUsage from "../applianceUsage/component/layout/applianceUsage"
import ConsumptionLayout from "../consumptionDisplay/component/layout/consumptionLayout"
import Usage from "../usage/component/layout/usage"

const Dashboard = () =>{
    return(
        <GridWrapper>
            <ConsumptionLayout class="col-start-1 col-span-4 md:col-span-12 row-start-1"/>
            <Usage class="row-start-2 col-start-1 col-span-4 md:col-span-7"/>
            <ApplianceUsage class="row-start-3 col-start-1 col-span-4 md:row-start-2 md:col-start-8 md:col-span-5"/>
            <ApplianceStatus class="row-start-4 col-start-1 col-span-4 md:row-start-3 md:col-span-12"/>
        </GridWrapper>
    )
}

export default Dashboard