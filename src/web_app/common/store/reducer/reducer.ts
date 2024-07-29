import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuVisible: false,
  createPlan: false,
  updatePlan: false
}

export const appStore = createSlice({
  name: 'app_store',
  initialState,
  reducers: {
    setMenuVisibility: (state, action) => {
      state.isMenuVisible = action.payload
    },
    setCreatePlan: (state, action) => {
      state.createPlan = action.payload
    },
    setUpdatePlan: (state, action) => {
      state.updatePlan = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { setMenuVisibility, setCreatePlan, setUpdatePlan } = appStore.actions

export default appStore.reducer

