"use client"
import SignupLayout from "../component/layout/signupLayout"
import AuthSectionWrapper from "../component/core/sectionWrapper"

type signup = {

}

const SignupPage = (props: signup) =>{
    return(
        <AuthSectionWrapper>
            <SignupLayout/>
        </AuthSectionWrapper>
    )
}

export default SignupPage