type pageWrapper = {
    children: React.ReactNode
}

const PageWrapper = (props: pageWrapper) =>{
    return(
        <main className="md:px-4 bg-bgWebsite md:pt-3">
            {props.children}
        </main>
    )
}

export default PageWrapper