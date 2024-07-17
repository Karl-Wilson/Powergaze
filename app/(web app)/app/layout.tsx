"use client"
import { store } from "@/src/web_app/common/store/store"
import DashboardView from "@/src/web_app/view/dashboardView"
import { Provider } from "react-redux"

type dashLayout = {
    children: React.ReactNode
}
const DashboardLayout = (props:dashLayout) =>{
    return(
        <Provider store={store}>
            <DashboardView>
                {props.children}
            </DashboardView>
        </Provider>
    )
}
export default DashboardLayout