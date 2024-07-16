import Dashboard from "../dashboard/view/dashboard"
type main = {
    children: React.ReactNode
}

const Main = (props:main) =>{
    return(
        <section className="w-full h-[calc(100vh-80px)] p-14 box-border overflow-auto bg-neutral-600">
            {props.children}
        </section>
    )
}

export default Main