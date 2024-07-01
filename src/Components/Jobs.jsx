import Jobslist from "../Components/Jobslist.jsx";
import NavigationBar from "../Components/NavigationBar.jsx";
import Footer from "../Components/Footer.jsx";
import Loader from "../Components/Loader.jsx";
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import "../Stylesh/Jobs.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";



const Jobs = ({ logout }) => {
  const [jobsData, setJobsData] = useState()
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const [jobsall, setJobsall] = useState(jobsData)
  const [isSorted, setIsSorted] = useState(false)
  const searchTerm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setErrMessageState(false);
    }, 90000)

  }, [errMessageState])

  useEffect(() => {
    const allJobs = axios.get("https://www.stint.world/jobs/getalljobs")
    // const allJobs = axios.get("http://localhost:8080/jobs/getalljobs")
      .then((response) => {
        return response.data
      })
      .then((data) => {
        if (data.statusCode === 200) {
          const jd = data.data.reverse() // Reversed the array to get latest job post first while dislaying
          setJobsData(jd);
          setJobsall(jd);
          setLoaderState(false);
          setErrMessageState(false)
        }
      })
      .catch((err) => {
        setLoaderState(false);
        setErrMessageState(true)
        if (err.message === "Request failed with status code 500") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
        }
        else if (err.message === "Network Error") {
          setErrMessage(`${err.message} : Request failed`)
        }
        else if (err.message === "equest failed with status code 500") {
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
  }, [])

  //  Logic for searching the job based on entred key word
  const handlesearchdata = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue.length === 0) {
      setJobsall(jobsData)
    }
    else {
      let filteredJobs = searchValue === ''
        ? jobsData // Display all data if searchValue is empty
        : jobsData.filter((job) => {
          return (
            // job.companyLocation.toLowerCase().includes(searchValue) ||
            job.jobTitle.toLowerCase().includes(searchValue) ||
            job.jobDiscription.toLowerCase().includes(searchValue) ||
            job.jobType.toLowerCase().includes(searchValue) ||
            job.company.toLowerCase().includes(searchValue) ||
            job.skills.some((skill) => skill.toLowerCase().includes(searchValue))
          );
        });
      filteredJobs = filteredJobs.reverse();
      setJobsall(filteredJobs);
    }
  }


  let sortedData;
  function handleSortChange(eventKey) {
    const sv = eventKey;

    switch (eventKey) {
      case 'datePostedDesc':
        sortedData = [...jobsall].sort((a, b) => new Date(b.jobCreateDatetime) - new Date(a.jobCreateDatetime)); // Descending order by date
        break;
      case 'companyNameAsc':
        sortedData = jobsall.sort((a, b) => a.company.localeCompare(b.company)); // Alphabetical order by company name
        break;
      case 'companyNameDesc':
        sortedData = jobsall.sort((a, b) => b.company.localeCompare(a.company)); // Alphabetical order by company name
        break;
      case 'datePostedAsc': // Added for ascending sort by date
        sortedData = jobsall.sort((a, b) => new Date(a.jobCreateDatetime) - new Date(b.jobCreateDatetime));
        break;
      default:
        sortedData = jobsall; // No sort applied
    }
    setJobsall(sortedData)
    setIsSorted(true)
  }



  return (
    <>
      <NavigationBar logout={logout}></NavigationBar>
      {/* Search bar  */}
      <section className="job-search container-fluid d-flex flex-wrap align-items-center  py-5 jsbgphoto" style={{ justifyContent: "space-around" }}>
        <div className="search-container mb-4  py-5 px-3 rounded-4" style={{ backgroundImage: "linear-gradient(180deg, #f6eafd, #eed8fc, #bb61eb, #912fc1)" }}>
          <header className="text-center py-3">
            <h1>Find Your Dream Job</h1>
            <p>Search for a wide range of positions and launch your career!</p>
          </header>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search by keyword, title, or company"
              ref={searchTerm}
              onChange={handlesearchdata}
            />
            <button type="submit" className="btn btn-primary btn-lg" onClick={handlesearchdata}>Search</button>
          </div>
        </div>
      </section>


      {/* ================== jobs filter and sort  ========    */}

      <Row className="d-flex justify-content-end align-items-center col-12 my-5">
        <Col className="col-auto">
          <DropdownButton
            id="dropdown-sort-by"
            title="Sort By"
            onSelect={handleSortChange}
          >
            <Dropdown.Item eventKey="datePostedDesc" value="datePostedDesc">
              Date Posted (Newest First)
            </Dropdown.Item>
            <Dropdown.Item eventKey="datePostedAsc" value="datePostedAsc">
              Date Posted (Oldest First)
            </Dropdown.Item>
            <Dropdown.Item eventKey="companyNameAsc" value="companyNameAsc">
              Company Name (A-Z)
            </Dropdown.Item>
            <Dropdown.Item eventKey="companyNameDesc" value="companyNameDesc">
              Company Name (Z-A)
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      {/* Error message Disoaly block */}
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}


      {/* ================== all Job display cards  ========    */}
      {((loaderState === false && errMessageState === false) || isSorted === true) && <Jobslist jobsall={jobsall} ></Jobslist>}
      {(loaderState === true) && <Loader></Loader>}
      <Footer></Footer>
    </>
  );
}

export default Jobs;