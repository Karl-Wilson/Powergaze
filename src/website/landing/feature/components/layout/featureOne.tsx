import FeatureContent from "../base/content"
import FeatureImage from "../base/image"
import LayoutWrapper from "../base/wrapper/featureLayout"
import FeatureOneContainer from "../container/featureOneContainer"
import FeatureContainer from "../container/featureOneContainer"

type featureOne = {

}

const FeatureOne = (props: featureOne) =>{
    return(
        <LayoutWrapper>
            <FeatureOneContainer/>
        </LayoutWrapper>
    )
}

export default FeatureOne