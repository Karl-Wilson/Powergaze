import { Body, Cell, Row } from "@/src/common/components/core/table"
import { StatusComp } from "./components"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import { currencyConverter } from "@/src/common/utils/helper"
import useCurrencyConverter from "@/src/common/utils/hooks/cuurrencyConverter"
export type TableBody = {
    list: {name: string, status: boolean, usage: number, cost: number}[]
    class?: string
    rowClass?: string
    cellClass?: string
    statusClass?:string
}
const TableBody = (props: TableBody) =>{
    let {converter, exchangeRate, dashboardCurrency} = useCurrencyConverter()

    return(
        <Body classes={props.class}>
            {props.list.map(list=>{
                return(
                    <Row key={list.cost+list.name+list.usage+list.cost} classes={props.rowClass}>
                        <Cell classes={props.cellClass}>{list.name}</Cell>
                        <Cell classes={props.cellClass}><StatusComp status={list.status}/></Cell>
                        <Cell classes={props.cellClass}>{list.usage}</Cell>
                        <Cell classes={props.cellClass}>{exchangeRate[dashboardCurrency as keyof typeof exchangeRate].symbol}{converter(list.cost)}</Cell>
                    </Row>
                )
            })}
        </Body>
    )
}

export default TableBody