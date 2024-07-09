import Logo from "@/src/common/components/core/logo";
import { classJoiner } from "@/src/common/utils/helper";

type powerGaze = {
    class?: string
}
const PowerGazeLogo = (props: powerGaze) =>{
    return(
        <div className={classJoiner("flex flex-row items-center", props.class)}>
            <Logo logo="logo.png"/>
        </div>
    )
}

export default PowerGazeLogo