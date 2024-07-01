import React, { useState, useEffect } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loader from './Loader';
import axios from 'axios';

const Admininterviewpage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Adjust as needed
  const [searchTerm, setSearchTerm] = useState('');
  const [interviewData, setInterviewData] = useState([])
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()

  // Simulate fetching interview data from an API or database
  useEffect(() => {
    const fetchData = async () => {
      const intData = await axios.get('https://www.stint.world/jobapplications/getalljobapplications')
        .then((response) => { return response.data })
        .then((data) => {
          if (data.statusCode === 200) {
            setInterviewData(data.data.reverse())
            setLoaderState(false)
          }
        })
        .catch((err) => {
          setErrMessageState(true)
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
    fetchData();
  }, []);

  // Filter data based on search term
  const filteredData = interviewData.filter((interview) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      interview.jobApplicationId.toString().includes(searchTextLower) ||
      interview.jobSerial.toString().includes(searchTextLower) ||
      interview.employerPhNo.toString().includes(searchTextLower) ||
      // interview.ApplicantID.toString().includes(searchTextLower) ||
      interview.jobApplicationStatus.toLowerCase().includes(searchTextLower) ||
      interview.employerEmail.toLowerCase().includes(searchTextLower) ||
      interview.employerName.toLowerCase().includes(searchTextLower) ||
      interview.jobTitle.toLowerCase().includes(searchTextLower) ||
      interview.company.toLowerCase().includes(searchTextLower)
    );
  });

  // Handle pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };



  return (
    <>
      {/* Error message Disoaly block */}
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}
      {(loaderState === true) && <Loader></Loader>}
      {(loaderState === false && interviewData && interviewData.length>0 && errMessageState === false) && <div className="container">
        <InputGroup className="my-3">
          <FormControl
            placeholder="Search Interviews..."
            aria-label="Search Interviews"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>JobID</th>
              <th>AppID</th>
              <th>Interview Status</th>
              <th>Role</th>
              <th>Organisation</th>
              <th>Emp Name</th>
              <th>Emp contact</th>
              <th>Emp Email</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((interview) => (
              <tr key={interview.jobApplicationId}>
                <td>{interview.jobApplicationId}</td>
                <td><Link to={`/adminviewjd/${interview.jobSerial}`} style={{ textDecoration: "none", color: "black" }}>{interview.jobSerial}</Link></td>
                <td><Link to={`/adminapplicatprofileview${interview.applicantId}`} style={{ textDecoration: "none", color: "black" }}>{interview.applicantId}</Link></td>
                <td>{interview.jobApplicationStatus}</td>
                <td>{interview.jobTitle}</td>
                <td>{interview.company}</td>
                <td>{interview.employerName}</td>
                <td>{interview.employerPhNo}</td>
                <td>{interview.employerEmail}</td>
              </tr>
            ))}
          </tbody>
        </Table>

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
      </div>}
      {
        (loaderState === false && interviewData.length===0 && errMessageState === false) && <div className='container m-5 p-5'>
          <h1>No Data Available here</h1>
          <p>All job application info will be dispalyed here</p>
        </div>
      }
    </>
  );
}

export default Admininterviewpage;