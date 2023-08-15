import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  navMenuOpen: true
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    openNavMenu : (state, action) => {
      state.navMenuOpen = true

    },
    closeNavMenu : (state, action) => {
      // state.navMenuOpen = false
      if (state.navMenuOpen) {
        state.navMenuOpen = false
      }
    },
  },
})

export const {
  openNavMenu,
  closeNavMenu,
} = eventSlice.actions
export default eventSlice.reducer
