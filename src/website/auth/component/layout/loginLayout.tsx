import Header from "../container/header";
import Form from "../container/form";
import FormLayoutWrapper from "../core/formLayoutWrapper";
import HeaderLayoutWrapper from "../core/headerLayoutWrapper";
import LayoutWrapper from "../core/layoutWrapper";
import InputGroup from "../container/inputGroup";

type loginLayout = {

}

const LoginLayout = (props: loginLayout) =>{
    const Page = "login"
    return(
        <LayoutWrapper>
            <HeaderLayoutWrapper>
                <Header title="Sign in" class="col-start-1"/>
            </HeaderLayoutWrapper>
            <FormLayoutWrapper>
                <Form class="col-start-1 md:col-start-2 md:col-span-2" page={Page}>
                    <InputGroup page={Page}/>
                </Form>
            </FormLayoutWrapper>
        </LayoutWrapper>
    )
}

export default LoginLayout;