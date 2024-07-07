"use client"
import { useRef } from "react";
import { classJoiner } from "../../utils/helper";

type switchType = {
    bgColor: string
    action: ()=>void
}

const Switch = (props: switchType) =>{
    let ball = useRef(null)
    let wrapper = useRef(null)
    let wrapperColor = "bg-gray-200"
    let ballColor = "bg-gray-500"

    const click = () =>{
        let switchBall = ball.current! as HTMLElement
        let switchWrapper = wrapper.current! as HTMLElement

        //ball left position and size
        switchBall.classList.toggle("left-6")
        switchBall.classList.toggle("size-6")

        //ball Color
        switchBall.classList.toggle("bg-white")

        //wrapper color
        switchWrapper.classList.toggle(props.bgColor)
        switchWrapper.classList.toggle(wrapperColor)

        props.action();
    }
    return(
        <div ref={wrapper} className={classJoiner("h-8 w-14 transition-all ease-in-out duration-300 rounded-full box-border flex flex-row items-center cursor-pointer", wrapperColor)} onClick={click}>
            <div ref={ball} className={classJoiner("size-5 transition-all ease-in-out duration-300 mx-1 box-border rounded-full left-0 relative cursor-pointer", ballColor)}></div>
        </div>
    )
}

export default Switch;
