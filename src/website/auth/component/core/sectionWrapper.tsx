import SectionWrapper from "@/src/common/components/core/sectionWrapper"

type sectionWrapper = {
    children: React.ReactNode
}
const AuthSectionWrapper = (props: sectionWrapper) =>{
    return(
        <SectionWrapper maxWidth="max-w-[987px]" wrapperClass="h-screen flex flex-col justify-center" innerClass="xl:px-0 mx-0 md:mx-auto w-screen md:w-auto h-screen md:h-auto">
            {props.children}
        </SectionWrapper>

    )
}

export default AuthSectionWrapper