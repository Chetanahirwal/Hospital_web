import { useRef, useState } from "react"
import ApiService , {urls ,LOGIN} from "../apis/Apis"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { doctorReducer } from "../redux/Slice"
export default function Login()
{
    const [msg,setmsg]=useState()
    
    const dinfo = useSelector(state=>state.dinfo.value)
    const dispatch =useDispatch()
    const navigate = useNavigate()
    var emailbox = useRef() 
    var passbox = useRef()
     
   

     var Login=async(event)=>
     {
        event.preventDefault()
        var ob={
              email:emailbox.current.value,
              password:passbox.current.value,
               }
     
      //  console.log(ob)
      const response = await ApiService.PostApiCall(urls.LOGIN,ob)
      setmsg(response.data.msg)
      if(response.data.status){
      // console.log(response.data)
      dispatch(doctorReducer({...response.data}))
      // console.log()
      navigate("/doctorhome")
      }
      event.target.reset()

    }
      
    return<>
    <div className="contact_box">
        <form className="form-control" onSubmit={Login}>
        <h1 className="book_text">Login</h1>
         
         <input type="email" ref={emailbox} placeholder="Email Address" className="form-control" />&nbsp;&nbsp;&nbsp;
         <input type="password" ref={passbox}  placeholder="Password" className="form-control" />&nbsp;&nbsp;&nbsp;
         
         <button className="btn-success form-control">Login</button>
       </form>
       <b>{msg}</b><br/>
       <b className="text-info"><Link to="/register">Register..</Link></b>
   </div>
    </>
}