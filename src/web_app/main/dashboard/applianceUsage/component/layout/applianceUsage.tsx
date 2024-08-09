import { PieChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import DataState from "@/src/web_app/main/common/components/core/dataState"

type usage = {
    class?: string
}
const ApplianceUsage = (props: usage) =>{
    let data: any[] = [
        ["Task", "Hours per Day"],
        ["Laptop", 11],
        ["Television", 2],
        ["Bulbs", 2],
        ["Refrigerator TV", 2],
        ["Washer", 7],
    ]
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