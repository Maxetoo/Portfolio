import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {},
})

// export const {} = eventSlice.actions
export default eventSlice.reducer
