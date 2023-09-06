import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"Patientlist",
    initialState:{
        value:[]
    },
    reducers:{
        patientreducer:(state,action)=>{
            state.value=action.payload
         },
         deletePatient:(state,action)=>{
            state.value=action.payload
         },
         updatePatient:(state,action)=>{
            state.value=action.payload
         },
         uncheckPatient:(state,action)=>{
            state.value=action.payload
         },
    }
});

export const {patientreducer,deletePatient,updatePatient, uncheckPatient}=slice.actions
export default slice.reducer