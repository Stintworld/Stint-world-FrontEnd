import "../Stylesh/Empviewallapplicants.css";
import Footer from "./Footer.jsx";
import Adminviewapplicantcard from "./Adminviewapplicantcard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import {useParams } from "react-router-dom/cjs/react-router-dom.min.js";

const Adminviewapplicants = () => {
const {jobId} = useParams()
const [loaderState, setLoaderState] = useState(true)
const [job_Applicants_Details, setJob_Applicants_Details]= useState()
useEffect(()=>{
  const jobApplicantDetails = axios.get(`https://www.stint.world/applicants/getbyjobid/${jobId}`)
  .then((response)=>{
    return response.data
  })
  .then((data)=>{
    if(data.statusCode === 200)
      {
        setJob_Applicants_Details(data.data)
        setLoaderState(false)
      }
  })
  .catch((err)=>{
    if (err.message === "Request failed with status code 500") {
      alert(`${err.response.data.status} ${err.response.data.error}`)
  }
  else if (err.message === "Network Error") {
      alert(`${err.message} : Request failed`)
  }
  else if (err.message === "Request failed with status code 500") {
      alert(`${err.response.data.status} ${err.response.data.error}`)
  }
  else if (err.message === "Request failed with status code 406") {
      alert(`${err.response.data.status} ${err.response.data.error}`)
  }
  else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
      alert(`${err.response.data.message}`)
  }
  else {
      alert(`Something went wrong! ${err}`)
  }
  })
},[jobId])  

    return ( 
        <>
        
       {(loaderState === false && job_Applicants_Details && job_Applicants_Details.length>0 ) && <Adminviewapplicantcard job_Applicants_Details={job_Applicants_Details}></Adminviewapplicantcard>}
       {(loaderState === false && job_Applicants_Details && job_Applicants_Details.length===0 ) && 
       <div className="container m-5 p-5">
          <h1>No application for this job</h1>
          <p>All applicants info will be dispayed here</p>
       </div>
       }
        { loaderState === true &&  <Loader></Loader>}
        <Footer></Footer>
        </>
     );
}
 
export default Adminviewapplicants;