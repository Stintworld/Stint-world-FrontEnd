import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Loader from './Loader';

const Adminjobspage = () => {
    const [loaderState, setLoaderState] = useState(true)
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        const dataJobs = async () => {
            const jobsdata = await axios.get("https://www.stint.world/jobs/getalljobs")
                .then((response) => { return response.data })
                .then((data) => {
                    if (data.statusCode === 200) {
                        const x = data.data.reverse() // latest jobs will display at first
                        setJobsData(x)
                        setLoaderState(false);
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
        dataJobs()
    }, [])

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10; // Adjust as needed


    const filteredJobs = jobsData.filter((job) => {
        const searchTextLower = searchTerm.toLowerCase();
        return (
            job.jobTitle.toLowerCase().includes(searchTextLower) ||
            job.jobId.toString().includes(searchTextLower) ||
            job.company.toLowerCase().includes(searchTextLower) ||
            job.jobLocation.toLowerCase().includes(searchTextLower)

        );
    });

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleViewApplicants = (jobId) => {
        window.open(`/adminviewapplicants${jobId}`, '_blank');
    };

    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 90000)

    }, [errMessageState])



    return (
        <>
            {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                {errMessage}
            </div>}
            {(loaderState === true) && <Loader></Loader>}
            {(loaderState === false && jobsData && jobsData.length>0 && errMessageState === false) && <Container>
                <Row>
                    <Col>
                        <InputGroup className="my-3">
                            <FormControl
                                placeholder="Search Jobs..."
                                aria-label="Search Jobs"
                                aria-describedby="search-button"
                                onChange={handleSearch}
                                value={searchTerm}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Role</th>
                            <th>Location</th>
                            <th>Employer</th>
                            <th>Applicants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentJobs.map((job) => (
                            <tr key={job.jobId}>
                                <td><Link to={`/jobdetails${job.jobId}`} style={{ textDecoration: "none", color: "black" }}>{job.jobId}</Link> </td>
                                <td>{job.jobTitle}</td>
                                <td>{job.jobLocation}</td>
                                <td>{job.company}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => handleViewApplicants(job.jobId)}>
                                        View Applicants
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row>
                    <Col className="d-flex justify-content-between">
                        {currentPage > 1 && (
                            <button className="btn btn-primary btn-l mb-5" onClick={handlePreviousPage}>
                                <IoIosArrowBack /> Previous
                            </button>
                        )}
                        {currentPage < totalPages && (
                            <button className="btn btn-primary btn-l mb-5 " onClick={handleNextPage}>
                                Next <IoIosArrowForward />
                            </button>
                        )}
                    </Col>
                </Row>
            </Container>}
            {
        (loaderState === false && jobsData && jobsData.length===0 && errMessageState === false) && <div className='container m-5 p-5'>
          <h1>No Data Available here</h1>
          <p>Jobs list will be dispalyed here</p>
        </div>
      }


        </>
    );
}

export default Adminjobspage;