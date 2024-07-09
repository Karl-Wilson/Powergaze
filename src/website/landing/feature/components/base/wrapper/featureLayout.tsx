

type layoutWrapper = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layoutWrapper) =>{
    return(
        <div className="px-6 xl:px-24 box-border py-10 md:py-16">
            {props.children}
        </div>
    )
}

export default LayoutWrapper