import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiService , {urls,PATIENTLIST} from "../apis/Apis"
import { patientreducer,deletePatient } from "../redux/PatientSlice"

export default function PatientDetails()
{
    const dinfo = useSelector(state=>state.dinfo.value);
    console.log(dinfo)
    const Patientlist = useSelector(state=>state.patient.value);
    console.log("list",Patientlist)
    
   const dispatch = useDispatch()
   useEffect(()=>{
    loadPatient()
  },[])

   
    const loadPatient=async()=>
    {
       const response =  await ApiService.GetApiCall(urls.PATIENTLIST,dinfo.msg)
       console.log(response.data)
    //    setPatient(response.data.data)
    dispatch(patientreducer(response.data.data))
    }

    const delePatient=async(id)=>
    {
        alert(id)
        const URL = urls.DELETE_PATIENT
       const response = await ApiService.DeleteApiCall(URL,null,dinfo.msg)
       console.log(response)
       if(response.status){
        var list = Patientlist.filter(ob=>ob.id!=response.data.data.id)
        dispatch(deletePatient(list))
     }
    }
    
   
    return<>
        <div className="contact_box">
        
        <h1 className="book_text">Patient Details</h1>
         <table className="table">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Mobile No.</th>
                    <th>Desease</th>
                    <th>Appoinment Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {Patientlist.map((ob,index)=><tr>
                    <td>{index+1}</td>
                    <td>{ob.id}</td>
                    <td>{ob.name}</td>
                    <td>{ob.sex}</td>
                    <td>{ob.age}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.daignosis}</td>
                    <td>{ob.appointmentdate}</td>
                    <td>{ob.time}</td>
                    


                    <td>
                        
                        <button className="btn-sm btn-danger"onClick={()=>delePatient(ob.id)} >Delete</button>
                    </td>

                </tr>)}
            </tbody>
         </table>
       
       
   </div>
    </>
}