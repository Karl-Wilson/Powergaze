import { classJoiner } from "@/src/common/utils/helper"
import HeroareaContent from "../container/heroareaContent"
import HeroareImage from "../container/heroareaImage"
import { useRef } from "react"
import useScrollAnimate from "@/src/common/utils/hooks/scrollAnimate"

type heroarea = {
    class?: string
}

const Heroarea = (props:heroarea) =>{
    const layout = useRef(null)
    const scrollAction = () =>{
        document.getElementById("heroareaContent")?.classList.add("animate-staticEaseIn")
        document.getElementById("heroareaImage")?.classList.add("animate-rightEaseIn")
    }
    useScrollAnimate(layout, scrollAction, true)
    return(
        <div className={classJoiner("grid grid-cols-1 md:grid-cols-2 py-6 md:py-12", props.class)} ref={layout}>
            <HeroareaContent class="col-start-1 mb-12 md:mb-0 opacity-0" id="heroareaContent"/>
            <HeroareImage class="col-start-1 md:col-start-2 opacity-0 translate-x-[100px]" id="heroareaImage"/>
        </div>
    )
}

export default Heroarea