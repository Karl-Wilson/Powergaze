import DashboardCard, { CardBody, CardHeader } from "@/src/web_app/main/common/components/core/card"
import FormContainer from "../container/formContainer"
import {useCreatePlan} from "@/src/web_app/common/hooks/settings"
import { MouseEventHandler } from "react"

export type formLayout = {
    title: string
    data?: any
    submit: MouseEventHandler
    submitLabel: string
    closeBtn: MouseEventHandler
}
const FormLayout = (props: formLayout) =>{
    return(
        <DashboardCard class="md:w-96">
            <CardHeader title={props.title}>
                <img src="../close.svg" className="cursor-pointer" onClick={props.closeBtn}/>
            </CardHeader>
            <CardBody>
                <FormContainer submitLabel={props.submitLabel} submit={props.submit} data={props.data}/>
            </CardBody>
        </DashboardCard>
    )
}

export default FormLayout