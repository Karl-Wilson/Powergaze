import { montserrat } from "@/src/common/utils/fonts";
import { classJoiner } from "@/src/common/utils/helper";

type copyright = {

}

const Copyright = (props:copyright) =>{
    return(
        <p className={classJoiner("text-sm md:text-base text-gray-800 font-bold", montserrat.className)}>&copy; 2024 POWERGAZE</p>
    )
}

export default Copyright;