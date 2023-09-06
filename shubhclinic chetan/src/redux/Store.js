import { configureStore } from "@reduxjs/toolkit";
import  doctorReducer  from "./Slice";
import  patientreducer  from "./PatientSlice";
import  receptionReducer  from "./ReceptionSlice";
import  updateReception  from "./UpdateSlice";



const store= configureStore({
    reducer:{
        dinfo:doctorReducer,
        patient:patientreducer,
        reception:receptionReducer,
        updateR:updateReception,
        
    }
});

// store.subscribe(()=>{

//     const data = store.getState().Ddata.value;
//     const savedata = JSON.stringify(data)
//     localStorage.setItem("mydata",savedata)

// })

export default store

