import { Pagination, Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import userlogo from "../images/userlogo.jpg";
import "../Stylesh/Jobs.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';


const Adminviewemppostedjobcard = ({postedJobs}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // Handle pagination

    const totalPages = Math.ceil(postedJobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, postedJobs.length);
    const paginatedData = postedJobs.slice(startIndex, endIndex);

    const handlePrevClick = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const nofapplication=50; //used in line number 39. to show the number of application received for this job. 
    return ( 
    <>
        <div className="container mt-4">
                <div className="row">
                    <h3 className="text-left my-5" style={{ textAlign: "left" }}>Posted jobs</h3>
                    {paginatedData.map((item) => (
                        <Col md={4} key={item.jobId} className="mb-6 col-md-6 mb-4">
                            <Card className="rounded jobcradhovereffect"> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                                <Link to={`/adminemppostedjobdetails${item.jobId}`} style={{ textDecoration: "none", color: "unset" }}>
                                    <div className="d-flex">
                                        <img src={`data:image/png;base64,${item.organisationLogo}`} alt="joblogo" width={100} height={100} fluid /> {/* Replace with your image path */}
                                        <div className="flex-grow-1 ms-3">
                                            <Card.Body style={{ textAlign: "justify" }}>
                                                <span className="d-flex align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>{item.jobTitle}</Card.Title><p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{item.jobType}</p></span>
                                                <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2">
                                                        <IoLocationOutline /> {item.jobLocation}
                                                    </span>
                                                    <span>
                                                        <PiClockCounterClockwiseLight /> {item.jobCreateDatetime}
                                                    </span>
                                                </Card.Text>
                                                {/* <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2 btn  btn-success border border-1 rounded-2">  View Applicants </span>                                                    
                                                </Card.Text>
                                                <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2 ">  Number of Applicant : {nofapplication}  </span>
                                                                                                     
                                                </Card.Text> */}
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Link>

                            </Card>
                        </Col>
                    ))}
                </div>


                {totalPages > 1 && (
                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-primary btn-l mb-5 " disabled={currentPage === 1} onClick={handlePrevClick}>
                            <IoIosArrowBack /> Previous
                        </button>
                        <button className="btn btn-primary btn-l mb-5 " disabled={currentPage === totalPages} onClick={handleNextClick}>
                            Next <IoIosArrowForward />
                        </button>
                    </div>
                )}
            </div>
    </> 
);
}
 
export default Adminviewemppostedjobcard;