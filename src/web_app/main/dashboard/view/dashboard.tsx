import ConsumptionLayout from "../consumptionDisplay/component/layout/consumptionLayout"

const Dashboard = () =>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-12">
            <ConsumptionLayout class="col-start-1 col-span-4 md:col-span-12"/>
        </div>
    )
}

export default Dashboard