import { useState, useEffect, useRef } from 'react';
import { Table, InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Loader from './Loader';



const Adminjobseekerspage = () => {

  const [jobSeekers, setJobSeekers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const [selectedUserID, setSelectedUserID] = useState();
  const itemsPerPage = 10; // Adjust as needed
  const adminresumeupload = useRef()



  useEffect(() => {
    const hf = async (e) => {
      const jobsdata = await axios.get("https://www.stint.world/applicants/getallapplicants")
        .then((response) => { return response.data })
        .then((data) => {
          console.log(data);
          if (data.statusCode === 200) {
            const x = data.data.reverse() // latest jobs will display at first
            setJobSeekers(x)
            setLoaderState(false)
          }
        })
        .catch((err) => {
          setLoaderState(false)
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
    }
    hf()

  }, [])


  const filteredJobSeekers = jobSeekers.filter((jobSeeker) => {
    return (
      jobSeeker.applicantId.toString().includes(searchTerm.toLowerCase()) ||
      jobSeeker.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jobSeeker.applicantPhNo.toString().includes(searchTerm.toLowerCase()) ||
      jobSeeker.applicantEmail.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  );


  const paginatedJobSeekers = filteredJobSeekers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePrevious = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setErrMessageState(false);
    }, 90000)

  }, [errMessageState])

  // Code to deacrivate the jobseeker, this will soft delete the 
  const handleDeactivate = (jobSeekerId) => {
    const deactiveJobseeker= axios.put(`https://www.stint.world/applicants/delete/${jobSeekerId}`)
    .then((response)=>{ return response.data})
    .then((data)=>{
      if(data.statusCode === 200)
        {
          alert(data.message)
        }
    })
    .catch((err)=>{
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
        alert(`Something went wrong!,:  ${err}`)
      }
    })
  };
  
  const handleResumeModalClose = () => setShowResumeModal(false);

  const handleResumeClick = (appserial) => {
    setSelectedUserID(appserial)
    setShowResumeModal(true);
  };

  const handleResumeSubmit = () => {
    const adminResume = adminresumeupload.current.files[0];
    const formdataResume = new FormData();
    formdataResume.append("resume", adminResume)
    const adminNewResume = axios.post(`https://www.stint.world/applicants/addresume/${selectedUserID}`, formdataResume, { headers: { 'Content-Type': 'multipart/form-Data' } })
      .then((response) => {
        return response.data
      })
      .then((data) => {
        console.log(data);
        if (data.statusCode === 201) {
          alert(data.data)
          setShowResumeModal(false)
        }
      })
      .catch((err) => {
        setErrMessageState(true)
        setShowResumeModal(false)
        setLoaderState(false)
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

  }


  return (
    <>
      {/* Error message Disoaly block */}
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}
      {(loaderState === false && jobSeekers && jobSeekers.length>0 && errMessageState === false) && <div className="container">
        <div className="row">
          <div className="col-6">
            <InputGroup className="my-3">
              <FormControl
                placeholder="Search Job Seekers"
                value={searchTerm}
                onChange={handleSearch}
              />
            </InputGroup>
          </div>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID </th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Job Level</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {paginatedJobSeekers.map((jobSeeker) => (
              <tr key={jobSeeker.applicantId}>
                <td> <Link to={`/empapplicatprofileview${jobSeeker.applicantId}`} style={{ textDecoration: "none", color: "black", target: "_blank" }}>{jobSeeker.applicantId}</Link> </td>
                <td>{jobSeeker.applicantName}</td>
                <td>{jobSeeker.applicantEmail}</td>
                <td>{jobSeeker.applicantPhNo}</td>
                <td>{jobSeeker.status}</td>
                <td>{jobSeeker.applications[0].jobLevel}</td>
                {/* {
                  console.log(jobSeeker.applications[0].jobLevel)
                } */}
                <td>{jobSeeker.applications[0].applicantLocation}</td>
                <td>
                  {/* <button variant="primary" size="sm" onClick={() => handleUploadResume(jobSeeker.id)}> */}
                  <button className="btn btn-primary btn-sm mx-1" onClick={() => handleResumeClick(jobSeeker.applicantId)}>
                    Upload Resume
                  </button>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDeactivate(jobSeeker.applicantId)}>
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between">
          {currentPage > 1 && (
            <button className="btn btn-primary btn-l mb-5 " onClick={handlePrevious}>
              <IoIosArrowBack /> Previous
            </button>
          )}
          {paginatedJobSeekers.length === itemsPerPage && (
            <button className="btn btn-primary btn-l mb-5" onClick={handleNext}>
              Next <IoIosArrowForward />
            </button>
          )}
        </div>

        <Modal show={showResumeModal} onHide={handleResumeModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleResumeSubmit}>
              <Form.Group controlId="resume">
                <Form.Label>Upload Resume (PDF)</Form.Label>
                <Form.Control ref={adminresumeupload} type="file" accept=".pdf" required />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleResumeModalClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={handleResumeSubmit} form="resume">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>}
      {
        (loaderState === false && jobSeekers && jobSeekers.length===0 && errMessageState === false) && <div className='container m-5 p-5'>
          <h1>No Active users</h1>
          <p>All active users info will be dispalyed here</p>
        </div>
      }
      {(loaderState === true) && <Loader></Loader>}
    </>
  );
}

export default Adminjobseekerspage;