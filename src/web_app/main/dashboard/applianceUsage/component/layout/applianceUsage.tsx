import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"

type usage = {
    class?: string
}
const ApplianceUsage = (props: usage) =>{
    return(
        <DashboardCard class={props.class}>
            <CardHeader title="Appliance Usage"/>
            <CardBody><div></div></CardBody>
        </DashboardCard>
    )
}

export default ApplianceUsage