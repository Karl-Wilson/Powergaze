import List from "@/src/common/components/core/list"
import Switch from "@/src/common/components/core/switch"
import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import ApplianceList from "../container/applianceList"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import useLoadData from "@/src/web_app/main/common/persistence/loadData"
import { setApplianceStatus } from "@/src/web_app/common/store/reducer/dashboardReducer"
import DataState from "@/src/web_app/main/common/components/core/dataState"

type layout = {
    class?: string
}
const ApplianceLayout = (props: layout) =>{
    const data = useSelector((state:RootState)=>state.dashboard.applianceStatus)
    const {isLoading} = useLoadData("/api/applianceStatus", setApplianceStatus)

    return(
        <DashboardCard class={props.class}>
            <CardHeader title="Appliance" isLoading={isLoading}/>
            <CardBody class="overflow-hidden hover:overflow-auto max-h-64" isLoading={isLoading} loadingClass="h-[200px]">
                <DataState data={data}>
                    <ApplianceList list={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceLayout