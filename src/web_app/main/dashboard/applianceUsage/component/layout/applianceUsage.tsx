import { RootState } from "@/src/web_app/common/store/store"
import { PieChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import DataState from "@/src/web_app/main/common/components/core/dataState"
import { useSelector } from "react-redux"

type usage = {
    class?: string
}
const ApplianceUsage = (props: usage) =>{
    let data: any[] = useSelector((state: RootState)=>state.dashboard.applianceUsage)
    return(
        <DashboardCard class={props.class}>
            <CardHeader title="Appliance Usage"/>
            <CardBody>
                <DataState data={data}>
                    <PieChart data={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceUsage