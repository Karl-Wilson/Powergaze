import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type content = {
    title: string,
    body: string,
    class?: string
}

const FeatureContent = (props:content) =>{
    return(
        <div className={classJoiner("w-3/4 md:w-auto", props.class)}>
            <h2 className={classJoiner("font-bold text-2xl lg:text-3xl mb-4", montserrat.className)}>{props.title}</h2>
            <p className={classJoiner("text-base lg:text-lg", montserrat.className)}>{props.body}</p>
        </div>
    )
}

export default FeatureContent