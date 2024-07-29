import Input, { SelectForm } from "@/src/common/components/core/form/input"
import { CostInput, EnergyInput } from "../core/settingsInput"
import Button from "@/src/common/components/core/button"
import { MouseEventHandler } from "react"

type formContainer = {
    submitLabel: string
    submit: MouseEventHandler
    data?: any
}
const FormContainer = (props: formContainer) =>{
    let theme = {bgColor: "bg-white", textColor: "text-neutral-600", borderWidth: "border", borderColor: "border-neutral-300"}
    return(
        <form className="flex flex-col">
             <Input label="Name" name="name" type="text" inputType="default" theme={theme} class="mb-4"/>            
             <div className="flex flex-row mb-4">
                <div className="flex flex-row mr-4">
                    <Input label="Unit" name="unit" type="text" inputType="" theme={theme}>
                        <div className="bg-neutral-300 h-full w-16 rounded-r-xl flex flex-row justify-center items-center p-6 box-border">Unit</div>
                    </Input>
                </div>
                <div className="flex flex-row">
                    <Input label="Cost" name="cost" type="text" inputType="" theme={theme}>
                        <div className="bg-neutral-300 h-full w-16 rounded-r-xl flex flex-row justify-center items-center p-6 box-border">Cost</div>
                    </Input>
                </div>
            </div>
            <Input label="Date" name="date" type="text" inputType="" theme={theme} class="mb-4" icon="../calender.svg"/>
            <Input label="Time" name="time" type="text" inputType="" theme={theme} class="mb-4" icon="../schedule.svg"/>
            <SelectForm label="Action" name="action" type="text" values={["Turn off Everything"]} theme={theme} class="mb-4"/>
            <div className="flex flex-row justify-end">
                <Button label={props.submitLabel} filled={{bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}} click={props.submit}/>
            </div>
            
        </form>
    )
}

export default FormContainer