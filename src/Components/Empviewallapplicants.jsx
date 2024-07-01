import "../Stylesh/Empviewallapplicants.css";
import Empnavigationbar from "./Empnavigationbar.jsx";
import Footer from "./Footer.jsx";
import Empapplicantcard from "./Empapplicantcard.jsx";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import axios from "axios";
import Loader from "./Loader.jsx";
import { useEffect, useState } from "react";



const Empviewallapplicants = ({logout}) => {
  let { id: jobId } = useParams();
  const history = useHistory();
  const [loaderState, setLoaderState] = useState(true)
  const [job_Applicants_Details, setJob_Applicants_Details]= useState([])
  const [applicantCount, setApplicantCount]= useState(0)

  useEffect(()=>{
    const jobApplicantDetails = axios.get(`https://www.stint.world/applicants/getbyjobid/${jobId}`)
    .then((response)=>{
      return response.data
    })
    .then((data)=>{
      if(data.statusCode === 200)
        {
          setJob_Applicants_Details(data.data)
          setApplicantCount(data.data.length)
          setLoaderState(false)
        }
    })
    .catch((err)=>{
      setLoaderState(false)
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

  const handleGoBack=(e)=>{
    e.preventDefault()
    history.goBack()
}

    return ( 
        <>
        <Empnavigationbar logout={logout}></Empnavigationbar>
        { (loaderState === false && job_Applicants_Details.length>0 )&& <Empapplicantcard job_Applicants_Details={job_Applicants_Details} jobId={jobId}   applicantCount={applicantCount}></Empapplicantcard>}
        { loaderState === true &&  <Loader></Loader>}
        {  (loaderState === false &&  job_Applicants_Details.length === 0 )&&  
          <div className="container m-5 p-5">
            <h3>There is no application for this job</h3>
            <p>Applicant info will be displayed here. <Link onClick={handleGoBack} >Click Here </Link> to go back</p>
          </div>      
        }
        <Footer></Footer>
        </>
     );
}
 
export default Empviewallapplicants;