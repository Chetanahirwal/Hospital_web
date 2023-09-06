import { useRef, useState } from "react"
import ApiService , {urls,ADDRECEPTION} from "../apis/Apis"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Reception()
{   const dinfo = useSelector(state=>state.dinfo.value)
  const token=dinfo.msg
  // console.log(token)
    const [msg,setmsg]=useState("")
    var namebox = useRef()
    var emailbox = useRef() 
    var passbox = useRef()
     var phonebox = useRef()
   var addressbox = useRef()

     var Reception=async(event)=>
     {
        event.preventDefault()

        var ob={
               name:namebox.current.value,
               email:emailbox.current.value,
               password:passbox.current.value,
               phoneNumber:phonebox.current.value,
               raddress:addressbox.current.value,
               }

      // console.log(ob)
      const response = await ApiService.PostApi(urls.ADDRECEPTION,ob,token)
      setmsg(response.data.msg)
      if(response.status)
      console.log(response.data)
      event.target.reset()
     }
    

    return<>
    
    <div className="contact_box">
        <form className="form-control" onSubmit={Reception}>
        <h1 className="book_text">Reception</h1>
         <input type="text" ref={namebox} placeholder="Name" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="email" ref={emailbox}  placeholder="Email Address" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="password"  ref={passbox} placeholder="Password" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="text"  ref={phonebox}  placeholder="contact" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="text"  ref={addressbox}  placeholder="Address" className="form-control" />&nbsp;&nbsp;&nbsp;

         <button className="btn-success form-control">Add Reception</button>
         <b>{msg}</b>
       </form>
       
       
   </div>
    </>
}