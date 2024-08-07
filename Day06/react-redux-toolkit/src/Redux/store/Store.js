import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../Slices/CounterSlice'
import AnotherSlice from '../Slices/AnotherSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    another:AnotherSlice
  },
})
