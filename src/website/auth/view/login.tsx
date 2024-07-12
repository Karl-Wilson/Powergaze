import LoginLayout from "../component/layout/loginLayout"
import AuthSectionWrapper from "../component/core/sectionWrapper"

type login = {

}

const LoginPage = (props: login) =>{
    return(
        <AuthSectionWrapper>
            <LoginLayout/>
        </AuthSectionWrapper>
    )
}

export default LoginPage