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
      // let secs = Array.from(action.payload)
      // console.log(secs);

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
    },

    setActiveSection: (state, action) => {
      // for (const [key, value] of action.payload) {
      //     console.log(value);
      // }
      // let arr = Object.values(action.payload)
      // console.log(arr);

      console.log(action.payload);
    }
  
  },
})

export const {
  openNavMenu,
  closeNavMenu,
  scrollToSection,
  setActiveSection
} = eventSlice.actions
export default eventSlice.reducer
