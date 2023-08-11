import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../Features/eventReudcer'

export const store = configureStore({
  reducer: {
    eventSlice: eventReducer,
  },
})
