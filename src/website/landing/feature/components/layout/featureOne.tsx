import { useRef } from "react"
import LayoutWrapper from "../base/wrapper/featureLayout"
import FeatureOneContainer from "../container/featureOneContainer"
import useScrollAnimate from "@/src/common/utils/hooks/scrollAnimate"


type featureOne = {

}

const FeatureOne = (props: featureOne) =>{
    const layout = useRef<HTMLDivElement>(null)
    const scrollAction = ():void => {
        document.getElementById("featureOneContent")?.classList.add("animate-staticEaseIn")
        document.getElementById("featureOneImage")?.classList.add("animate-leftEaseIn")
  }
    useScrollAnimate(layout, scrollAction, true)
    return(
        <LayoutWrapper layoutRef={layout}>
            <FeatureOneContainer/>
        </LayoutWrapper>
    )
}

export default FeatureOne