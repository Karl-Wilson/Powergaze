import { classJoiner } from "@/src/common/utils/helper"
type cell = {
    children: React.ReactNode
    classes?: string
}

export const Cell = ({children, classes, ...props}: cell) =>{
    return(
        <td className={classes} {...props}>
            {children}
        </td>
    )
}

type colCell = {
    children: React.ReactNode
    classes?: string
}

export const ColCell = ({children, classes, ...props}: colCell) =>{
    return(
        <th className={classes} {...props}>
            {children}
        </th>
    )
}

type row = {
    children: React.ReactNode
    classes?: string
}

export const Row = ({children, classes, ...props}: row) =>{
    return(
        <tr className={classes} {...props}>
            {children}
        </tr>
    )
}

type header = {
    children: React.ReactNode
    classes?: string
}

export const Head = ({children, classes, ...props}: header) =>{
    return(
        <thead className={classes} {...props}>
            {children}
        </thead>
    )
}

type body = {
    children: React.ReactNode
    classes?: string
}

export const Body = ({children, classes, ...props}: body) =>{
    return(
        <tbody className={classes} {...props}>
            {children}
        </tbody>
    )
}


type table = {
    children: React.ReactNode
    classes?: string
}
const Table = ({children, classes, ...props}:table) =>{
    return(
        <table className={classes} {...props}>
            {children}
        </table>
    )
}


export default Table