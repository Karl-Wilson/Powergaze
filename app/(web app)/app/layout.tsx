import DashboardView from "@/src/web_app/view/dashboardView"

type dashLayout = {
    children: React.ReactNode
}
const DashboardLayout = (props:dashLayout) =>{
    return(
        <DashboardView>
            {props.children}
        </DashboardView>
    )
}
export default DashboardLayout