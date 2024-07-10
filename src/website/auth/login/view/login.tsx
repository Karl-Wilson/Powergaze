import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import LoginLayout from "../component/layout/loginLayout"

type login = {

}

const Login = (props: login) =>{
    return(
        <SectionWrapper maxWidth="max-w-[987px]" wrapperClass="py-10 md:py-16" innerClass="px-4 xl:px-0">
            <LoginLayout/>
        </SectionWrapper>
    )
}

export default Login