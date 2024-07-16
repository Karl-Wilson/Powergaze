import Dashboard from "../dashboard/view/dashboard"


const Main = () =>{
    return(
        <section className="w-full h-[calc(100vh-80px)] p-14 box-border overflow-auto bg-neutral-600">
            <Dashboard/>
        </section>
    )
}

export default Main