import Consumption from "../consumption"
import Status from "../status"
import Tarriff from "../tarriff"
import UserAppliance from "../userAppliance"


const TransmitterView = () =>{
    return(
        <div className="w-100 h-100 p-10 box-border">
            <Consumption/>
            <UserAppliance/>
            <Tarriff/>
            <Status/>
        </div>
    )
}

export default TransmitterView