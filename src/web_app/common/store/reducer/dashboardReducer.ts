import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  consumption: { 
    today: {energy: 34.5, cost: 4.5, status: "High"},
    yesterday: {energy: 31.5, cost: 4.3, status: "Moderate"},
    total: {energy: 54.5, cost: 9.5, status: "Good"}},
    defaultCurrency: "USD",
    exchangeRate: {NGN: {rate: 1600, symbol: "N"}, GBP: {rate: 1.28, symbol: "GBP"},  USD: {rate: 1, symbol: "$"}},
    dashboardCurrency: "USD",
    applianceStatusColName: ["Name", "Status", "Usage", "Cost"],
    applianceStatus: [
        {name: "Refrigerator", status: true, usage: 2.3, cost: 1.4},
        {name: "Television and video home studio set", status: true, usage: 2.3, cost: 1.4},
        {name: "Television", status: true, usage: 2.3, cost: 1.4},
        {name: "Television", status: true, usage: 2.3, cost: 1.4}
    ]
}

export const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setConsumption: (state, action) => {
      state.consumption = action.payload
    },
    setDefaultCurrency: (state, action) => {
      state.defaultCurrency = action.payload
    },
    setExchangeRate: (state, action) =>{
      state.exchangeRate = action.payload
    },
    setDashboardCurrency: (state, action) =>{
      state.dashboardCurrency = action.payload
    },
    setApplianceStatusColName: (state, action) =>{
      state.applianceStatusColName = action.payload
    },
    setApplianceStatus: (state, action) =>{
      state.applianceStatus = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setConsumption, setDefaultCurrency, setExchangeRate, setDashboardCurrency, setApplianceStatusColName, setApplianceStatus } = dashboard.actions

export default dashboard.reducer

