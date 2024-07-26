import Button from "@/src/common/components/core/button"
import { MouseEventHandler } from "react"

type bodyText = {
    isActive: boolean
    click?: MouseEventHandler
}
const PlanBody = (props: bodyText) =>{
    const btnLabel = () =>{
        if(props.isActive) return "Deactivate" 
        return "Activate"
    }
    const btnColor = () => {
        if(props.isActive){
            return {bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}
        }
        return {bgColor: "bg-neutral-300 hover:bg-neutral-500", textColor: "text-neutral-800 hover:text-white"}
    }
    return(
        <>
            <div className="w-full">
                <p className={props.isActive?"text-dashboard-green":"text-neutral-400"}>{props.isActive? "Active": "Inactive"}</p>
            </div>
            <div className="flex flex-row justify-end">
                <Button label={btnLabel()} filled={btnColor()} click={props.click} class="font-bold text-sm"/>
            </div>
        </>
    )

}

export default PlanBody