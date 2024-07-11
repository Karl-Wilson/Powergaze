import Header from "../../../common/component/container/header";
import Form from "../../../common/component/core/form";
import FormLayoutWrapper from "../../../common/component/core/formLayoutWrapper";
import HeaderLayoutWrapper from "../../../common/component/core/headerLayoutWrapper";
import LayoutWrapper from "../../../common/component/core/layoutWrapper";
import InputGroup from "../../../common/component/container/inputGroup";

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