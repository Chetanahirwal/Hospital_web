import { useEffect } from "react"
import { useSelector } from "react-redux"
import ApiService , {urls,RECEPTIONLIST} from "../apis/Apis"
import { useDispatch } from "react-redux"
import { receptionReducer,deleteReception} from "../redux/ReceptionSlice"
import { updateReception } from "../redux/UpdateSlice"
import { useNavigate } from "react-router-dom"

export function ReceptionDetails()
{
    // const[recep,setRecep]=useState([])
    const dinfo = useSelector(state=>state.dinfo.value)
    const reception = useSelector(state=>state.reception.value)
    

   const dispatch = useDispatch()
   const navigate =useNavigate()
    const loadReception=async()=>
    {
       const response =  await ApiService.GetApiCall(urls.RECEPTIONLIST,dinfo.msg)
       console.log(response.data)
       if(response.status){
    //    setRecep(response.data.data)
    dispatch(receptionReducer(response.data.data))
    }
  }
  
    useEffect(()=>{
        loadReception()
    },[])

    const dele=async(id)=>
    {    
        var confirm= window.confirm("Are you sure you want delete this Reception")
        alert(id)
        const URL = urls.DELETE_RECEPTION + id
     const response = await ApiService.PutApiCall(URL,null,dinfo.msg)
     console.log(response)
     if(response.status){
        var list = reception.filter(ob=>ob.id!=response.data.data.id)
        dispatch( deleteReception(list))
     }
    }
    const update =(ob)=>
    {
       alert(ob)
       dispatch(updateReception(ob))
       navigate("/updateReception")
    }
   
    return<>
        <div className="contact_box">
        
        <h1 className="book_text">Reception Details</h1>
         <table className="table">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Operation</th>
                    </tr>
            </thead>
            <tbody>
                {reception.map((ob,index)=><tr>
                    <td>{index+1}</td>
                    <td>{ob.id}</td>
                    <td>{ob.name}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.email}</td>
                    <td>{ob.password}</td>
                    <td>{ob.raddress}</td>
                    <td>
                        <button className="btn-sm btn-success" onClick={()=>update(ob)} >Update</button>&nbsp;
                        <button className="btn-sm btn-danger" onClick={()=>dele(ob.id)} >Delete</button>
                    </td>

                </tr>)}
            </tbody>
         </table>
       
       
   </div>
    </>
}