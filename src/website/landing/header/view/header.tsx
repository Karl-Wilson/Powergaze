import SectionWrapper from "@/src/common/components/core/sectionWrapper";
import Navigation from "../components/layout/navigation";
import Heroarea from "../components/layout/heroarea";

const Header = () =>{
    return(
        <SectionWrapper maxWidth="max-w-6xl" wrapperClass="md:rounded-[42px] bg-white md:my-3 max-w-[1920px] mx-auto" innerClass="px-4 xl:px-0">
            <Navigation/>
            <Heroarea/>
        </SectionWrapper>
    )
}

export default Header;