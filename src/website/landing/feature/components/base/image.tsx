import { classJoiner } from "@/src/common/utils/helper"

type image = {
        src: string
        class?: string
        id?: string
}

const FeatureImage = (props:image) =>{
    return(
        <>
            <img src={props.src} className={classJoiner("w-4/5 md:w-auto", props.class)} id={props.id}/>
        </>
    )
}

export default FeatureImage