import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

const BodyHeader = () =>{
    return(
        <div className="md:w-3/4 mx-auto ">
            <h2 className={classJoiner("font-black text-2xl mb-5", lato.className)}>About</h2>
        </div>
    )
}
export default BodyHeader