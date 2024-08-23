import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

const Paragraph = (props: {children: string, class?: string}) =>{
    return (
        <p className={classJoiner("leading-7 text-justify",lato.className, props.class)}>{props.children}</p>
    )
}
const BodyContent = () =>{
    return(
        <div className="md:w-3/4 mx-auto">
            <Paragraph class="pb-4">
            In today's world, the need for energy conservation is more pressing than ever, 
            both for environmental sustainability and cost savings. However, many individuals 
            find it challenging to effectively monitor and manage their energy usage. Traditional 
            methods often lack the ability to provide real-time data and actionable insights, making 
            it difficult for users to identify inefficient patterns, optimize their consumption, and 
            control energy-related devices remotely. This disconnect hinders efforts to achieve greater 
            energy efficiency in both residential and commercial settings.</Paragraph>

            <Paragraph class="pb-6">To address this challenge, I developed the PowerGaze web application, 
                a practical example of how technology can empower users to take control 
                of their energy consumption. PowerGaze provides an intuitive, real-time 
                dashboard that allows users to monitor their energy use and remotely control 
                connected devices to optimize energy efficiency. The application was built 
                using a modern tech stack, combining a user-friendly frontend with a robust 
                backend that ensures scalability and data security. This project not only 
                serves as a showcase of my frontend development skills but also highlights 
                the potential of practical technological solutions to make a meaningful impact 
                on energy management and sustainability.
            </Paragraph>
        </div>
    )
}
export default BodyContent