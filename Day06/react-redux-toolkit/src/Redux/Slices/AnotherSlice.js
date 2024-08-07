import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: 0,
  }
export const AnotherSlice= createSlice({
    name: 'Another',
    initialState,
    reducers: {
        incrby5:(state,action)=>{
            state.val += action.payload

        },
        decrby5:(state,action)=>{
            state.val -= action.payload

        }
    }
})

export const { incrby5, decrby5 } = AnotherSlice.actions
export default AnotherSlice.reducer