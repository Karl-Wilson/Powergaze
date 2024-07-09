"use client"
import { classJoiner } from "@/src/common/utils/helper"
import Navbar from "./navbar"
import NavButtons from "./navButtons"
import { useState } from "react"
import Menu from "@/src/common/components/core/menu"

type dropdown = {
    class?: string
}

const Dropdown = (props: dropdown) =>{
    return(
        <Menu icon="menu.png" class={props.class} iconClass="w-10 h-10" dropdownClass="top-16 right-0 px-4 py-6 bg-white w-[100%] border border-neutral-200">
            <Navbar/>
            <NavButtons/>
        </Menu>      
    )
}

export default Dropdown