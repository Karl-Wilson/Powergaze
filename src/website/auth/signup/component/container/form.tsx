import Input from "@/src/common/components/core/form/input"
import FormButtons from "./formButtons"

type form = {

}

const Form  = (props: form) =>{
    return(
        <form>
            <div>
                <Input  name="Email" type="text" label="Email" inputType="default"/>
                <Input  name="Passowrd" type="password" label="Password" inputType="default"/>
                <Input  name="Confirm Pass" type="password" label="Confirm Password" inputType="default"/> 
            </div>
            <FormButtons/>
        </form>
    )
}

export default Form