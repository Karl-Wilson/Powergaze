import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import SignupLayout from "../component/layout/signupLayout"

type signup = {

}

const SignupPage = (props: signup) =>{
    return(
        <SectionWrapper maxWidth="max-w-[987px]" wrapperClass="h-screen flex flex-col justify-center" innerClass="xl:px-0 mx-0 md:mx-auto w-screen md:w-auto h-screen md:h-auto">
            <SignupLayout/>
        </SectionWrapper>
    )
}

export default SignupPage