import SectionWrapper from "@/src/common/components/core/sectionWrapper";
import Navigation from "../components/layout/navigation";
import Heroarea from "../components/layout/heroarea";

const Header = () =>{
    return(
        <SectionWrapper maxWidth="max-w-6xl" wrapperClass="rounded-[42px] bg-white my-3" innerClass="px-4 xl:px-0">
            <Navigation/>
            <Heroarea/>
        </SectionWrapper>
    )
}

export default Header;