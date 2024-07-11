import Logo from "@/src/common/components/core/logo";
import { classJoiner } from "@/src/common/utils/helper";
import Link from "next/link";

type powerGaze = {
    class?: string
}
const PowerGazeLogo = (props: powerGaze) =>{
    return(
        <div className={classJoiner("flex flex-row items-center", props.class)}>
            <Link href="/"><Logo logo="logo.png"/></Link>
        </div>
    )
}

export default PowerGazeLogo