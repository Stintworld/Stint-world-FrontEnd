import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import Loader from "./Loader";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const Adminquerylist = () => {

  const [queryList, setQueryList] = useState([])
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Adjust as needed

  useEffect(() => {
    const fetchData = async () => {
      const querylist = axios.get("https://www.stint.world/enqueries/getall")
        .then((response) => { return response.data })
        .then((data) => {
          if(data.statusCode === 200)
            {
              setQueryList(data.data.reverse())
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
    fetchData()
  }, [])




  // Filter data based on search term
  const filteredData = queryList.filter((query) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      query.enqueryId.toString().includes(searchTextLower) ||
      query.enqueryCreatedDateTime.toString().includes(searchTextLower) ||
      query.fromEmail.toLowerCase().includes(searchTextLower) ||
      query.fromName.toLowerCase().includes(searchTextLower)  ||
      query.subject.toLowerCase().includes(searchTextLower) ||
      query.message.toLowerCase().includes(searchTextLower)
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
      {(loaderState === false && queryList.length>0) && <div className="flex-conatiner px-3">
        <div className="constiner d-flex flex-wrap justify-content-between align-items-center">
          <InputGroup className="my-3">
            <FormControl
              placeholder="Search for Queries here..."
              aria-label="Search Queries"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="conatiner mt-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Query</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((query) => (
                <tr key={query.enqueryId}>
                  <td>{query.enqueryId}</td>
                  <td>{query.enqueryCreatedDateTime}</td>
                  <td>{query.fromName}</td>
                  <td>{query.fromEmail}</td>
                  <td>{query.subject}</td>
                  <td>{query.message}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
      </div>}
      {
        (loaderState === false && queryList.length=== 0) && <div className="conatiner mt-5" style={{ color: "darkblue"}}>
          <h3>No Data Available</h3>
          <p>Users queries will be displayed here</p>
        </div>
      }
    </>
  );
}

export default Adminquerylist;