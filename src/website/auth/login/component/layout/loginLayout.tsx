import Header from "../../../common/component/container/header";
import FormLayoutWrapper from "../../../common/component/core/formLayoutWrapper";
import HeaderLayoutWrapper from "../../../common/component/core/headerLayoutWrapper";
import LayoutWrapper from "../../../common/component/core/layoutWrapper";
import Form from "../containers/form";

type loginLayout = {

}

const LoginLayout = (props: loginLayout) =>{
    return(
        <LayoutWrapper>
            <HeaderLayoutWrapper>
                <Header title="Sign in" class="col-start-1"/>
            </HeaderLayoutWrapper>
            <FormLayoutWrapper>
                <Form class="col-start-2 col-span-2"/>
            </FormLayoutWrapper>
        </LayoutWrapper>
    )
}

export default LoginLayout;