import { useRef, useState } from "react"
import ApiService , {urls,DOCREGISTER} from "../apis/Apis"
import { Link } from "react-router-dom"
export default function Register()
{
    const [msg,setmsg]=useState([])
    var namebox = useRef()
    var emailbox = useRef() 
    var passbox = useRef()
     var phonebox = useRef()
   

     var Register=async(event)=>
     {
        event.preventDefault()

        var ob={
               name:namebox.current.value,
               email:emailbox.current.value,
               password:passbox.current.value,
               phoneNumber:phonebox.current.value,
               }

      console.log(ob)
      const response = await ApiService.PostApiCall(urls.DOCREGISTER,ob)
      setmsg(response.data.msg)
      if(response.status)
      console.log(response.data)
      
     }

    return<>
    <div className="contact_box">
        <form className="form-control" onSubmit={Register}>
        <h1 className="book_text">Register</h1>
         <input type="text" ref={namebox} placeholder="Name" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="email" ref={emailbox}  placeholder="Email Address" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="password"  ref={passbox} placeholder="Password" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="text"  ref={phonebox}  placeholder="contact" className="form-control" />&nbsp;&nbsp;&nbsp;
         <button className="btn-success form-control">Register</button>
         <b>{msg}</b>
       </form>
       <b className="text-info"><Link to="/login">LOGIN...</Link></b><br/>
       
   </div>
    </>
}