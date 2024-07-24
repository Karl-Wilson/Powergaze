
import TableHeader from "../core/tableHeader"
//import TableBody from "../core/tableBody"
import { classJoiner } from "@/src/common/utils/helper"
import { lato } from "@/src/common/utils/fonts"
import { Table } from "../core/myTable"
import { TableHead, TableBody } from "./myTableContainers"

type table = {
    columns: string[] | []
    list: {name: string, status: boolean, usage: number, cost: number}[] | []
}
const StatusTable = (props:table) =>{

    return (
        // <Table classes={classJoiner("w-full border-separate border-spacing-0 rounded-xl overflow-hidden  border border-neutral-300", lato.className)}>
        //     <TableHeader columns={props.columns} class="bg-dashboard-primary text-white border-0 block" rowClass="text-left " colClass="p-2 w-[calc(100%/12)]"/>
        //     <TableBody list={props.list} class="bg-white h-[100px] overflow-auto w-full box-border block" rowClass="" cellClass="border-t border-t-neutral-300 p-2 w-[calc(100%/12)]"/>
        // </Table>
        <Table classes={classJoiner("border border-neutral-300 rounded-xl overflow-hidden", lato.className)}>
            <TableHead column={props.columns}/>
            <TableBody list={props.list}/>
        </Table>

    )
}

export default StatusTable