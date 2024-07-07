import { classJoiner } from "@/src/common/utils/helper"

type btn = {
    label: string,
    icon?: string, 
    theme?: string,
    click?: React.MouseEventHandler
    disabled?: boolean,
    filled?: {bgColor: string, textColor: string},
    outline?: {borderColor: string, textColor: string},
    text?: {textColor: string},
    class?: string
}

const Button = (props: btn) =>{
    const combine = (theme: object|undefined): string =>{
        let colorClasses:string = ""
        if(typeof theme != "undefined"){
            let values: string[] = Object.values(theme);
            values.map(item=>{
            colorClasses = colorClasses + " " + item;
            })
        }
        return colorClasses;
    }

        return(
            <button className={classJoiner("h-10 rounded-full", combine(props.filled), combine(props.outline), props.text?.textColor, props.icon? "pl-4 pr-6 flex flex-row items-center" : "px-6", props.class)} 
            onClick={props.click} disabled={props.disabled}>
                {props.icon && <img className="mr-2 h-6" src={props.icon}/>}
                {props.label}
            </button>
        )

}

export default Button;