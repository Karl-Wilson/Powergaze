import Logo from "@/src/common/components/core/logo"
import { montserrat } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"

type header = {
    title: string
    class?: string,
    titleClass?: string
}

const Header = (props: header) =>{
    return(
        <div className={classJoiner("flex flex-col mb-10 md:mb-0", props.class)}>
            <Link href="/"><Logo logo="logo.png" class="w-32 md:w-36 h-auto"/></Link>
            <div>
                <h2 className={classJoiner("text-3xl md:text-4xl",montserrat.className, props.titleClass)}>{props.title}</h2>
            </div>
        </div>
    )
}

export default Header