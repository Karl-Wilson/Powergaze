import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type content = {
    title: string,
    body: string
}

const FeatureContent = (props:content) =>{
    return(
        <div>
            <h2 className={classJoiner("font-bold text-3xl mb-4", montserrat.className)}>{props.title}</h2>
            <p className={classJoiner("text-lg", montserrat.className)}>{props.body}</p>
        </div>
    )
}

export default FeatureContent