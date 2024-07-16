type dashLayout = {
    children: React.ReactNode
}
const DashboardLayout = (props:dashLayout) =>{
    return(
        <div className="bg-neutral-900">
            {props.children}
        </div>
    )
}
export default DashboardLayout