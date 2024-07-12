import { classJoiner } from "@/src/common/utils/helper"

type heroareaImage = {
    class?: string
    id?: string
}

const HeroareImage = (props: heroareaImage) =>{
    return(
        <div className={classJoiner("flex flex-col justify-center", props.class)} id={props.id}>
            <img src="heroarea.png"/>
        </div>
    )
}

export default HeroareImage;