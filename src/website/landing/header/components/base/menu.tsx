import { MouseEventHandler } from "react"

type menu = {
    click: MouseEventHandler
}

const Menu = (props:menu)=>{
    return(
        <img src="menu.png" className="cursor-pointer w-10 h-10" onClick={props.click}/>
    )
}

export default Menu