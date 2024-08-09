import { classJoiner } from "@/src/common/utils/helper"
import useCardSelection from "@/src/web_app/common/hooks/cardSelection"
import { AreaChart, BarChart } from "@/src/web_app/main/common/charts/charts"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import CardSelect from "@/src/web_app/main/common/components/core/cardSelect"
import DataState from "@/src/web_app/main/common/components/core/dataState"
import { SyntheticEvent, useEffect, useState } from "react"

type usage = {
    class?: string
}
const Usage = (props: usage) =>{
    let dataMain = {Yearly: [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ], Monthly: [
        ["Monthly", "Sales", "Expenses"],
        ["Jan", 1000, 400],
        ["Feb", 1170, 460],
        ["Mar", 660, 1120],
        ["Apr", 1030, 540],
      ], Daily: [
        ["Daily", "Sales", "Expenses"],
        ["1", 1000, 400],
        ["2", 1170, 460],
        ["3", 660, 1120],
        ["4", 1030, 540],
      ]}
    let options = ["Yearly", "Monthly", "Daily"]
    let {change, data, selection} = useCardSelection(dataMain, options)

      
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="KWh Usage">
                <CardSelect values={options} change={change} default={selection}/>
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