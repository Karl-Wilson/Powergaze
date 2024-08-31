type wrapper = {
    children: React.ReactNode
}

const GridWrapper = (props: wrapper) =>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 max-w-[1364px] mx-auto">
            {props.children}
        </div>
    )
}

export default GridWrapper