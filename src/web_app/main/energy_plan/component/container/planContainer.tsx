import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "../../../common/components/core/card"
import PlanBody from "../core/planBody"
import PlanMenu from "../core/planMenu"

type container = {
    title: string
    isActive: boolean
    class?: string
}
const PlanContainer = (props: container) =>{
    return(
        <DashboardCard class={classJoiner(props.class, "grid grid-cols-1")}>
            <CardHeader title={props.title} class="mb-auto font-bold row-start-1"><PlanMenu/></CardHeader>
            <CardBody class="flex flex-col justify-end row-start-2">
                <PlanBody isActive={props.isActive}/>
            </CardBody>
        </DashboardCard>
    )
}

export default PlanContainer