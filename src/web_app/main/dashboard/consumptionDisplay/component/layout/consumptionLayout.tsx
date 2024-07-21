import { useSelector } from "react-redux"
import DashboardCard from "../../../../common/components/core/card"
import ConsumptionContainer from "../container/consumptionContainer"
import TabContainer from "../container/tabContainer"
import { useState } from "react"
import { RootState } from "@/src/web_app/common/store/store"

const ConsumptionLayout = () =>{
    const consumptionData = useSelector((state:RootState)=>state.dashboard.consumption)
    let tabs = ["today", "Yesterday", "Total"]
    let [labelClicked, setLabelClicked] = useState(tabs[0])
    let [data, setData] = useState({})


    const click = (label:string) =>{
        setLabelClicked(label)
        if(label == tabs[0]){
            setData(consumptionData.today)
        }else if(label == tabs[1]){
            setData(consumptionData.yesterday)
        }else{
            setData(consumptionData.total)
        }
    }


    return(
        <DashboardCard>
            <TabContainer click={click} labelClicked={labelClicked} tabs={tabs}/>
            <ConsumptionContainer data={data}/>
        </DashboardCard>
    )
}
export default ConsumptionLayout