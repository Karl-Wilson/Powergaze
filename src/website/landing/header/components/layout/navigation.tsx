import PowerGazeLogo from "../base/logo"
import Dropdown from "../container/dropdown"
import Navbar from "../container/navbar"
import NavButtons from "../container/navButtons"

const Navigation = () =>{
    return(
        <div className="grid grid-cols-2 md:grid-cols-12 w-full gap-x-4 py-5 border-box">
            <PowerGazeLogo class="col-start-1 md:col-span-3"/>
            <Navbar class="hidden md:flex"/>
            <NavButtons class="hidden md:flex col-start-10 col-span-3"/>
            <Dropdown class="flex flex-row justify-end md:hidden col-start-2 z-10"/>
        </div>
    )
}

export default Navigation