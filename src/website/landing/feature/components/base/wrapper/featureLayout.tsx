import { LegacyRef } from "react"


type layoutWrapper = {
    children: React.ReactNode
    layoutRef?: LegacyRef<HTMLDivElement>
}

const LayoutWrapper = (props: layoutWrapper) =>{
    return(
        <div className="px-6 xl:px-24 box-border py-10 md:py-16" ref={props.layoutRef}>
            {props.children}
        </div>
    )
}

export default LayoutWrapper