import Header from "../container/header";
import Form from "../container/form";
import FormLayoutWrapper from "../core/formLayoutWrapper";
import HeaderLayoutWrapper from "../core/headerLayoutWrapper";
import LayoutWrapper from "../core/layoutWrapper";
import InputGroup from "../container/inputGroup";
import useSignup from "../../persistence/signup";
import ErrorMsg from "../core/errorMsg";

type signupLayout = {

}

const SignupLayout = (props: signupLayout) =>{
    const Page = "signup"
    const {error, submit, change} = useSignup()

    return(
        <LayoutWrapper>
            <HeaderLayoutWrapper>
                <Header title="Signup" class="col-start-1"/>
            </HeaderLayoutWrapper>
            <FormLayoutWrapper>
                <Form class="col-start-1 md:col-start-2 md:col-span-2" page={Page} submit={submit}>
                {error && <ErrorMsg error={error} class="mb-6"/>}
                    <InputGroup page={Page} error={error} change={change}/>
                </Form>
            </FormLayoutWrapper>
        </LayoutWrapper>
    )
}

export default SignupLayout;