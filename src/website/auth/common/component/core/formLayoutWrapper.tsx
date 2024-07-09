type formWrapper = {
    children: React.ReactNode
}

const FormLayoutWrapper = (props: formWrapper) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3">
            {props.children}
        </div>
    )
}

export default FormLayoutWrapper;