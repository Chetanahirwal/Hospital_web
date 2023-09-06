import { useRef, useState } from "react"
import ApiService , {urls,UPDATE_RECEPTION } from "../apis/Apis"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateReception } from "../redux/UpdateSlice"
export default function UpdateReception()
{   const dinfo = useSelector(state=>state.dinfo.value)
  const token=dinfo.msg
  const datatoupdate =useSelector(state=>state.updateR.value)
  console.log(datatoupdate)
  const dispatch = useDispatch()
    const [msg,setmsg]=useState("")
    var namebox = useRef() 
    var passbox = useRef()
     var phonebox = useRef()
   var oldpassbox =useRef()

     var Reception=async(event)=>
     {
        event.preventDefault()

        var ob={
               name:namebox.current.value,
               password:passbox.current.value,
              oldPassword:oldpassbox.current.value,
               phoneNumber:phonebox.current.value,
               
               }

      console.log(ob)
      const URL = urls.UPDATE_RECEPTION + datatoupdate.id
      const response = await ApiService.PutApiCall(URL,ob,token)
      setmsg(response.data.msg)
      if(response.data.status){
        dispatch(updateReception(response.data))
      }
      event.target.reset()
      console.log(response)

     }

    return<>
    
    <div className="contact_box">
        <form className="form-control" onSubmit={Reception}>
        <h1 className="book_text">Update Reception</h1>
         <input type="text" defaultValue={datatoupdate.name} ref={namebox} placeholder="Name" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="password"  ref={passbox} placeholder="Password" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="password"  defaultValue={datatoupdate.oldPassword}  ref={oldpassbox} placeholder="oldPassword" className="form-control" />&nbsp;&nbsp;&nbsp;

         <input type="text" defaultValue={datatoupdate.phoneNumber} ref={phonebox}  placeholder="contact" className="form-control" />&nbsp;&nbsp;&nbsp;

         <button className="btn-success form-control">Update Reception</button>
         <b>{msg}</b>
       </form>
       
       
   </div>
    </>
}