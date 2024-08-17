"use client"
import { useEffect, useRef } from "react";
import { classJoiner } from "../../utils/helper";

export type switchType = {
    bgColor: string
    action: ()=>void
    isActive?: boolean
}

const Switch = (props: switchType) =>{
    let ball = useRef(null)
    let wrapper = useRef(null)
    let wrapperColor = "bg-gray-200"
    let ballColor = "bg-gray-500"

    
    const toggle = () =>{
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
    }
    
    const click = () =>{
        toggle()
        props.action();
    }
    return(
        <div ref={wrapper} className={classJoiner("h-8 w-14 transition-all ease-in-out duration-300 rounded-full box-border flex flex-row items-center cursor-pointer", props.isActive? props.bgColor : wrapperColor)} onClick={click}>
            <div ref={ball} className={classJoiner("transition-all ease-in-out duration-300 mx-1 box-border rounded-full relative cursor-pointer", props.isActive? "left-6 size-6 bg-white" : `left-0 size-5 ${ballColor}`)}></div>
        </div>
    )
}

export default Switch;
