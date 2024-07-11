type layout = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layout) =>{
    return(
        <div className="md:rounded-[42px] bg-white p-10 box-border w-full md:w-[754px]">
            {props.children}
        </div>
    )
}
export default LayoutWrapper