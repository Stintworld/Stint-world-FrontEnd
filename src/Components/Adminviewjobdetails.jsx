import "../Stylesh/Jobdetails.css";
import Footer from "./Footer.jsx";
import { useParams, Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";


const Adminviewjobdetails = () => {
    let { jobId } = useParams();
    const history = useHistory();
    const [loaderState, setLoaderState] = useState(true)
    const [adminViewJobDetailsByJobId, setAdminViewJobDetailsByJobId] = useState();

    useEffect(() => {
        const jd = axios.get(`https://www.stint.world/jobs/getjobbyjobid/${jobId}`)
            .then((response) => { return response.data })
            .then((data) => {
                if (data.statusCode === 200) {
                    setAdminViewJobDetailsByJobId(data.data)
                    setLoaderState(false)
                }
            })
            .catch((err) => {
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


    const handleGoBack = (e) => {
        e.preventDefault()
        history.goBack()
    }



    return (
        <>
            <div className="container  mt-3">
                <button className="btn btn-primary rounded-3 px-5 d-flex justify-content-center align-items-center" onClick={handleGoBack}>
                    <FaCircleArrowLeft></FaCircleArrowLeft>
                </button>
            </div>

            {(loaderState === false && adminViewJobDetailsByJobId) && <div className="container mt-5">
                <div className="row">
                    <Col md={4} key={adminViewJobDetailsByJobId.jobId} className="mb-6 col-md-12 mb-4">
                        <Card className="rounded border-0 "> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                            <div className="d-flex">
                                <img src={`data:image/png;base64,${adminViewJobDetailsByJobId.organisationLogo}`} alt="joblogo" width={100} fluid /> {/* Replace with your image path */}
                                <div className="flex-grow-1 ms-3">
                                    <Card.Body style={{ textAlign: "justify" }}>
                                        <span className="d-flex align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>{adminViewJobDetailsByJobId.jobTitle}</Card.Title><p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{adminViewJobDetailsByJobId.type}</p></span>
                                        <Card.Subtitle className="mb-2 text-muted">{adminViewJobDetailsByJobId.company}</Card.Subtitle>
                                        <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                            <span className="mr-2">
                                                <IoLocationOutline /> {adminViewJobDetailsByJobId.jobLocation}
                                            </span>
                                            <span className="mr-2">
                                                <IoLocationOutline /> {adminViewJobDetailsByJobId.salary}
                                            </span>
                                            <span>
                                                <PiClockCounterClockwiseLight /> {adminViewJobDetailsByJobId.jobCreateDatetime}
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-8 mt-5" style={{ textAlign: "left" }}>
                                    <h4 className="mb-3">Job Description</h4>
                                    <p>{adminViewJobDetailsByJobId.jobDiscription}</p>
                                    <h4 className="mb-3 mt-5">Skills required</h4>
                                    {
                                        adminViewJobDetailsByJobId.skills.map((skill) => { return (<span className="border border-1 rounded-3 px-4 py-1 mx-1">{skill}</span>) })
                                    }
                                </div>
                            </div>
                            <div class="row mt-5" style={{ textAlign: "left" }}>
                                <hr></hr>
                                <div class="col-md-12 col-lg-8">
                                    <h4 className="mb-3">About Company</h4>
                                    <p>{adminViewJobDetailsByJobId.aboutCompany} </p>
                                    <Link >{adminViewJobDetailsByJobId.companyWebsite}</Link>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </div>
            </div>}
            {(loaderState === true) && <Loader></Loader>}
            <Footer></Footer>
        </>
    );
}

export default Adminviewjobdetails;