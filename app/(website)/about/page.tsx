import AboutPage from "@/src/website/about/view/about"
import PageWrapper from "@/src/website/common/component/pageWrapper"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
  };
const About = () =>{
    return(
        <PageWrapper class="min-h-screen pb-3">
            <AboutPage/>
        </PageWrapper>
    )
}
export default About