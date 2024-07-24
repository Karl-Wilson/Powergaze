import { Cell, ColCell, Head, Row } from "@/src/common/components/core/table"

type header = {
    class?: string
    columns: string[]
    rowClass?: string
    colClass?: string
}
const TableHeader = (props: header) =>{
    return(
        <Head classes={props.class}>
            <Row classes={props.rowClass}>
                {props.columns.map(cols=>{
                    return <ColCell key={cols+Math.random()} classes={props.colClass}>{cols}</ColCell>
                })}
            </Row>
        </Head>
    )
}
export default TableHeader