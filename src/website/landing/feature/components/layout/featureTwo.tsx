import FeatureContent from "../base/content"
import FeatureImage from "../base/image"
import LayoutWrapper from "../base/wrapper/featureLayout"
import FeatureContainer from "../container/featureOneContainer"
import FeatureTwoContainer from "../container/featureTwoContainer"

type featureTwo = {

}

const FeatureTwo = (props: featureTwo) => {
    return(
        <LayoutWrapper>
            <FeatureTwoContainer/>
        </LayoutWrapper>
    )
}

export default FeatureTwo