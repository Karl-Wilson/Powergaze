import ConsumptionLayout from "../consumptionDisplay/component/layout/consumptionLayout"
import Usage from "../usage/component/layout/usage"

const Dashboard = () =>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
            <ConsumptionLayout class="col-start-1 col-span-4 md:col-span-12 row-start-1"/>
            <Usage class="row-start-2 col-start-1 col-span-4 md:col-span-9"/>
        </div>
    )
}

export default Dashboard