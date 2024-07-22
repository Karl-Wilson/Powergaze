import { classJoiner } from "@/src/common/utils/helper"
import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import CardSelect from "@/src/web_app/main/common/components/core/cardSelect"

type usage = {
    class?: string
}
const Usage = (props: usage) =>{
    let val = ["Yearly", "Monthly", "Daily"]
    return(
        <DashboardCard class={classJoiner(props.class)}>
            <CardHeader title="KWh Usage">
                <CardSelect values={val}/>
            </CardHeader>
            <CardBody>
                <div></div>
            </CardBody>
        </DashboardCard>
    )
}

export default Usage