import { classJoiner } from "@/src/common/utils/helper"
import Wrapper from "../base/wrapper/featureContainer"
import FeatureImage from "../base/image"
import FeatureContent from "../base/content"

type featureContainer = {
    
}

const FeatureTwoContainer = (props: featureContainer) =>{
    return(
        <Wrapper>
            <div className="col-start-1 flex flex-col justify-center">
                <FeatureContent title="Control your Energy Consumption" 
                body="Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s."/>
            </div>
            <div className=" col-start-2 col-span-2 flex flex-row justify-end">
                <FeatureImage src="featureTwo.png"/>     
            </div>
        </Wrapper>
    )
}

export default FeatureTwoContainer