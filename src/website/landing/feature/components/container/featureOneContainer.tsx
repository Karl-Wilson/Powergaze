import { classJoiner } from "@/src/common/utils/helper"
import Wrapper from "../base/wrapper/featureContainer"
import FeatureImage from "../base/image"
import FeatureContent from "../base/content"

type featureContainer = {
    
}

const FeatureOneContainer = (props: featureContainer) =>{
    return(
        <Wrapper>
            <div className="col-start-1 col-span-2">
                    <FeatureImage src="featureOne.png"/>     
                </div>
                <div className="col-start-3 flex flex-col justify-center w-[325px]">
                    <FeatureContent title="Monitor your Energy Consumption" 
                    body="Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s."/>
                </div>
        </Wrapper>
    )
}

export default FeatureOneContainer