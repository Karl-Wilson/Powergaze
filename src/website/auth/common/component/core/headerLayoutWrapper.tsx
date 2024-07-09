type headerWrapper = {
    children: React.ReactNode
}

const HeaderLayoutWrapper = (props: headerWrapper) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3">
            {props.children}
        </div>
    )
}

export default HeaderLayoutWrapper;