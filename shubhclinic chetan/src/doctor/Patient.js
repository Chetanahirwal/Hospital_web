import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiService , {urls,All_PATIENTLIST} from "../apis/Apis"
import { patientreducer,updatePatient, uncheckPatient } from "../redux/PatientSlice"


export default function Patient()
{
    const dinfo = useSelector(state=>state.dinfo.value);
    const Patientlist = useSelector(state=>state.patient.value);
    // const updateP = useSelector(state=>state.updateP.value)
   const dispatch = useDispatch()
   useEffect(()=>{
    loadPatient()
  },[])

   
    const loadPatient=async()=>
    {
       const response =  await ApiService.GetApiCall(urls.All_PATIENTLIST,dinfo.msg)
       console.log(response.data)
    //    setPatient(response.data.data)
    dispatch(patientreducer(response.data.data))
    }

    const Check=async(id)=>
    {   
        alert(id)
        
        const URL = urls.DONE+id
       const response = await ApiService.PutApiCall(URL,null,dinfo.msg)
         console.log(response)
         if(response.data.status)
         { var list = Patientlist.filter(ob=>ob.id!=response.data.id) 
            dispatch(updatePatient(list))
         }
    }

    const Uncheck=async(id)=>
    {  
        alert(id)

        const URL = urls.UNDO+id
        const response = await ApiService.PutApiCall(URL,null,dinfo.msg)
        console.log(response)
         if(response.data.status)
         { var newlist = Patientlist.filter(ob=>ob.id!==id) 
            dispatch(uncheckPatient(newlist))
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
                     {ob.activeStatus ?<button className="btn-sm btn-danger" onClick={()=>Check(ob.id)} >Check</button>
                        :<button className="btn-sm btn-success"onClick={()=>Uncheck(ob.id)}>Uncheck</button>}
                    </td>

                </tr>)}
            </tbody>
         </table>
       
       
   </div>
    </>
}