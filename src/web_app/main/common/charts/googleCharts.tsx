import Chart from "react-google-charts"
import { chart } from "./charts"

export const GoogleBarChart = (props: chart) =>{
    const options = {
          title: props.title,
          subtitle: props.subTitle? props.subTitle : "",
      };
    return(
        <Chart chartType="Bar" data={props.data} options={options} width="100%" height="100%"/>
    )
}

export const GooglePieChart = (props: chart) =>{
    const options = {
        title: props.title,
        pieHole: 0.4,
        is3D: false,
      };
    return(
        <Chart chartType="PieChart" data={props.data} options={options} width="100%" height="100%"/>
    )
}

export const GoogleAreaChart = (props: chart) =>{
    const options = {
        hAxis: { title: "year" },
        vAxis: { minValue: 20 },
        colors: ["#8B3DB4","#FF6E91", "#49CCFD"],
      };
    return(
        <Chart chartType="AreaChart" data={props.data} options={options} width="100%" height="100%"/>
    )
}