import Main from "../main/view/main"
import Navigation from "../navigation/view/Navigation"
import Sidebar from "../sidebar/view/sidebar"

type dashboardView = {
    children: React.ReactNode
}
const DashboardView = (props:dashboardView) =>{
    return(
        <div className="max-w-[1920px] 2xl:mx-auto h-screen w-screen flex flex-row">
            <Sidebar/>
            <div className="w-full h-screen flex flex-col">
                <Navigation/>
                <Main>{props.children}</Main>
            </div>
        </div>
    )
}

export default DashboardView