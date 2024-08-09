import { classJoiner } from "@/src/common/utils/helper"
import { AreaChart, BarChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import CardSelect from "@/src/web_app/main/common/components/core/cardSelect"
import DataState from "@/src/web_app/main/common/components/core/dataState"

type usage = {
    class?: string
}
const Usage = (props: usage) =>{
    let val = ["Yearly", "Monthly", "Daily"]
    let data: any[] = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ];
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="KWh Usage">
                <CardSelect values={val}/>
            </CardHeader>
            <CardBody>
                <DataState data={data}>
                    <AreaChart data={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default Usage