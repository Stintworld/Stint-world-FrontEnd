import "../Stylesh/Jobs.css";
import { Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Jobslist = ({ jobsall }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);


    // Handle pagination
    const totalPages = Math.ceil(jobsall.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, jobsall.length);
    const paginatedData = jobsall.slice(startIndex, endIndex);

    const handlePrevClick = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
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
                    {paginatedData.map((item) => (
                        <Col md={4} key={item.jobId} className="mb-6 col-md-6 mb-4">
                            <Card className="rounded jobcradhovereffect"> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                                <Link to={`/jobdetails${item.jobId}`} style={{ textDecoration: "none", color: "unset" }}>
                                    <div className="d-flex flex-wrap">
                                        <img src={`data:image/png;base64,${item.organisationLogo}`} alt="joblogo" width={100} height={100} style={{"border-bottom-right-radius": "50%"}} /> {/* Replace with your image path */}
                                        <div className="flex-grow-1 ms-3">
                                            <Card.Body style={{ textAlign: "justify" }}>
                                                <span className="d-flex flex-wrap align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <Card.Title >{item.jobTitle}</Card.Title>
                                                    <p className="border border-1 rounded-3 px-3" style={{ borderColor: "#480f61" }}>{item.jobType}</p>
                                                </span>
                                                <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                    <span className="mr-2">
                                                        <IoLocationOutline /> {item.jobLocation}
                                                    </span>
                                                    <span>
                                                        <PiClockCounterClockwiseLight /> {postedago(item.jobCreateDatetime)}
                                                    </span>
                                                </Card.Text>
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

export default Jobslist;