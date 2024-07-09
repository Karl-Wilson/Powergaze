import SectionWrapper from "@/src/common/components/core/sectionWrapper"
import FeatureOne from "../components/layout/featureOne"
import FeatureTwo from "../components/layout/featureTwo"

type feature = {}

const Feature = (props: feature) => {
    return(
        <SectionWrapper maxWidth="max-w-6xl" wrapperClass="py-16">
            <FeatureOne/>
            <FeatureTwo/>
        </SectionWrapper>
    )
}

export default Feature