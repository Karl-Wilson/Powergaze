"use client"
import { classJoiner } from "@/src/common/utils/helper"
import Navbar from "./navbar"
import NavButtons from "./navButtons"
import Menu from "../base/menu"
import { useState } from "react"

type dropdown = {
    class?: string
}

const Dropdown = (props: dropdown) =>{
    const [display, setDisplay] = useState<string>("hidden")
    const click = () =>{
        if(display == "hidden"){
            setDisplay("block")
        }else{
            setDisplay("hidden")
        }
        
    }
    return(
        <div className={classJoiner("relative", props.class)}>
            <Menu click={click}/>
            <div className={classJoiner("absolute top-10 right-2 px-4 py-6 box-border bg-white drop-shadow-lg w-3/4", display)}>
            <Navbar/>
            <NavButtons/>
            </div>
        </div>
        
    )
}

export default Dropdown