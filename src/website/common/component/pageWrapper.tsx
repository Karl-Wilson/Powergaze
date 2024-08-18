import { classJoiner } from "@/src/common/utils/helper"

type pageWrapper = {
    children: React.ReactNode
    class?: string
}

const PageWrapper = (props: pageWrapper) =>{
    return(
        <main className={classJoiner("md:px-4 bg-bgWebsite md:pt-3", props.class)}>
            {props.children}
        </main>
    )
}

export default PageWrapper