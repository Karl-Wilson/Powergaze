"use client"
import { FocusEventHandler, MouseEventHandler, ReactNode, useRef, useState } from "react"
import { classJoiner } from "@/src/common/utils/helper"

let inputDefaultClass: string = "top-0 h-full w-full px-4 py-4 z-10 bg-transparent outline-none box-border"

type myFormElement = {
    label: string,
    name: string,
    type: string,
    children: ReactNode,
    labelPos: boolean
    theme?: {borderColor?: string, textColor?: string, bgColor?: string,  borderWidth?: string,},
    icon?: string,
    errorMsg?: string,
    labelRef?: any,
    passwordSwitch?: MouseEventHandler,
    clickIcon?: MouseEventHandler
}


const MyFormElement = (props: myFormElement) =>{
        return(
            <div>
                <div className={classJoiner("h-14 relative flex flex-row items-center box-border rounded-sm w-full", props.theme?.bgColor, props.theme?.borderWidth)} >
                    {props.icon && <img onClick={props.clickIcon} className="ml-3 h-6" src={props.icon}/>}
                    {props.children}
                    <label ref={props.labelRef} 
                        className={classJoiner("absolute px-1 transition-all ease-in-out box-border", props.theme?.bgColor, props.theme?.textColor, props.icon? "ml-12": "ml-3.5", props.labelPos? "-translate-y-7 text-xs": "")}>
                            {props.label}
                    </label>
                    {props.type == "password" && <img className="mr-3" src="images/eyes.jpg" onClick={props.passwordSwitch}/>}
                </div>
                <div className="w-full px-4 mt-1 flex flex-row"><img src="images/f.jpg" className="mr-4 h-6"/>{props.errorMsg}</div>
            </div>
        )
    
   
}

type input = {
    name: string,
    type: string,
    label: string,
    inputType: string,
    theme?: {borderColor?: string, textColor?: string, bgColor?: string,  borderWidth?: string,},
    icon?: string,
    errorMsg?: string,
    placeholder?: string,
    clickIcon?: MouseEventHandler

}

const Input = (props: input) =>{
    let label = useRef(null)

    let inputForm = useRef(null)
    const focus = () =>{
        let g = label.current! as HTMLElement 
        g.classList.add("-translate-y-7")
        g.classList.add("text-xs")
    }
    const blur = () =>{
        let input = inputForm.current! as HTMLFormElement
        if(!input.value){
            let g = label.current! as HTMLElement 
            g.classList.remove("-translate-y-7")
            g.classList.remove("text-xs")
        }
    }
    const passowrdVisibility = () =>{
        let g = inputForm.current! as HTMLElement
        if(g.getAttribute("type") == "password"){
            g.setAttribute("type", "text")
        }else{
            g.setAttribute("type", "password")
        }
    }

    if(props.inputType != "default"){
        return(
        <MyFormElement labelRef={label} name={props.name} label={props.label} type={props.type} errorMsg={props.errorMsg} labelPos={true} icon={props.icon} clickIcon={props.clickIcon} theme={props.theme}>
            <input placeholder={props.placeholder} className={inputDefaultClass} name={props.name} type={props.type}/>
        </MyFormElement>
        )
    }
    return(
        <MyFormElement labelRef={label} name={props.name} label={props.label} type={props.type} passwordSwitch={passowrdVisibility} labelPos={false} errorMsg={props.errorMsg} theme={props.theme}>
            <input ref={inputForm} className={inputDefaultClass} name={props.name} type={props.type} onFocus={focus} onBlur={blur}/>
        </MyFormElement>
    )
    
}

type selectForm = {
    name: string,
    type: string,
    label: string,
    theme?: {borderColor?: string, textColor?: string, bgColor?: string,  borderWidth?: string,},
    errorMsg?: string,
    placeholder?: string,
    values: any[],
}
export const SelectForm = (props: selectForm) =>{
    return(
        <MyFormElement name={props.name} label={props.label} type={props.type} errorMsg={props.errorMsg} theme={props.theme} labelPos>
            <select className={inputDefaultClass} name={props.name}>
                {props.values.map(item=>{
                    let counter: number = Math.random() * Math.random()
                    return <option key={item + (++counter)}>{item}</option>
                })}
            </select>
        </MyFormElement>
    )
}
export default Input