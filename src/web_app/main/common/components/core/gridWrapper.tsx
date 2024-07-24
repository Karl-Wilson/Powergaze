type wrapper = {
    children: React.ReactNode
}

const GridWrapper = (props: wrapper) =>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            {props.children}
        </div>
    )
}

export default GridWrapper