import { useSelector } from "react-redux"
import DashboardCard from "../../../../common/components/core/card"
import ConsumptionContainer from "../container/consumptionContainer"
import TabContainer from "../container/tabContainer"
import { useState } from "react"
import { RootState } from "@/src/web_app/common/store/store"

type layout = {
    class?: string
}
const ConsumptionLayout = (props: layout) =>{
    const consumptionData = useSelector((state:RootState)=>state.dashboard.consumption)
    let tabs = ["Today", "Yesterday", "Total"]
    let [labelClicked, setLabelClicked] = useState(tabs[0])
    let [data, setData] = useState(consumptionData[labelClicked as keyof typeof consumptionData])


    const click = (label:string) =>{
        setLabelClicked(label)
        if(label == tabs[0]){
            setData(consumptionData.Today)
        }else if(label == tabs[1]){
            setData(consumptionData.Yesterday)
        }else{
            setData(consumptionData.Total)
        }
    }


    return(
        <DashboardCard class={props.class}>
            <TabContainer click={click} labelClicked={labelClicked} tabs={tabs}/>
            <ConsumptionContainer data={data}/>
        </DashboardCard>
    )
}
export default ConsumptionLayout