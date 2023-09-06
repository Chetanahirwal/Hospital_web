import { Route, Routes } from "react-router-dom";

import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Login  from "./component/Login";
import Menu from "./component/Menu";
import Register from "./component/Register";
import Service from "./component/Service";
import DoctorHome from "./doctor/DoctorHome";
import { useSelector } from "react-redux";
import Reception from "./doctor/NewReception";
import WrongURL from "./component/WrongURL";
import { ReceptionDetails } from "./doctor/ReceptionDetails";
import NewAppoinment from "./reception/Appoinment";
import PatientDetails from "./reception/PatientDetails";
import Patient from "./doctor/Patient";
import UpdateReception from "./doctor/UpdateReception";

export default function App()
{
    const dinfo =useSelector(state=>state.dinfo.value)

    return<>
    <Menu/>
    <Routes>
    {dinfo.msg?<>
        <Route path="/doctorhome" element={<DoctorHome/>}/>
        <Route path="/reception" element={<Reception/>}/>
        <Route path="/receptionDetails" element={<ReceptionDetails/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/appoinment" element={<NewAppoinment/>}/>
        <Route path="/patientDetails" element={<PatientDetails/>}/>
        <Route path="/updateReception" element={<UpdateReception/>}/>


    </>:<>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </>
   }
    {/* <Route path="*" element={<WrongURL/>}/> */}
    </Routes>
    </>
}