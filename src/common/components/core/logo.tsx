import { classJoiner } from "../../utils/helper"

type logo = {
    logo: string
    class?: string
}
const Logo = (props: logo) =>{
    return(
        <div className={classJoiner("px-4 box-border flex flex-row items-center", props.class)}>
            <img src={props.logo}/>
        </div>
    )
}

export default Logo;