import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  consumption: { 
    Today: {},
    Yesterday: {},
    Total: {}
  },
    defaultCurrency: "USD",
    exchangeRate: {
      NGN: {rate: 1600, symbol: "N"}, 
      GBP: {rate: 1.28, symbol: "GBP"},  
      USD: {rate: 1, symbol: "$"}
    },
    dashboardCurrency: "USD",
    applianceStatusColName: ["Name", "Status", "Usage", "Cost"],
    applianceStatus: [
        {name: "Refrigerator", status: true, usage: 2.3, cost: 1.4},
        {name: "Television and video home studio set", status: true, usage: 2.3, cost: 1.4},
        {name: "Television", status: true, usage: 2.3, cost: 1.4},
        {name: "Television", status: true, usage: 2.3, cost: 1.4}
    ],
    applianceUsage: [
      ["Task", "Hours per Day"],
      ["Laptop", 11],
      ["Television", 2],
      ["Bulbs", 2],
      ["Refrigerator TV", 2],
      ["Washer", 7],
  ], 
  usage: {Yearly: [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ], Monthly: [
    ["Monthly", "Sales", "Expenses"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
  ], Daily: [
    ["Daily", "Sales", "Expenses"],
    ["1", 1000, 400],
    ["2", 1170, 460],
    ["3", 660, 1120],
    ["4", 1030, 540],
  ]},
  energy_plan: [
    {name: "Day Plan", isActive: true}, 
    {name: "Night Plan", isActive: false},
    {name: "Daysaver", isActive: false},
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
    },
    setApplianceUsage: (state, action) =>{
      state.applianceUsage = action.payload
    },
    setUsage: (state, action) =>{
      state.usage = action.payload
    },
    setEnergyPlan: (state, action) =>{
      state.energy_plan = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setConsumption, setDefaultCurrency, setExchangeRate, setDashboardCurrency, 
  setApplianceStatusColName, setApplianceStatus, setApplianceUsage, setUsage, setEnergyPlan } = dashboard.actions

export default dashboard.reducer

