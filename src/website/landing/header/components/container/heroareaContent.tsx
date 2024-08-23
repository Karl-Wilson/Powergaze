import Button from "@/src/common/components/core/button";
import { montserrat } from "@/src/common/utils/fonts";
import { classJoiner } from "@/src/common/utils/helper";
import { useRouter } from "next/navigation";
let headline = "The Smart Way to Monitor and Manage Your Energy Consumption"
type heroareaContent = {
    class?: string
    id?: string
}

const HeroareaContent = (props: heroareaContent) =>{
    const router = useRouter()
    const click = () =>{
        router.push("/about")
    }
    return(
        <div className={classJoiner("md:mr-4 flex flex-col justify-center", props.class)} id={props.id}>
            <div className="mb-5 lg:mb-11 text-center md:text-left">
                <h2 className={classJoiner("text-3xl lg:text-4xl font-bold", montserrat.className)}>{headline}</h2>
            </div>
            <div>
                <Button label="Learn more" click={click} class="w-full md:w-auto" filled={{bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}}/>
            </div>
        </div>
    )
}

export default HeroareaContent;