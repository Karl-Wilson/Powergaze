import Button from "@/src/common/components/core/button"
import { classJoiner } from "@/src/common/utils/helper"

type formButtons = {
    class?: string
    submitAccount?: React.MouseEventHandler
}

const FormButtons = (props: formButtons) =>{
    return(
        <div className={classJoiner("flex flex-row items-center justify-content w-full", props.class)}>
            <Button label="Next" 
                filled={{bgColor: "bg-btnColor hover: bg-btnColor-dark", textColor: "text-color"}} 
                class="font-bold w-full md:w-auto" click={props.submitAccount}/>
        </div>
    )
}

export default FormButtons