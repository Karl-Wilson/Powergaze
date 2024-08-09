import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import StatusTable from "../container/statusTable"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import DataState from "@/src/web_app/main/common/components/core/dataState"

type status = {
    class?: string
}

const ApplianceStatus = (props:status) =>{
    const columns = useSelector((state: RootState)=>state.dashboard.applianceStatusColName)
    const data = useSelector((state:RootState)=>state.dashboard.applianceStatus)
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="Appliance Usage"/>
            <CardBody>
                <DataState data={data}>
                    <StatusTable columns={columns} list={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceStatus