import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"

type termsPrivacy = {
    links: {name: string, url: string}[]
}

const TermsPrivacy = (props:termsPrivacy) =>{

    return(
        <div className={classJoiner("flex flex-row items-center justify-end")}>
            {props.links.map(item => {
                return <Link className="ml-4 text-sm md:text-base" href={item.url} key={item.name+"-"+item.url}>{item.name}</Link>
            })}
        </div>
    )
}

export default TermsPrivacy