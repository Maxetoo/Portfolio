import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  navMenuOpen: false,
}

export const sections = {
  Home: null,
    Introduction: null,
    About: null,
    Projects: null,
    Articles: null,
    Contact: null,
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    openNavMenu : (state, action) => {
      state.navMenuOpen = true

    },
    closeNavMenu : (state, action) => {
      state.navMenuOpen = false
     
    },

    scrollToSection : (state, action) => {
      window.scrollTo({
        top: action.payload.current.offsetTop - 100,
        behavior: 'smooth',
      })
      state.navMenuOpen = false
    }
  
  },
})

export const {
  openNavMenu,
  closeNavMenu,
  scrollToSection
} = eventSlice.actions
export default eventSlice.reducer
