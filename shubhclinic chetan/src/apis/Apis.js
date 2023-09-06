import axios from "axios"

class ApiService{

    PostApiCall(url,data)
    {
   return axios.post(url,data)
    }
    PostApi(url,data,msg)
    {
        return axios.post(url,data,{headers:{Authorization:"bearer " + msg}})
    }
    GetApiCall (url,msg)
    {
        return axios.get(url,{headers:{Authorization:"bearer "+msg}})
    }
    PutApiCall(url,data,msg)
    {
        return axios.put(url,data,{headers:{Authorization:"bearer "+msg}})
    }
    DeleteApiCall(url,msg)
    {
        return axios.delete(url,{headers:{Authorization:"bearer "+msg}})
    }
}
const SERVER="http://apps.codebetter.in:8082"

 export const urls ={
    DOCREGISTER :`${SERVER}/clinic/auth/doctor/save`,
    LOGIN :`${SERVER}/clinic/auth/login`,
    ADDRECEPTION:`${SERVER}/clinic/api/reception/save`,
    RECEPTIONLIST:`${SERVER}/clinic/api/reception/lists`,
    ADDPATIENT: `${SERVER}/clinic/api/patient/addpatient`,
    PATIENTLIST:`${SERVER}/clinic/api/patient/lists`,
    All_PATIENTLIST:`${SERVER}/clinic/api/patient/list`,
    DELETE_RECEPTION:`${SERVER}/clinic/api/reception/delete/`,
    DELETE_PATIENT:`${SERVER}/clinic/api/patient/delete/`,
    UPDATE_RECEPTION:`${SERVER}/clinic/api/reception/updateReception/`,
    DONE:`${SERVER}/clinic/api/patient/done/`,
    UNDO:`${SERVER}/clinic/api/patient/undo`,
}
 
export default new ApiService


