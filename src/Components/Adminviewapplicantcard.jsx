import {  Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import userlogo from "../images/userlogo.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "../Stylesh/Empapplicantcard.css"
import { useState } from 'react';
import { FaBriefcase } from "react-icons/fa6";

const Adminviewapplicantcard = ({job_Applicants_Details : items}) => {




    return ( 
        <>
        <div className="container mt-4">
                <div className="row">
                    <h3 className="text-left my-5" style={{ textAlign: "left" }}>All Applicants</h3>
                    {items.map((item) => (
                        <Col md={4} key={item.applicantId} className="mb-6 col-md-6 mb-4">
                            <Card className="rounded jobcradhovereffect"> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                                    <div className="d-flex">
                                        <img src={`data:image/png;base64,${item.applicantImage}`} alt="joblogo" width={100} height={100} fluid /> {/* Replace with your image path */}
                                        <div className="flex-grow-1 ms-3">
                                            <Card.Body style={{ textAlign: "justify" }}>
                                                <span className="d-flex align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>  {item.applicantName}</Card.Title><p className="px-3">  <IoMdCall  style={{fontSize:"20px"}}></IoMdCall> {item.applicantPhNo}</p></span>
                                                <Card.Subtitle className="mb-2 text-muted"> <MdOutlineMailOutline  style={{fontSize:"17px", marginRight:"5px"}}></MdOutlineMailOutline>{item.applicantEmail}</Card.Subtitle>
                                                <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2">
                                                        <IoLocationOutline /> {item.applications[0].applicantLocation}
                                                    </span>
                                                    <span>
                                                        <FaBriefcase /> {item.applications[0].jobLevel}
                                                    </span>
                                                </Card.Text>
                                                <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                   
                                                    <Link className="mr-2 btn border border-1 rounded-2 jobcardbutn" to={`/adminapplicatprofileview${item.applicantId}`} style={{textAlign:"left", backgroundColor:"#eed8fc", color:"#912fc1"}}>  View Profile </Link>
                                                    {/* <span className="mr-2 btn  btn-info border border-1 rounded-2"> Reject  </span> */} 
                                                </Card.Text>



                                            </Card.Body>
                                        </div>
                                    </div>
                            </Card>
                        </Col>
                    ))}
                </div>
            </div>
        
        </>
     );
}
 
export default Adminviewapplicantcard;