import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuVisible: false,
}

export const appStore = createSlice({
  name: 'app_store',
  initialState,
  reducers: {
    setMenuVisibility: (state, action) => {
      state.isMenuVisible = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMenuVisibility } = appStore.actions

export default appStore.reducer

