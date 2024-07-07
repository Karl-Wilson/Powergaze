import { ReactNode } from "react"
import { classJoiner } from "../../utils/helper"


type card = {
    width: string,
    children: ReactNode,
    shadow?: string
    filled?: string,
    outline?: string

}
const Card = (props: card) =>{
    return(
        <div className={classJoiner("rounded-xl p-4 box-border", props.filled, props.outline,  props.shadow, props.width)}>
            {props.children}
        </div>
    )
}

export default Card