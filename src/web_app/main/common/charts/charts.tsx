import { GoogleBarChart, GooglePieChart, GoogleAreaChart } from "./googleCharts"

export type chart = {
    data: {} | any[]
    title?: string
    subTitle?: string
}
export const BarChart = (props: chart) =>{
    return(
        <GoogleBarChart data={props.data} title={props.title} subTitle={props.subTitle}/>
    )
}
export const PieChart = (props: chart) =>{
    return(
        <GooglePieChart data={props.data}/>
    )
}
export const AreaChart = (props: chart) =>{
    return(
        <GoogleAreaChart data={props.data}/>
    )
}