import { useState, useEffect } from 'react';
import { Table, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Loader from './Loader';


const Adminemployerpage = () => {
  const [employerData, setEmployerData] = useState([]);
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  useEffect(() => {
    const hf = async (e) => {
      // const employerData = axios.get("http://localhost:8080/employer/getallemployers")
      const employerData = axios.get("https://www.stint.world/employer/getallemployers")
        .then((response) => { return response.data })
        .then((data) => {
          if (data.statusCode === 200) {
            const x = data.data.reverse() // latest jobs will display at first
            setEmployerData(x)
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
            setErrMessage(`Something went wrong!,:  ${err}`)
          }
        })
    }
    hf()
  }, [])


  const filteredEmployers = employerData.filter((employer) =>
    employer.employerName.toLowerCase().includes(searchText) ||
    employer.employerId.toString().includes(searchText) ||
    employer.organisation.toLowerCase().includes(searchText) ||
    employer.orgLocation.toLowerCase().includes(searchText) ||
    // employer.status.toLowerCase().includes(searchText) ||
    employer.employerPhNo.toString().includes(searchText) ||
    employer.employerEmail.toLowerCase().includes(searchText)
  );

  const totalPages = Math.ceil(filteredEmployers.length / itemsPerPage);
  const indexOfLastemployee = currentPage * itemsPerPage;
  const indexOfFirstemployee = indexOfLastemployee - itemsPerPage;
  const currentemployee = filteredEmployers.slice(indexOfFirstemployee, indexOfLastemployee);

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

  const handleviewemployerpostedjob = (id) => {
    window.open(`/Adminemppostedjobviews${id}`, '_blank');
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  // Code to deactivate the jobseeker, this will soft delete the 
  const handleDeactivate = (employerId) => {
    // const deactiveEmployer= axios.put(`http://localhost:8080/employer/delete/${employerId}`)
    const deactiveEmployer= axios.put(`https://www.stint.world/employer/delete/${employerId}`)
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




  return (
    <>
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}
      {(loaderState === false && employerData&& employerData.length>0 && errMessageState === false) && <div className="container">
        <InputGroup className="my-3">
          <FormControl
            placeholder="Search employers..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchText}
            onChange={handleSearch}
          />
        </InputGroup>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentemployee.map((employer) => (
              <tr key={employer.employerId}>
                <td><Link to={`/adminemployerprofileview${employer.employerId}`} className="text-decoration-none" style={{ color: "black" }}>{employer.employerId}</Link></td>
                <td>{employer.employerName}</td>
                <td>{employer.employerEmail}</td>
                <td>{employer.employerPhNo}</td>
                <td>{employer.organisation}</td>
                <td>{employer.orgLocation}</td>
                <td>{employer.status}Active</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleviewemployerpostedjob(employer.employerId)}>
                    view jobs
                  </button>
                  <button className="btn btn-outline-danger btn-sm mx-2" onClick={()=>{handleDeactivate(employer.employerId)}}>
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>



        <Row>
          <Col className="d-flex justify-content-between">
            {currentPage > 1 && (
              <button className="btn btn-primary btn-l mb-5 " onClick={handlePreviousPage}>
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
      </div>}
      {
        (loaderState === false && employerData && employerData.length===0 && errMessageState === false) && <div className='container m-5 p-5'>
          <h1>No Data Available here</h1>
          <p>All employer info will be dispalyed here</p>
        </div>
      }
      {(loaderState === true) && <Loader></Loader>}
    </>
  );
}

export default Adminemployerpage;