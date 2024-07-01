import "../Stylesh/Jobdetails.css";
import NavigationBar from "../Components/NavigationBar.jsx";
import Footer from "../Components/Footer.jsx";
import { useParams, Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import {  useHistory } from "react-router-dom"
import axios from "axios";



const Jobdetails = ({logout}) => {
    let { jobid } = useParams();
    const [jobDetailsByID, setJobDetailsByID] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [timelaps, setTimelaps] = useState()
    const history = new useHistory()

    useEffect(() => {
        const jobdetails = axios.get(`https://www.stint.world/jobs/getjobbyjobid/${jobid}`)
        // const jobdetails = axios.get(`http://localhost:8080/jobs/getjobbyjobid/${jobid}`)
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setJobDetailsByID(data.data)
                const timelaps = postedago(data.data.jobCreateDatetime);
                setTimelaps(timelaps);
                setIsLoaded(true)
            })
            .catch((err) => {                
                if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    alert("This job is not available or removed by employer")
                    history.goBack()
                }
                else if (err.message === "Network Error") {
                    alert(`${err.message} : Request failed`)
                    history.goBack()
                }
                else if (err.message === "Request failed with status code 500") {
                    alert(`${err.response.data.error}`)
                    history.goBack()
                }
                else if (err.message === "Network Error") {
                    alert(`${err.message} : Request failed`)
                    history.goBack()
                }
                else if (err.message === "Request failed with status code 500") {
                    alert(`${err.response.data.error}`)
                    history.goBack()
                }
                else if (err.message === "Request failed with status code 406") {
                    alert(`${err.response.data.error}`)
                    history.goBack()
                }
                else {
                    alert(`Something went wrong! ${err}`)
                    history.goBack()
                }
            })
    }, [jobid])


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



    const applicantid = Number(localStorage.getItem("ApplicantId"))

    // Below code is to apply for the job from job details page. 
    const submitApplication = () => {
        alert("Are you sure do want to submit the application? ")
        const jobapp = axios.post(`https://www.stint.world/jobapplications/add/${jobid}/${applicantid}`)
        // const jobapp = axios.post(`http://localhost:8080/jobapplications/add/${jobid}/${applicantid}`)
            .then((resp) => {
                return resp.data
            })
            .then((data) => {
                if (data.statusCode === 201) {
                    alert(data.data)
                }
            }).catch((err) => {
                if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    alert(`${err.response.data.message}`)
                }
                else if (err.message === "Network Error") {
                    alert(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 500") {
                    alert(`${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    alert(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 500") {
                    alert(`${err.response.data.error}`)
                }
                else if (err.message === "Request failed with status code 406") {
                    alert(`${err.response.data.error}`)
                }
                else {
                    alert(`Something went wrong! ${err}`)
                }
            })
    }



    return (
        <>
            <NavigationBar logout={logout}></NavigationBar>
            {isLoaded === false && <Loader></Loader>}
            {isLoaded === true && <div className="container mt-5">
                <div className="row">
                    <Col md={4} key={jobDetailsByID.jobId} className="mb-6 col-md-12 mb-4">
                        <Card className="rounded border-0 "> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                            <div className="d-flex flex-wrap">
                                <img src={`data:image/png;base64,${jobDetailsByID.organisationLogo}`} alt="joblogo" width={100} height={100} className="rounded-circle"/> {/* Replace with your image path */}
                                <div className="flex-grow-1 ms-3">
                                    <Card.Body style={{ textAlign: "justify" }}>
                                        <span className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>{jobDetailsByID.jobTitle}</Card.Title><p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{jobDetailsByID.jobType}</p></span>
                                        <Card.Subtitle className="mb-2 text-muted">{jobDetailsByID.company}</Card.Subtitle>
                                        <Card.Text className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}>
                                            <span className="mr-2">
                                                <IoLocationOutline /> {jobDetailsByID.jobLocation}
                                            </span>
                                            <span className="mr-2">
                                                <RiMoneyRupeeCircleLine style={{ fontSize: "larger" }} /> {jobDetailsByID.salary}
                                            </span>
                                            <span>
                                                {/* <PiClockCounterClockwiseLight /> {jobDetailsByID.jobCreateDatetime} */}
                                                <PiClockCounterClockwiseLight /> {timelaps} ago
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                            <div className="row  col-12  my-4" style={{ justifyContent: "flex-end" }}>
                                <button className="btn btn-l btn-success col-auto" onClick={submitApplication} >Apply</button>
                                {/* <button className="btn btn-l btn-success col-2" data-bs-toggle="modal" data-bs-target="#applyModal">Apply</button> */}
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-8" style={{ textAlign: "left" }}>
                                    <h4 className="mb-3">Job Description</h4>
                                    <p>
                                        {jobDetailsByID.jobDiscription}
                                    </p>
                                </div>
                                <div className="container" style={{ textAlign: "left" }}>
                                    <h4 className="mb-3 mt-5" >Skills required</h4>
                                    <div className="container d-flex flex-wrap justify-content-start align-items-center">
                                        {
                                            jobDetailsByID.skills.map((skill, index) => { return (<span key={index} className="border border-1 rounded-3 px-4 py-1 mx-1 my-2" >{skill}</span>) })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5" style={{ textAlign: "left" }}>
                                <hr></hr>
                                <div className="col-md-12 col-lg-8">
                                    <h4 className="mb-3">About Company</h4>
                                    <p>{jobDetailsByID.aboutCompany}  </p>
                                    <Link to={`item.companyWebsite`}>{jobDetailsByID.companyWebsite}</Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </div>
            </div>}
            <Footer></Footer>
        </>
    );
}

export default Jobdetails;