import { RootState } from "@/src/web_app/common/store/store"
import { useSelector } from "react-redux"
import { currencyConverter } from "../helper"

const useCurrencyConverter = () =>{
    let defaultCurrency = useSelector((state:RootState)=>state.dashboard.defaultCurrency)
    let dashboardCurrency = useSelector((state:RootState)=>state.dashboard.dashboardCurrency)
    let exchangeRate = useSelector((state:RootState)=>state.dashboard.exchangeRate)
    
    const converter = (amount: number) =>{
        return currencyConverter(dashboardCurrency, defaultCurrency, amount, exchangeRate)
    }

    return {converter, exchangeRate, dashboardCurrency}
}

export default useCurrencyConverter