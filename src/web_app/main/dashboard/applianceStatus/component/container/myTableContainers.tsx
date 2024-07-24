import useCurrencyConverter from "@/src/common/utils/hooks/cuurrencyConverter"
import { Row, TBody, Col, THead } from "../core/myTable"
import { StatusComp } from "../core/components"

type tableBody = {
    list: {name: string, status: boolean, usage: number, cost: number}[]
}
export const TableBody = (props: tableBody) =>{
    const {converter, exchangeRate, dashboardCurrency} = useCurrencyConverter()
    return(
        <TBody classes="max-h-48 overflow-auto">
            {props.list.map(item=>{
                return (
                <Row key={item.cost+item.name+item.cost} classes="border-t border-neutral-300">
                    <Col classes="w-full">{item.name}</Col>
                    <Col classes="w-full"><StatusComp status={item.status}/></Col>
                    <Col classes="w-full">{item.usage}</Col>
                    <Col classes="w-full">{exchangeRate[dashboardCurrency as keyof typeof exchangeRate].symbol}{converter(item.cost)}</Col>
                </Row>
            )
            })}

        </TBody>
    )
}

type tableHead = {
    column: string[]
}
export const TableHead = (props: tableHead) =>{
    return(
        <THead classes="bg-dashboard-primary text-white font-bold text-lg">
            <Row>
                {props.column.map(item=>{
                    return (
                        <Col key={item+Math.random()} classes="w-full">{item}</Col>
                )
                })} 
            </Row>
            

        </THead>
    )
}