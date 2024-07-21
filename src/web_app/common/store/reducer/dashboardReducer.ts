import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  consumption: { 
    today: {energy: 34.5, cost: 4.5, status: "High"},
    yesterday: {energy: 31.5, cost: 4.3, status: "Moderate"},
    total: {energy: 54.5, cost: 9.5, status: "Good"}},
}

export const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setConsumption: (state, action) => {
      state.consumption = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setConsumption } = dashboard.actions

export default dashboard.reducer

