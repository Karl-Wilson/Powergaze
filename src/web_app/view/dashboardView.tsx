import Main from "../main/view/main"
import Navigation from "../navigation/view/Navigation"
import Sidebar from "../sidebar/view/sidebar"

const DashboardView = () =>{
    return(
        <div className="max-w-[1700px] h-screen w-screen flex flex-row">
            <Sidebar/>
            <div className="w-full h-screen flex flex-col">
                <Navigation/>
                <Main/>
            </div>
        </div>
    )
}

export default DashboardView