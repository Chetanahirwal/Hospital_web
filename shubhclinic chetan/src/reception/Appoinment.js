import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { urls } from "../apis/Apis"
import ApiService from "../apis/Apis"

export default function NewAppoinment()
{  
  const[msg,setmsg]=useState("")
  
  const dinfo = useSelector(state=>state.dinfo.value)

   var namebox = useRef()
   var agebox = useRef()
   var genbox = useRef()
   var phonebox = useRef()
   var appointbox = useRef()
   var timebox = useRef()
  

  var Addappoinment=async(event)=>
  {  
     event.preventDefault()
      var ob ={
        name:namebox.current.value,
        age: agebox.current.value,
        sex:genbox.current.value,
        phoneNumber:phonebox.current.value,
        appointmentdate:appointbox.current.value,
        time:timebox.current.value,
        

      }
      console.log(ob)
      const response =await ApiService.PostApi(urls.ADDPATIENT,ob,dinfo.msg)
      setmsg(response.data.msg)
      console.log(response.data.msg)
      if(response.status)
         console.log(response.data)
      event.target.reset()
  }


    return<>
      <div className="col-md-6 text-center">
                  <div className="container-fluid text-center">
                    <form onSubmit={Addappoinment}>
                      <div className="row">
                     <h1 className="book_text"> Appoinment</h1>
                     <div className="col-12 col-sm-6">
                     <input type="text" ref={namebox} className="form-control" placeholder="Name" />
                     </div>
                     <div className="col-12 col-sm-6 ">
                     <input type="number" ref={agebox} className="form-control" placeholder="Age"/>
                     </div>
                     <div className="col-12 col-sm-6 mt-2 ">
                     <input type="text" ref={genbox} className="form-control" placeholder="sex" />
                     </div>
                     <div className="col-12 col-sm-6 mt-2">
                     <input type="number" ref={phonebox} className="form-control" placeholder="Phone Number"/>
                     </div>
                     <div className="col-12 col-sm-6 mt-2">
                     <input type="date" ref={appointbox} className="form-control" placeholder="Appoinment Date" />
                     </div>
                     <div className="col-12 col-sm-6 mt-2">
                     <input type="time"ref={timebox} className="form-control" placeholder="time"/>
                     </div>
                     </div>
                     <div className="mt-2 mb-2">
                    <button className="btn-success form-control">Appoinment</button>
                    </div>
                     </form>
                  </div>
                  <b>{msg}</b>
                  </div>
    </>
}