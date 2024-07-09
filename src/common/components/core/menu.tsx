import { useState } from "react"
import { classJoiner } from "../../utils/helper"

type menu = {
    children: React.ReactNode,
    icon: string,
    class?: string,
    iconClass?: string
    dropdownClass?: string
}

const Menu = (props: menu) =>{
    const [display, setDisplay] = useState<string>("hidden")
    const click = () =>{
        if(display == "hidden"){
            setDisplay("block")
        }else{
            setDisplay("hidden")
        }
        
    }
    return(
        <div className={classJoiner(props.class)}>
            <img src={props.icon} className={classJoiner("cursor-pointer", props.iconClass)} onClick={click}/>
            <div className={classJoiner("absolute p-4 box-border drop-shadow-lg", display, props.dropdownClass)}>
                {props.children}
            </div>
    </div>
    )
}

export default Menu