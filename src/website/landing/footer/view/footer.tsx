import SectionWrapper from "@/src/common/components/core/sectionWrapper";
import FooterContainer from "../components/container/footerContainer";
import FooterLayout from "../components/layout/footerLayout";

type footer = {

}

const Footer = (props: footer) =>{
    return(
        <footer>
            <SectionWrapper maxWidth="max-w-6xl" wrapperClass="md:rounded-t-[42px] bg-white py-8 max-w-[1920px] mx-auto">
                <FooterLayout/>
            </SectionWrapper>
            
        </footer>
    )
}

export default Footer;