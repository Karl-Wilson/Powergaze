import { classJoiner } from "@/src/common/utils/helper"

type heroareaImage = {
    class?: string
}

const HeroareImage = (props: heroareaImage) =>{
    return(
        <div className={classJoiner("flex flex-col justify-center", props.class)}>
            <img src="heroarea.png"/>
        </div>
    )
}

export default HeroareImage;