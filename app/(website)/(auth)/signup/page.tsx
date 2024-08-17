import SignupPage from "@/src/website/auth/view/signup"
import PageWrapper from "@/src/website/common/component/pageWrapper"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signup",
  };
const Signup = () =>{
        return(
            <PageWrapper>
                <SignupPage/>
            </PageWrapper>
        )
}

export default Signup