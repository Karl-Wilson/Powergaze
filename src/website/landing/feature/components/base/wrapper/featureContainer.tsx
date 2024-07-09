import { classJoiner } from "@/src/common/utils/helper"

type containerWrapper = {
    children: React.ReactNode
}

const ContainerWrapper = (props: containerWrapper) =>{
    return(
        <div className={classJoiner("grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-0", "text-white")}>
            {props.children}
        </div>
    )
}

export default ContainerWrapper