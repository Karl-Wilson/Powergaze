import { classJoiner } from "@/src/common/utils/helper"

type image = {
        src: string
        class?: string
}

const FeatureImage = (props:image) =>{
    return(
        <>
            <img src={props.src} className={classJoiner("", props.class)} />
        </>
    )
}

export default FeatureImage