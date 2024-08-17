import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import StatusTable from "../container/statusTable"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import DataState from "@/src/web_app/main/common/components/core/dataState"
import useLoadData from "@/src/web_app/main/common/persistence/loadData"
import { setApplianceStatus } from "@/src/web_app/common/store/reducer/dashboardReducer"

type status = {
    class?: string
}

const ApplianceStatus = (props:status) =>{
    const columns = useSelector((state: RootState)=>state.dashboard.applianceStatusColName)
    const data = useSelector((state:RootState)=>state.dashboard.applianceStatus)
    const {isLoading} = useLoadData("/api/applianceStatus", setApplianceStatus, data)
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="Appliance Usage" isLoading={isLoading}/>
            <CardBody isLoading={isLoading} loadingClass="h-[200px]">
                <DataState data={data}>
                    <StatusTable columns={columns} list={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceStatus