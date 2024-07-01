import { useEffect, useState } from "react";
import Empnavigationbar from "../Components/Empnavigationbar.jsx";
import Emppostedjobcard from "../Components/Emppostedjobcard.jsx";
import Footer from "../Components/Footer.jsx";
import Loader from "../Components/Loader.jsx";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.js";



const Emppostedjobs = ({logout}) => {

  const [postedJobs, setPostedJobs]=useState()
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const [dataNone, setDataNone]= useState(false);
  // localStorage.setItem("employerId", "1")
  const EmpID=localStorage.getItem("employerId")

  useEffect(() => {
    const allJobs = axios.get(`https://www.stint.world/jobs/getjobs/${EmpID}`)
    .then((response) => {
      return response.data
    })
      .then((data) => {
        if (data.statusCode === 200) {
          setPostedJobs(data.data.reverse())
          setLoaderState(false);
          setErrMessageState(false)
          if(data.data.length===0)
            {
              setDataNone(true)
            }
            else
            {
              setDataNone(false)
            }
        }
      })
      .catch((err) => {
        setErrMessageState(true)
        if (err.message === "Request failed with status code 500") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Network Error") {
          setErrMessage(`${err.message} : Request failed`)
      }
      else if (err.message === "Request failed with status code 500") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Request failed with status code 406") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
          setErrMessage(`${err.response.data.message}`)
      }
      else {
          setErrMessage(`Something went wrong! ${err}`)
      }
      })
  }, [])


    return ( 
        <>
        <Empnavigationbar logout={logout}/>
        {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage} 
      </div>}
       { (loaderState === false && dataNone === false) &&   <Emppostedjobcard postedJobs={postedJobs}></Emppostedjobcard>}
       { (loaderState === false && dataNone === true) &&  <div className="constainer vh-100 d-flex justify-content-center align-items-center">
          <span>
          <h3>No Data Available</h3>
          <p>Posted jobs will appear here</p>
          <p><Link to="/postjob">Click here</Link> to post your first job</p>
          </span>
       </div>}
       {loaderState === true &&   <Loader></Loader> }
        <Footer/>
        </>
     );
}
 
export default Emppostedjobs;