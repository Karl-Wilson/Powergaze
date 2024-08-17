import { useSelector } from "react-redux"
import DashboardCard from "../../../../common/components/core/card"
import ConsumptionContainer from "../container/consumptionContainer"
import TabContainer from "../container/tabContainer"
import { useEffect, useState } from "react"
import { RootState } from "@/src/web_app/common/store/store"
import useLoadData from "../../../../common/persistence/loadData"
import LayoutLoading from "../core/loading"
import { setConsumption } from "@/src/web_app/common/store/reducer/dashboardReducer"



type layout = {
    class?: string
}
const ConsumptionLayout = (props: layout) =>{
    const consumptionData = useSelector((state:RootState)=>state.dashboard.consumption)
    let tabs = ["Today", "Yesterday", "Total"]
    let [labelClicked, setLabelClicked] = useState(tabs[0])
    let [data, setData] = useState(consumptionData[labelClicked as keyof typeof consumptionData])
    let {isLoading} = useLoadData("/api/consumption", setConsumption, data)
    useEffect(()=>{
        setData(consumptionData.Today)
    }, [consumptionData])

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
            {isLoading && <LayoutLoading/>}
            {!isLoading && <>
                <TabContainer click={click} labelClicked={labelClicked} tabs={tabs}/>
                <ConsumptionContainer data={data}/>
            </>}
            
        </DashboardCard>
    )
}
export default ConsumptionLayout