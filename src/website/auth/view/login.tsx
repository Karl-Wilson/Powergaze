import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import LoginLayout from "../component/layout/loginLayout"

type login = {

}

const LoginPage = (props: login) =>{
    return(
        <SectionWrapper maxWidth="max-w-[987px]" wrapperClass="h-screen flex flex-col justify-center" innerClass="xl:px-0 mx-0 md:mx-auto w-screen md:w-auto h-screen md:h-auto">
            <LoginLayout/>
        </SectionWrapper>
    )
}

export default LoginPage