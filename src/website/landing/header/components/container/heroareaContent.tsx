import Button from "@/src/common/components/core/button";
import { montserrat } from "@/src/common/utils/fonts";
import { classJoiner } from "@/src/common/utils/helper";
let headline = "The Smart Way to Monitor and Manage Your Energy Consumption"
type heroareaContent = {
    class?: string
}

const HeroareaContent = (props: heroareaContent) =>{
    return(
        <div className={classJoiner("mr-4 flex flex-col justify-center", props.class)}>
            <div className="mb-11">
                <h2 className={classJoiner("text-4xl font-bold", montserrat.className)}>{headline}</h2>
            </div>
            <div className="">
                <Button label="Learn more" filled={{bgColor: "bg-btnColor", textColor: "text-white"}}/>
            </div>
        </div>
    )
}

export default HeroareaContent;