import Input from "@/src/common/components/core/form/input"
import Link from "next/link"
import FormButtons from "./formButtons"

type form = {

}

const Form  = (props: form) =>{
    return(
        <form>
            <div>
                <Input  name="Email" type="text" label="Email" inputType="default"/>
                <Input  name="Passowrd" type="password" label="Password" inputType="default"/>
                <Link href="/reset" className="">Forget Email or Password</Link>
            </div>
            <FormButtons/>
        </form>
    )
}

export default Form