import NavLayout from "../component/layout/navLayout"

const Navigation = () =>{
    return(
        <nav className="w-full h-[80px] box-border p-3 flex flex-row items-center bg-dashboard-primary">
            <NavLayout/>
        </nav>
    )
}

export default Navigation