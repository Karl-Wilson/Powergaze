import Button from "@/src/common/components/core/button"
import { classJoiner } from "@/src/common/utils/helper"
import {useCreatePlan} from "@/src/web_app/common/hooks/settings"

type createPlan = {
    class?: string
}
const CreatePlanLayout = (props: createPlan) =>{
    const {setCreatePlanVisibility} = useCreatePlan()
    return(
        <div className={classJoiner(props.class, "flex flex-row justify-end mb-6")}>
            <Button label="Create Plan" icon="../add.svg" filled={{bgColor:"bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}} click={()=>setCreatePlanVisibility(true)}/>
        </div>
    )
}
export default CreatePlanLayout