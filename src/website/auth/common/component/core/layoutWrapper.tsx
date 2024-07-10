type layout = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layout) =>{
    return(
        <div className="md:rounded-[42px] bg-white p-14 box-border">
            {props.children}
        </div>
    )
}
export default LayoutWrapper