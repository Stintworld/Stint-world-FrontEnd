import "../Stylesh/Jobdetails.css";
import Empnavigationbar from "./Empnavigationbar.jsx";
import Footer from "./Footer.jsx";
import {  useParams, Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import userlogo from "../images/userlogo.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader.jsx";
import axios from "axios"
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaCircleArrowLeft } from "react-icons/fa6";

const AdminEmppostedjobdetails = () => {

    const history = useHistory();
    let { id } = useParams();

   const [jobByID, setJobByID]= useState();
   const [loaderState, setLoaderState] = useState(true)

const handleGoBack=(e)=>{
    e.preventDefault()
    history.goBack()
}

   useEffect(() => {
    // const job = axios.get(`http://localhost:8080/jobs/getjobbyjobid/${id}`)
    const job = axios.get(`https://www.stint.world/jobs/getjobbyjobid/${id}`)
    .then((response) => {
      return response.data
    })
      .then((data) => {
        if (data.statusCode === 200) {
          setJobByID(data.data)
          setLoaderState(false)
        }
      })
      .catch((err) => {
        loaderState(false)
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
  }, [])

    const HandleViewApplicants = () =>{
        history.push(`/adminviewapplicants${id}`);
    }


    function postedago(posttimes) {
        const postedtime = new Date(posttimes);
        const presenttime = new Date();
        const diffInMs = presenttime - postedtime;
        const seconds = Math.floor(diffInMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        let timeString;
        if (days > 0) {
            timeString = `${days} day${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            timeString = `${hours} hour${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            timeString = `${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else {
            timeString = `${seconds} second${seconds > 1 ? 's' : ''}`;
        }
        return timeString;
    }




    return (
        <>
            {/* <Empnavigationbar logout={logout}></Empnavigationbar> */}
            <div className="container  mt-3">
                <button className="btn btn-primary rounded-3 px-5 d-flex justify-content-center align-items-center"  onClick={handleGoBack}>
                    <FaCircleArrowLeft></FaCircleArrowLeft> 
                </button>
            </div>
			
           { loaderState===false &&  <div className="container mt-5">
                <div className="row">
                    <Col md={4} key={jobByID.jobId} className="mb-6 col-md-12 mb-4">
                        <Card className="rounded border-0 "> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                            <div className="d-flex flex-wrap">
                                <img src={`data:image/png;base64,${jobByID.organisationLogo}`} alt="joblogo" width={100}  /> {/* Replace with your image path */}
                                <div className="flex-grow-1 ms-3">
                                    <Card.Body style={{ textAlign: "justify" }}>
                                        <span className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>{jobByID.jobTitle}</Card.Title><p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{jobByID.jobType}</p></span>
                                        <Card.Subtitle className="mb-2 text-muted">{jobByID.company}</Card.Subtitle>
                                        <Card.Text className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}>
                                            <span className="mr-2">
                                                <IoLocationOutline /> {jobByID.jobLocation} 
                                            </span>
                                            <span className="mr-2">
                                                <RiMoneyRupeeCircleLine style={{fontSize:"larger"}} /> {jobByID.salary}
                                            </span>
                                            <span>
                                                <PiClockCounterClockwiseLight /> {postedago(jobByID.jobCreateDatetime)}
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                            <div className="row  col-12  my-4 d-flex flex-wrap justify-content-end align-items-center" >
                                <button className="btn btn-l btn-success col-auto mx-2 mt-2"onClick={HandleViewApplicants} >View Applicants</button>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-8 pb-4" style={{ textAlign: "left" }}>
                                    <h4 className="mb-3">Job Description</h4>
                                    <p>{jobByID.jobDiscription}</p>
                                </div>
                                <div className="container">
                                <h4 className="mb-3 mt-5" style={{textAlign:"left"}}> Skills required</h4>
                                    <div className="container d-flex flex-wrap justify-content-start align-items-center">
                                        {
                                            jobByID.skills.map((skill) => { return (<span className="border border-1 rounded-3 px-4 py-1 mx-1 mt-3">{skill}</span>) })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5" style={{ textAlign: "left" }}>
                                <hr></hr>
                                <div className="col-md-12 col-lg-8">
                                    <h4 className="mb-3">About Company</h4>
                                    <p>{jobByID.aboutCompany}</p>
                                    <a href={`${jobByID.companyWebsite}`} target="_blank">{jobByID.companyWebsite}</a>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </div>
            </div>}
            {
                loaderState === true && <Loader></Loader>
            }

            <Footer></Footer>
        </>
    );
}

export default AdminEmppostedjobdetails;