import { classJoiner } from "@/src/common/utils/helper"

type myTable = {
    children: React.ReactNode
    classes?: string
}
export const Row = ({children, classes, ...props}: myTable) =>{
    return(
        <div className={classJoiner(classes, "flex flex-row box-border")} {...props}>
            {children}
        </div>
    )
}

export const Col = ({children, classes, ...props}: myTable) =>{
    return(
        <div className={classJoiner(classes, "p-3 box-border")} {...props}>
            {children}
        </div>
    )
}

export const Table = ({children, classes, ...props}: myTable) =>{
    return(
        <div className={classJoiner(classes, "box-border")} {...props}>
            {children}
        </div>
    )
}

export const THead = ({children, classes, ...props}: myTable) =>{
    return(
        <div className={classJoiner(classes, "box-border")} {...props}>
            {children}
        </div>
    )
}
export const TBody = ({children, classes, ...props}: myTable) =>{
    return(
        <div className={classJoiner(classes, "box-border")} {...props}>
            {children}
        </div>
    )
}