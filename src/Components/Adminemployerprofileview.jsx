import "../Stylesh/Empprofileview.css"
import Footer from "./Footer.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import userlogo from "../images/userlogo.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import { GoOrganization } from "react-icons/go";




const Adminemployerprofileview = () => {

  const {empid} = useParams()
  const history = useHistory();
  const [loaderState, setLoaderState] = useState(true)
  const [empProfile, setEmpProfile] = useState()
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()

  useEffect(() => {
    setTimeout(() => {
      setErrMessageState(false);
    }, 10000)

  }, [errMessageState])


  useEffect(() => {
    // const empProfileData = axios.get(`http://localhost:8080/employer/FetchById/${empid}`)
    const empProfileData = axios.get(`https://www.stint.world/employer/FetchById/${empid}`)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        if (data.statusCode === 200) {
          setEmpProfile(data.data)
          setLoaderState(false);
        }
      })
      .catch((err) => {
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
  }, [empid])
  const handleGoBack=(e)=>{
    e.preventDefault()
    history.goBack()
}

  return (
    <>

      {/* <Empnavigationbar logout={logout}></Empnavigationbar> */}
      <div className="container  mt-3">
                <button className="btn btn-primary rounded-3 px-5 d-flex justify-content-center align-items-center"  onClick={handleGoBack}>
                    <FaCircleArrowLeft></FaCircleArrowLeft> 
                </button>
            </div>
      {loaderState === true && <Loader></Loader>}
      {/* Error message Disoaly block */}
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}
      {(loaderState === false ) && <Container fluid className="p-5">
        <Row className="d-flex flex-column justify-content-center">
          <Col sm={12} className="d-flex flex-wrap border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
            <span>
              <img src={userlogo} alt={userlogo} className="fluid rounded-circle col-4" style={{ height: "200px", width: "200px" }} /><br />
            </span>
            <Row className="mt-3 align-items-flex-start justify-content-space-arround col-8">
              <h2 className="text-start">
                {empProfile.employerName}
              </h2>

              <hr />
              <Col sm={6} className="text-end ddrowstyle">
                <p style={{ fontWeight: "500" }}><GoOrganization></GoOrganization> </p>
                <p className="mx-3" style={{ fontWeight: "500" }}>  {empProfile.organisation} </p>
              </Col>
              <Col sm={6} className="text-end ddrowstyle">
                <p style={{ fontWeight: "500" }}><MdOutlineMailOutline></MdOutlineMailOutline> </p>
                <p className="mx-3" style={{ fontWeight: "500" }}> {empProfile.employerEmail} </p>
              </Col>
              <Col sm={6} className="text-center ddrowstyle">
                <p style={{ fontWeight: "500" }}><IoMdCall /></p>
                <p className="mx-3" style={{ fontWeight: "500" }}>{empProfile.employerPhNo}</p>
              </Col>
              <Col sm={6} className="text-center ddrowstyle">
                <p style={{ fontWeight: "500" }}><IoLocationOutline /></p>
                <p className="mx-3" style={{ fontWeight: "500" }}>{empProfile.orgLocation} </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>}
      <Footer></Footer>
    </>
  );
}

export default Adminemployerprofileview;