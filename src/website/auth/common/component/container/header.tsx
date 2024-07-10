import Logo from "@/src/common/components/core/logo"
import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type header = {
    title: string
    class?: string,
    titleClass?: string
}

const Header = (props: header) =>{
    return(
        <div className={classJoiner("flex flex-col", props.class)}>
            <Logo logo="logo.png" class="w-[178px] h-auto"/>
            <div>
                <h2 className={classJoiner("text-4xl pl-4",montserrat.className, props.titleClass)}>{props.title}</h2>
            </div>
        </div>
    )
}

export default Header