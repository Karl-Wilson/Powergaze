import { ReactNode } from "react";
import { classJoiner } from "../../utils/helper";

type wrapper = {
    children: ReactNode,
    maxWidth: string,
    wrapperClass?: string,
    innerClass?: string,
}

const SectionWrapper = (props: wrapper) =>{
    return(
        <section className={classJoiner("w-full box-border", props.wrapperClass)}>
            <div className={classJoiner("mx-auto box-border", props.maxWidth, props.innerClass)}>{props.children}</div>
        </section>
    )
}

export default SectionWrapper;