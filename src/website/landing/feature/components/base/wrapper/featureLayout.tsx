

type layoutWrapper = {
    children: React.ReactNode
}

const LayoutWrapper = (props: layoutWrapper) =>{
    return(
        <div className="px-24 box-border py-16">
            {props.children}
        </div>
    )
}

export default LayoutWrapper