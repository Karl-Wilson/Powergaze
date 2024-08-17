import { classJoiner } from "@/src/common/utils/helper"
import useCardSelection from "@/src/web_app/common/hooks/cardSelection"
import { setUsage } from "@/src/web_app/common/store/reducer/dashboardReducer"
import { RootState } from "@/src/web_app/common/store/store"
import { AreaChart, BarChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import CardSelect from "@/src/web_app/main/common/components/core/cardSelect"
import DataState from "@/src/web_app/main/common/components/core/dataState"
import useLoadData from "@/src/web_app/main/common/persistence/loadData"
import { useSelector } from "react-redux"

type usage = {
    class?: string
}
const Usage = (props: usage) =>{
    let dataMain = useSelector((state: RootState)=>state.dashboard.usage)
    let options = ["Yearly", "Monthly", "Daily"]
    let {change, data, selection} = useCardSelection(dataMain, options)
    let {isLoading} = useLoadData("/api/usage", setUsage, data)
    

      
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="KWh Usage" isLoading={isLoading}>
                <CardSelect values={options} change={change} default={selection}/>
            </CardHeader>
            <CardBody isLoading={isLoading} loadingClass="h-[200px]">
                <DataState data={data}>
                    <AreaChart data={data}/>
                </DataState>
            </CardBody>
        </DashboardCard>
    )
}

export default Usage