import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './slices/TodoSlice'
import fetchreducer from './slices/FetchSlice'

export const store=configureStore({
    reducer : {
        fetch: fetchreducer,
    },
        
    
})