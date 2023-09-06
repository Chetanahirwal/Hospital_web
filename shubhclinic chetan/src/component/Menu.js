import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  useNavigate } from "react-router-dom"

import  {doctorReducer}  from "../redux/Slice"

export default function Menu()
{
   const dinfo =useSelector(state=>state.dinfo.value)
    const dispatch =useDispatch()
    const navigate = useNavigate()

    var logout=()=>{
      dispatch(doctorReducer({msg:undefined}))
      navigate('/')
    }
    return<>
   < div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="logo"><Link to="index.html"><img src="/logo.jpg" height={100} width={100}/></Link>&nbsp;&nbsp;<b className="alert-info text-lg">Shree ShubhClinic</b></div>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {dinfo.msg?<>
  {dinfo.type =="doctor" ?<>
               <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                  <Link className="nav-link" to="/drhome">Home</Link>
               </li>
               <li className="nav-item ">
                  <Link className="nav-link" to="/reception">New Reception</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/receptionDetails">Reception Details</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/patient">Patient</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  onClick={logout}>Logout</Link>
               </li>
            </ul>
            </> :""}

            {dinfo.type == "reception"? <><ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item ">
                  <Link className="nav-link" to="/appoinment">New Appoinment</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/patientDetails">Patient Details</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  onClick={logout}>Logout</Link>
               </li>
            </ul></>:""}
            </>:<><ul className="navbar-nav mr-auto">
               <li className="nav-item ">
                  <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item ">
                  <Link className="nav-link" to="/about">About</Link>
               </li>
               <li className="nav-item ">
                  <Link className="nav-link" to="/service">Service</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
               </li>
            </ul></>}
            
            
         </div>
      </nav> 
   </div>
    </>
}