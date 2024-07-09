import { classJoiner } from "@/src/common/utils/helper"
import Copyright from "../base/copyright"
import TermsPrivacy from "../base/terms&privacy"

type footerContainer = {

}

const FooterContainer = (props: footerContainer) =>{
    const links = [{name: "Privacy", url: "/privacy"},
        {name: "Terms", url: "/terms"}
    ]
    return(
        <div className={classJoiner("w-full flex flex-row items-center justify-between")}>
            <Copyright/>
            <TermsPrivacy links={links}/>
        </div>
    )
}

export default FooterContainer