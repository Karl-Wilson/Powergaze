type layout = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layout) =>{
    return(
        <div className="md:rounded-[42px] bg-white px-14 box-border grid grid-cols-1 md:grid-cols-3">
            {props.children}
        </div>
    )
}
export default LayoutWrapper