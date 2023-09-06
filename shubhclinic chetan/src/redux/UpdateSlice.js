import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"updatelist",
    initialState:{
        value:undefined
    },
    reducers:{
        updateReception:(state,action)=>{
            state.value=action.payload
        },
        
    }
});

export const {updateReception}= slice.actions
export default slice.reducer