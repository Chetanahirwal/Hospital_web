import { createSlice } from "@reduxjs/toolkit";

// const savedata=JSON.parse(localStorage.getItem("mydata"))||{}
// const initialState ={
//     value:savedata||{}
// }

const slice=createSlice({
    name:"doctor",
    initialState:{
        value:{}
    },
    reducers:{
        doctorReducer:(state,action)=>{
            state.value=action.payload
        }
    }
});
export const {doctorReducer}=slice.actions
export default slice.reducer


