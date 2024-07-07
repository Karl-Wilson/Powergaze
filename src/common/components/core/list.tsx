import { classJoiner } from "../../utils/helper"


type textHolder = {
    headline: string,
    sub?: string
}
const TextHolder = (props: textHolder) =>{
    return(
        <div className="w-full flex flex-column flex-grow justify-center">
            <h2>{props.headline}</h2>
            {props.sub && <p>{props.sub}</p>}
        </div>
    )
}

type image = {
    icon?: string,
    avatar?: string
    image?: string
    hidden?: boolean
}

const Image = (props: image) =>{
    return(
        <div className={classJoiner("mr-2 flex-row items-center", props.hidden? "hidden" : "flex")}>
            {props.icon && <img className="w-6 h-auto" src={props.icon}/>}
            {props.avatar && <div className="rounded-full size-10"><p>{props.avatar}</p></div>}
            {props.image && <img className="size-14" src={props.image}/>}
        </div>
    )
}

type list = {
    class?: string,
    headline: string,
    sub?: string,
    icon?: string,
    avatar?: string,
    image?: string,
    hidden?: boolean
    
}

const List = (props: list)=>{
    return(
        <div className={classJoiner("px-4 py-2 box-border flex flex-row items-center h-18", props.class)}>
            <Image icon={props.icon} avatar={props.avatar} image={props.image} hidden={props.hidden}/>
            <TextHolder headline={props.headline} sub={props.sub}/>
        </div>
    )
}


export default List