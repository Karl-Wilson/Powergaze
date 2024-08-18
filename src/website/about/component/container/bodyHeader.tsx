import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

const BodyHeader = () =>{
    return(
        <div>
            <h2 className={classJoiner("font-bold text-xl mb-3", lato.className)}>About</h2>
        </div>
    )
}
export default BodyHeader