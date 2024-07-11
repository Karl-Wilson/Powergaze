import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import SignupLayout from "../component/layout/signupLayout"

type signup = {

}

const SignupPage = (props: signup) =>{
    return(
        <SectionWrapper maxWidth="max-w-[987px]" wrapperClass="h-screen flex flex-col justify-center" innerClass="xl:px-0">
            <SignupLayout/>
        </SectionWrapper>
    )
}

export default SignupPage