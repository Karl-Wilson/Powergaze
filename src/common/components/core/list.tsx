import { classJoiner } from "../../utils/helper"


type textHolder = {
    headline: string,
    sub?: string
    class?: string
    headlineClass?: string
    subClass?: string
}
const TextHolder = (props: textHolder) =>{
    return(
        <div className={classJoiner("w-full flex flex-col flex-grow justify-center", props.class)}>
            <h2 className={props.headlineClass}>{props.headline}</h2>
            {props.sub && <p className={props.subClass}>{props.sub}</p>}
        </div>
    )
}

type image = {
    icon?: string,
    avatar?: string
    image?: string
    hidden?: boolean
    class?:string
    contentClass?: string
}

const Image = (props: image) =>{
    return(
        <div className={classJoiner("mr-2 flex-row items-center", props.hidden? "hidden" : "flex", props.class)}>
            {props.icon && <img className={classJoiner("w-6 h-auto", props.contentClass)} src={props.icon}/>}
            {props.avatar && <div className={classJoiner("rounded-full size-10", props.contentClass)}><p>{props.avatar}</p></div>}
            {props.image && <img className={classJoiner("size-14", props.contentClass)} src={props.image}/>}
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
    children?: React.ReactNode
    subClass?: string
    headlineClass?: string
    iconClass?: string
    
}

const List = (props: list)=>{
    return(
        <div className={classJoiner("px-4 py-2 box-border flex flex-row items-center h-18", props.class)}>
            {props.icon && <Image icon={props.icon} avatar={props.avatar} image={props.image} hidden={props.hidden} contentClass={props.iconClass}/>}
            <TextHolder headline={props.headline} sub={props.sub} class={classJoiner(props.icon? "pl-4" : "",)} headlineClass={props.headlineClass} subClass={props.subClass}/>
            {props.children && <div className={props.children? "pl-4" : ""}>{props.children}</div>}
        </div>
    )
}


export default List