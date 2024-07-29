import Input from "@/src/common/components/core/form/input"

export const EnergyInput = () =>{
    return(
        <div className="flex flex-row">
            <Input label="Unit" name="unit" type="text" inputType="default" theme={{bgColor: "bg-white"}}>
                <div className="bg-neutral-300 h-full w-16 rounded-r-xl flex flex-row justify-center items-center p-6 box-border">Unit</div>
            </Input>
        </div>
    )
}

export const CostInput = () =>{
    return(
        <div className="flex flex-row">
            <Input label="Cost" name="cost" type="text" inputType="default" theme={{bgColor: "bg-white"}}>
                <div className="bg-neutral-300 h-full w-16 rounded-r-xl flex flex-row justify-center items-center p-6 box-border">Cost</div>
            </Input>
        </div>
    )
}