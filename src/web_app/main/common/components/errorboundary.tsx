import ErrorBoundary from "@/src/common/components/core/errorboundry"
import DashboardCard from "./core/card"

type boundary = {
    children: React.ReactNode
    class: string
}


const DashboardFallback = (props:{class: string}) =>{
    return(
        <DashboardCard class={props.class}>
            <p>Something went wrong.</p>
        </DashboardCard>
    )
}
export const DashboardBoundry = (props: boundary) =>{
    return(
        <ErrorBoundary fallback={<DashboardFallback class={props.class}/>}>
            {props.children}
        </ErrorBoundary>
    )
}

export const PlanBoundry = (props: boundary) =>{
    return(
        <ErrorBoundary fallback={<p className={props.class}>Something went wrong</p>}>
            {props.children}
        </ErrorBoundary>
    )
}