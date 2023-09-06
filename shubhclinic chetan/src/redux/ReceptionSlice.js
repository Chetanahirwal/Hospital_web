import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"Receptionlist",
    initialState:{
        value:[]
    },
    reducers:{
        receptionReducer:(state,action)=>{
            state.value=action.payload
        },
        deleteReception:(state,action)=>{
            state.value=action.payload
        }
    }
});

export const {receptionReducer, deleteReception}= slice.actions
export default slice.reducer