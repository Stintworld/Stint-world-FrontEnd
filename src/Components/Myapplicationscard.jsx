import { Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../Stylesh/Jobs.css";
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';


const Myapplicationscard = ({ items }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showReasonPopup, setShowReasonPopup] = useState(false); // State variable for popup visibility

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    const paginatedData = items.slice(startIndex, endIndex);

    const handlePrevClick = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const handleViewReasonClick = () => {
        setShowReasonPopup(true);      
    };

    const handlePopupClose = () => {
        setShowReasonPopup(false);
    };

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
            <div className="container mt-4">
                <div className="row">
                    <h3 className="text-left my-5" style={{ textAlign: "left" }}>My Applications</h3>
                    {paginatedData.map((item) => (
                        <Col md={4} key={item.jobApplicationId} className="mb-6 col-md-6 mb-4">
                            <Card className="rounded jobcradhovereffect"> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                                <div className="d-flex flex-wrap">
                                    <img src={`data:image/png;base64,${item.organisationLogo}`} alt="joblogo" width={100} height={100} /> {/* Replace with your image path */}
                                    <div className="flex-grow-1 ms-3">
                                        <Card.Body style={{ textAlign: "justify" }}>
                                            <Link to={`/jobdetails${item.jobSerial}`} style={{ textDecoration: "none", color: "unset" }}>
                                                <span className="d-flex  flex-wrap align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>{item.jobTitle}</Card.Title><p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{item.jobType}</p></span>
                                                <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                <Card.Text className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2">
                                                        <IoLocationOutline /> {item.jobLocation}
                                                    </span>
                                                    <span>
                                                        <PiClockCounterClockwiseLight />{postedago(item.jobApplicationDateTime)}
                                                    </span>
                                                </Card.Text>
                                            </Link>
                                            <Card.Text className="d-flex flex-wrap align-items-center mt-3" style={{ justifyContent: "space-between" }}>
                                                <span className="mr-2 btn  btn-success border border-1 rounded-2">  {item.jobApplicationStatus}  </span>
                                                {item.jobApplicationStatus === "REJECTED" &&
                                                    (
                                                        <>
                                                            <span onClick={() => { handleViewReasonClick() }} className="mr-2 btn  btn-outline-info border border-1 rounded-2"> View Reason  </span>
                                                            {showReasonPopup && (
                                                                <div className="popup mt-3 p-3 rounded-3" style={{ backgroundColor: "#faf3ff" }}> {/* Your popup structure */}
                                                                    <p> {item.reasonForRejection} </p>
                                                                    <button onClick={handlePopupClose} className='btn btn-outline-danger rounded-3'>Close</button>
                                                                </div>
                                                            )}
                                                        </>
                                                    )
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
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

export default Myapplicationscard;