import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import FeatureOne from "../components/layout/featureOne"
import FeatureTwo from "../components/layout/featureTwo"

type feature = {}

const Feature = (props: feature) => {
    return(
        <SectionWrapper maxWidth="max-w-6xl" wrapperClass="py-10 md:py-16" innerClass="px-4 xl:px-0">
            <FeatureOne/>
            <FeatureTwo/>
        </SectionWrapper>
    )
}

export default Feature