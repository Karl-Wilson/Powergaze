type layout = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layout) =>{
    return(
        <div className="md:rounded-[42px] bg-white p-10 box-border w-full md:w-[754px] h-screen md:h-auto flex flex-col justify-center md:flex-none">
            {props.children}
        </div>
    )
}
export default LayoutWrapper