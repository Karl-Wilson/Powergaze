import { classJoiner } from "@/src/common/utils/helper"
import Wrapper from "../base/wrapper/featureContainer"
import FeatureImage from "../base/image"
import FeatureContent from "../base/content"

type featureContainer = {
    
}

const FeatureOneContainer = (props: featureContainer) =>{
    return(
        <Wrapper>
            <div className="col-start-1 md:col-span-2 row-start-2 md:row-start-1">
                    <FeatureImage src="featureOne.png" id="featureOneImage" class="opacity-0"/>     
                </div>
                <div className="col-start-1 md:col-start-3 row-start-1 flex flex-col justify-center items-end md:items-center xl:w-[325px] mb-7 md:mb-0">
                    <FeatureContent title="Monitor your Energy Consumption" 
                    body="Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s." id="featureOneContent" class="opacity-0"/>
                </div>
        </Wrapper>
    )
}

export default FeatureOneContainer