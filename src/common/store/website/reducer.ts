import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const websiteStore = createSlice({
  name: 'website_store',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = websiteStore.actions

export default websiteStore.reducer