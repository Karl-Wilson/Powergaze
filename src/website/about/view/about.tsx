import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import Navigation from "../../landing/header/components/layout/navigation"
import Body from "../component/layout/body"

const AboutPage = () =>{
    return(
        <SectionWrapper maxWidth="max-w-6xl" wrapperClass="md:rounded-[42px] bg-white md:my-3 min-h-screen" innerClass="px-4 xl:px-0">
            <Navigation/>
            <Body/>
        </SectionWrapper>
    )
}

export default AboutPage