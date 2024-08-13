import { MouseEventHandler, useEffect } from "react"

type sender = {
    click?: MouseEventHandler,
    msg?: string[]
    label?: string


}
export const SenderButtons = (props: sender) =>{
    useEffect(()=>{

    }, [props.msg])
    return(
        <div className="m-6">
            <button onClick={props.click} className="bg-btnColor p-4 rounded-xl text-white">{props.label}</button>
            {props.msg?.map((item)=>{
                return <p key={item}>{item}</p>
            })}
        </div>
    )
}

export default SenderButtons