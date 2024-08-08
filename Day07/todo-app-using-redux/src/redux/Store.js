import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './slices/TodoSlice'

export const store=configureStore({
    reducer : todoreducer
     
})