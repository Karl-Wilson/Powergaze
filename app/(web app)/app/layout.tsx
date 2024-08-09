"use client"
import AuthorizeLayout from "@/src/common/authentication/component/authorizationLayout"
import { store } from "@/src/web_app/common/store/store"
import DashboardView from "@/src/web_app/view/dashboardView"
import { Provider } from "react-redux"

type dashLayout = {
    children: React.ReactNode
}
const DashboardLayout = (props:dashLayout) =>{
    return(
        <Provider store={store}>
            <AuthorizeLayout redirect="/login">
                <DashboardView>
                    {props.children}
                </DashboardView>
            </AuthorizeLayout>
        </Provider>
    )
}

export default DashboardLayout