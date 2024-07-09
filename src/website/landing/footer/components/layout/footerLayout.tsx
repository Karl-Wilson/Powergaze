import FooterContainer from "../container/footerContainer"

type footerLayout = {

}

const FooterLayout = (props: footerLayout) =>{
    return(
        <footer className="px-6 xl:px-0 box-border">
            <FooterContainer/>
        </footer>
    )
}

export default FooterLayout