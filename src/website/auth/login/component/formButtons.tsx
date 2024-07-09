import Button from "@/src/common/components/core/button"
import { classJoiner } from "@/src/common/utils/helper"

type formButtons = {
    class?: string
    createAccount?: React.MouseEventHandler
    submitAccount?: React.MouseEventHandler
}

const FormButtons = (props: formButtons) =>{
    return(
        <div className={classJoiner("flex flex-row items-center w-full", props.class)}>
            <Button label="Create Account" 
                text={{textColor: "md:text-neutral-800 md:hover:text-btnColor"}} 
                outline={{borderColor: "border-btnColor", borderWidth: "border md:border-0", textColor: "text-btnColor"}}
                class="font-bold md:mr-4 w-full md:w-auto" click={props.createAccount}/>
    
            <Button label="Next" 
                filled={{bgColor: "bg-btnColor hover: bg-btnColor-dark", textColor: "text-color"}} 
                class="font-bold w-full md:w-auto" click={props.submitAccount}/>
        </div>
    )
}

export default FormButtons