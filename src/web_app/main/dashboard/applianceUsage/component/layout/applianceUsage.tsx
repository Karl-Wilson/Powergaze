import { setApplianceUsage } from "@/src/web_app/common/store/reducer/dashboardReducer"
import { RootState } from "@/src/web_app/common/store/store"
import { PieChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import DataState from "@/src/web_app/main/common/components/core/dataState"
import useLoadData from "@/src/web_app/main/common/persistence/loadData"
import { useSelector } from "react-redux"

type usage = {
    class?: string
}
const ApplianceUsage = (props: usage) =>{
    let data: any[] = useSelector((state: RootState)=>state.dashboard.applianceUsage)
    const {isLoading} = useLoadData("/api/categoryUsage", setApplianceUsage, data)
    return(
        <DashboardCard class={props.class}>
            <CardHeader title="Appliance Usage" isLoading={isLoading}/>
            <CardBody isLoading={isLoading} loadingClass="h-[200px]">
                <DataState data={data}>
                    <PieChart data={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceUsage