import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchthunk=createAsyncThunk("fetchthunk",async()=>{
    const result=await fetch("https://jsonplaceholder.typicode.com/todos")
    return result.json()


})

 const fetchSlice=createSlice({
    name:"fetchAPI",
    initialState:{
        isLoading:false,
        products:null,
        isError:false

    },
    extraReducers: (builder) => {

        builder.addCase(fetchthunk.pending,(state,action)=>{
            state.isLoading=true;
        })

        builder.addCase(fetchthunk.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.isLoading=false;
        })

        builder.addCase(fetchthunk.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            
        })

        
    }

})

export default fetchSlice.reducer
