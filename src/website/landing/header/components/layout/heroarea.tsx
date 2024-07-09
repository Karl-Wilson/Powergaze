import { classJoiner } from "@/src/common/utils/helper"
import HeroareaContent from "../container/heroareaContent"
import HeroareImage from "../container/heroareaImage"

type heroarea = {
    class?: string
}

const Heroarea = (props:heroarea) =>{
    return(
        <div className={classJoiner("grid grid-cols-2 py-12", props.class)}>
            <HeroareaContent class="col-start-1"/>
            <HeroareImage class="col-start-2"/>
        </div>
    )
}

export default Heroarea