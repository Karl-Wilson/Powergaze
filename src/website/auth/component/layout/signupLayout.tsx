import Header from "../container/header";
import Form from "../core/form";
import FormLayoutWrapper from "../core/formLayoutWrapper";
import HeaderLayoutWrapper from "../core/headerLayoutWrapper";
import LayoutWrapper from "../core/layoutWrapper";
import InputGroup from "../container/inputGroup";

type signupLayout = {

}

const SignupLayout = (props: signupLayout) =>{
    const Page = "signup"
    return(
        <LayoutWrapper>
            <HeaderLayoutWrapper>
                <Header title="Signup" class="col-start-1"/>
            </HeaderLayoutWrapper>
            <FormLayoutWrapper>
                <Form class="col-start-1 md:col-start-2 md:col-span-2" page={Page}>
                    <InputGroup page={Page}/>
                </Form>
            </FormLayoutWrapper>
        </LayoutWrapper>
    )
}

export default SignupLayout;