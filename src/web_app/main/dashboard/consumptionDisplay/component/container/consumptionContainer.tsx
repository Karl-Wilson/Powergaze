import useCurrencyConverter from "@/src/common/utils/hooks/cuurrencyConverter"
import ConsumptionDisplay from "../core/consumptionDisplay"
import { undefinedTest } from "@/src/web_app/common/utils"
type consumption = {
    data: {energy?: number, cost?: number, status?: string}
}

const ConsumptionContainer = ({data}: consumption) =>{
    const {converter, exchangeRate, dashboardCurrency } = useCurrencyConverter()

    return(
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-2 lg:gap-x-6 mt-6">
            <ConsumptionDisplay title="Usage" icon="../Storage.png" value={undefinedTest(data.energy)} unit="KWh" 
                class="col-start-1 col-span-4 md:col-start-1 md:col-span-4 bg-gradient-to-r to-[#5F52F8] from-[#4E3FDD] h-[179px] mb-4 md:mb-0" unitClass="ml-2"/>
            <ConsumptionDisplay title="Cost" icon="../Exchange.png" value={converter(undefinedTest(data.cost))} unit={exchangeRate[dashboardCurrency as keyof typeof exchangeRate].symbol} unitClass="order-1 mr-2" valueClass="order-2" 
                class="col-start-1 col-span-4 md:col-start-5 md:col-span-4 bg-gradient-to-r to-[#47B7F6] from-[#4399EF] h-[179px] mb-4 md:mb-0"/>
            <ConsumptionDisplay title="Status" icon="../Signal.png" value={undefinedTest(data.status)} 
                class="col-start-1 col-span-4 md:col-start-9 md:col-span-4 bg-gradient-to-r to-[#AD4AFD] from-[#9009FD] h-[179px]"
                valueClass="break-all"/>
        </div>
    )
}
export default ConsumptionContainer