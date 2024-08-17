import { MouseEventHandler } from "react"
import { classJoiner } from "../../utils/helper"
import useMenu from "../../utils/hooks/menu"

type wrapper = {
    children: React.ReactNode
    class?: string
}
export const MenuWrapper = (props: wrapper) =>{
    return(
        <div className={classJoiner(props.class)}>
            {props.children}
        </div>
    )
}

type contentWrapper = {
    children: React.ReactNode
    class?: string
    click?: MouseEventHandler
}

export const MenuContentWrapper = (props: contentWrapper) =>{
    return(
        <div className={classJoiner(props.class)} onClick={props.click}>
            {props.children}
        </div>
    )
}

type dropdown = {
    children: React.ReactNode
    class?: string
    display?: string
}

export const MenuDropdown = (props: dropdown) =>{
    return(
        <div className={classJoiner("absolute box-border drop-shadow-lg", props.display, props.class)}>
            {props.children}
        </div>
    )
}


export {useMenu}