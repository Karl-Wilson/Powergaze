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
    clickIcon?: MouseEventHandler,
    class?: string,
    visibility?: boolean,
    passIcon?: string
    
}


const MyFormElement = (props: myFormElement) =>{
        return(
            <div className={props.class}>
                <div className={classJoiner("h-14 relative flex flex-row items-center box-border rounded-xl w-full", props.theme?.bgColor, props.theme?.borderWidth)} >
                    {props.icon && <img onClick={props.clickIcon} className="ml-3 h-6" src={props.icon}/>}
                    {props.children}
                    <label ref={props.labelRef} 
                        className={classJoiner("absolute px-1 transition-all ease-in-out box-border", props.theme?.bgColor, props.theme?.textColor, props.icon? "ml-12": "ml-3.5", props.labelPos? "-translate-y-7 text-xs": "")}>
                            {props.label}
                    </label>
                    {props.label == "Password" && <img className={classJoiner("mr-3 cursor-pointer", props.passIcon)} src={props.visibility? "visibility.svg" : "visibility_off.svg"} onClick={props.passwordSwitch}/>}
                </div>
                {props.errorMsg && <div className="w-full px-4 mt-1 flex flex-row"><img src="images/f.jpg" className="mr-4 h-6"/>{props.errorMsg}</div>}
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
    clickIcon?: MouseEventHandler,
    class?: string
    children?: React.ReactNode

}

const Input = (props: input) =>{
    let label = useRef(null)
    let [visibility, setVisibility] = useState(true)
    let [type, setType] = useState(props.type)
    let [passIcon, setPassIcon] = useState("hidden")

    let inputForm = useRef(null)

    const change = () =>{
        let input = inputForm.current! as HTMLFormElement
        if(!input.value){
            setPassIcon("hidden")
        }else{
            setPassIcon("block")
        }
    }

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
            setType("text")
            setVisibility(false)
        }else{
            setType("password")
            setVisibility(true) 
        }
    }

    if(props.inputType != "default"){
        return(
        <MyFormElement labelRef={label} name={props.name} label={props.label} 
        type={type} errorMsg={props.errorMsg} labelPos={true} 
        icon={props.icon} clickIcon={props.clickIcon} 
        theme={props.theme} class={props.class} visibility={visibility} passIcon={passIcon}>
            <input placeholder={props.placeholder} className={inputDefaultClass} 
            name={props.name} type={type} onChange={change} ref={inputForm}/>
            {props.children}
        </MyFormElement>
        )
    }
    return(
        <MyFormElement labelRef={label} name={props.name} label={props.label} 
        type={type} passwordSwitch={passowrdVisibility} labelPos={false} 
        errorMsg={props.errorMsg} icon={props.icon} theme={props.theme} class={props.class} visibility={visibility} passIcon={passIcon}>
            <input ref={inputForm} className={inputDefaultClass} name={props.name} 
            type={type} onFocus={focus} onBlur={blur} onChange={change}/>
            {props.children}
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
    class? : string
}
export const SelectForm = (props: selectForm) =>{
    return(
        <MyFormElement name={props.name} label={props.label} type={props.type} errorMsg={props.errorMsg} theme={props.theme} labelPos class={props.class}>
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