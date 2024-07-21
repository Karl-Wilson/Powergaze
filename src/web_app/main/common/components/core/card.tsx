import { ReactNode } from "react"
import Card from "@/src/common/components/core/card"

type card = {
    children: ReactNode,
}
const DashboardCard = (props: card) =>{
    return(
        <Card width="inline-block sm:w-full" shadow="shadow" filled="bg-white" outline="border border-gray-300 border-solid">
            {props.children}
        </Card>
    )
}

export default DashboardCard;