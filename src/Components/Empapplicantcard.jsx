import { Pagination, Card, Col } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import userlogo from "../images/userlogo.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "../Stylesh/Empapplicantcard.css"
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import axios from 'axios';



const Empapplicantcard = ({ job_Applicants_Details: items, jobId, applicantCount }) => {

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('')
  const [status, setStatus] = useState("SUBMITTED");
  const [jid, setJid]= useState(0);
  const statusSelected= useRef('')

  //   to set the reason for rejection useState variable
  const handleReasonChange = (e) => {
    setRejectionReason(e.target.value);

  };

  //   to submit the reason for rejection API calling when you click on submit in popup form
  const handleSubmitRejection = (e) => {
    e.preventDefault()
    handleStatusUpdateAPICall(jid)
    setShowRejectModal(false);
  };



  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Handle pagination
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

const handleSelectedStatus = (e)=>{
  setStatus(e.target.value)
}





  var jobAppId;

  // when you click on submit button with rejected option below fun will execute 
  function handleStatus(item) {
    // setStatus(document.getElementById('statusdropdown').selectedOptions[0].value)
    item.applications.map((y) => {
      if (y.jobSerial === Number(jobId)) {
        setJid(y.jobApplicationId)
        jobAppId = y.jobApplicationId;
      }
    })
      if (status === "REJECTED") {
        setShowRejectModal(true);
      }
      else {
        handleStatusUpdateAPICall(jobAppId)
      }
  };

  function handleStatusUpdateAPICall(jobAppId) {
    const statusUpdated = axios.put(`https://www.stint.world/jobapplications/updateapplication/${jobAppId}`, null, {
      params: {
        applicationStatus: status,
        reason: rejectionReason
      }
    })
      .then((response) => {
        return response.data
      })
      .then((data) => {
        if (data.statusCode === 200) {
          alert(data.message)
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
          alert(`${err.response.data.rootCause}`)
        }
        else {
          alert(`Something went wrong! ${err}`)
        }
      })
  }


  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h3 className="text-left my-5" style={{ textAlign: "left" }}>All Applicants</h3>
          <p style={{textAlign:"left"}}>Total Number of Applicant : {applicantCount}</p>
          {paginatedData.map((item) => (
            <Col md={4} key={item.applicantId} className="mb-6 col-md-6 mb-4">
              <Card className="rounded jobcradhovereffect"> {/* Added shadow and hover:shadow-lg hover:shadow-lg   shadow--> to add shadow effect class for hover effect */}
                <div className="d-flex">
                  <img src={`data:image/png;base64,${item.applicantImage}`} alt="joblogo" width={100} height={100} className='fluid' /> {/* Replace with your image path */}
                  <div className="flex-grow-1 ms-3">
                    <Card.Body style={{ textAlign: "justify" }}>
                      <span className="d-flex align-items-center" style={{ justifyContent: "space-between" }}><Card.Title>  {item.applicantName}</Card.Title><p className="px-3">  <IoMdCall style={{ fontSize: "20px" }}></IoMdCall> {item.applicantPhNo}</p></span>
                      <Card.Subtitle className="mb-2 text-muted"> <MdOutlineMailOutline style={{ fontSize: "17px", marginRight: "5px" }}></MdOutlineMailOutline>{item.applicantEmail}</Card.Subtitle>
                      <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <span className="mr-2">
                          <IoLocationOutline /> {item.applications[0].applicantLocation} 
                        </span>
                        <span>
                          <IoBriefcaseOutline /> {item.applications[0].jobLevel}
                        </span>
                      </Card.Text>
                      <p>
                        {/* Review:  {printStatus(item)} */}
                        Review:  {item.applications[0].jobApplicationStatus}
                      </p>
                      <Card.Text className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div className="d-flex align-items-center">
                          <select onChange={handleSelectedStatus} id="statusdropdown" useRef={statusSelected} className="mr-2 btn btn-success border border-1 rounded-2 custom-select jobcardbutn statvaluedropdown " style={{ textAlign: "left", backgroundColor: "#eed8fc", color: "#912fc1", boxShadow: "unset" }}> {/* Dropdown element */}
                            <option value="" selected >Update Status</option>
                            <option value="SUBMITTED" >Application Submitted</option>
                            <option value="RESUMEVIEWED">Resume Viewed</option>
                            <option value="ACCEPTED">Accepted</option>
                            <option value="REJECTED">Rejected</option>
                            {/* Add more options for other statuses */}
                          </select>
                          <button onClick={() => handleStatus(item)} className="btn border border-1 rounded-2 jobcardbutn" style={{ textAlign: "left", backgroundColor: "#eed8fc", color: "#912fc1" }} >Update</button>
                        </div>
                        <Link className="mr-2 btn border border-1 rounded-2 jobcardbutn" to={`/empapplicatprofileview${item.applicantId}`} style={{ textAlign: "left", backgroundColor: "#eed8fc", color: "#912fc1" }}>  View Profile </Link>
                        {/* <span className="mr-2 btn  btn-info border border-1 rounded-2"> Reject  </span> */}
                      </Card.Text>

                      <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Rejection Reason</Modal.Title>
                        </Modal.Header>
               <form onSubmit={handleSubmitRejection}>
               <Modal.Body>
                          <textarea
                            className="form-control"
                            rows={5}
                            value={rejectionReason}
                            onChange={handleReasonChange}
                            placeholder="Enter reason for rejection"
                            required
                            minLength={20}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <button className="btn btn-primary" onClick={() => setShowRejectModal(false)}>
                            Close
                          </button>
                          <button className="btn btn-primary" >
                            Submit Rejection
                          </button>
                        </Modal.Footer>
               </form>
                      </Modal>



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

export default Empapplicantcard;