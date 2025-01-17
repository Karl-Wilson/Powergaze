import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"
import { useRouter } from "next/router"
import { MouseEventHandler, useEffect } from "react"

type sidebarMenu = {
    title: string
    icon: string
    url: string
    class?: string
    textClass?: string
    active?: boolean
    click?: MouseEventHandler
}

const SidebarMenu = (props:sidebarMenu) =>{
    return(
        <Link href={props.url} className={props.class} onClick={props.click}>
            <div className={classJoiner("rounded-xl pl-4 pr-6 box-border flex flex-row items-center w-full h-14 cursor-pointer", props.active? "bg-btnColor":"", "hover:bg-btnColor")}>
                <img src={props.icon} className="size-6 mr-3"/>
                <span className={props.textClass}>{props.title}</span>
            </div>
        </Link>
    )
}

export default SidebarMenu