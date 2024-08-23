import BodyContent from "../container/bodyContent"
import BodyHeader from "../container/bodyHeader"

const Body = ()=>{
    return(
        <div className="w-full mt-4">
            <BodyHeader/>
            <BodyContent/>
        </div>
    )
}
export default Body