import List from "@/src/common/components/core/list"
import Switch from "@/src/common/components/core/switch"
import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import ApplianceList from "../container/applianceList"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"

type layout = {
    class?: string
}
const ApplianceLayout = (props: layout) =>{
    const data = useSelector((state:RootState)=>state.dashboard.applianceStatus)
    const action = () =>{}
    return(
        <DashboardCard class={props.class}>
            <CardHeader title="Appliance"/>
            <CardBody class="overflow-hidden hover:overflow-auto max-h-64">
                <ApplianceList list={data} action={action}/>
            </CardBody>
        </DashboardCard>
    )
}

export default ApplianceLayout