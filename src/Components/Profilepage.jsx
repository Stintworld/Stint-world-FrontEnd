import "../Stylesh/Profilepage.css"
import userlogo from "../images/userlogo.jpg"
import NavigationBar from "../Components/NavigationBar.jsx";
import Updateprofile from "../Components/Updateprofile.jsx";
import Footer from "../Components/Footer.jsx";
import Loader from "../Components/Loader.jsx";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { saveAs } from 'file-saver';



const Profilepage = ({ logout }) => {

    const history = new useHistory();
    const candidateID = localStorage.getItem("ApplicantId");
    const [profileData, setProfileData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMaster, setIsMaster] = useState(false);
    const [resume, setResume] = useState()
    const [appImages, setAppImages] = useState()
    const [updateProfileState, setUpdateProfileState] = useState(false)

    const updateProfileResteState=()=>
    {
        setUpdateProfileState(false)
    }

    // To get the Appliant Profile details Based on Applicant ID which is stored in Local Storage
    useEffect(() => {
            const pdata= axios.get(`https://www.stint.world/applicants/getprofile/${candidateID}`)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                if (data.statusCode === 200) {
                    if (data.data.skills === null || data.data.btechCollegeName === null || data.data.btechDeptName === null || data.data.school_10th_Name === null || data.data.school_10th_Perc == null || data.data.school_10th_YOP === null) {
                        history.push("/formprofile")
                    }
                    else {
                        setProfileData(data.data)
                        if (data.data.mtechCollegeName !== '' || data.data.mtechCollegeYOP !== '' || data.data.mtechDeptName !== '') {
                            setIsMaster(true);
                        }
                        setIsLoaded(true)
                        history.push("/viewprofile")
                    }

                }

            })
            .catch((err) => {
                if (err.message === "Network Error") {

                    alert(`${err.message} : connection refused`)
                }
                else if (err.message === "equest failed with status code 500" || err.code === 'ERR_BAD_RESPONSE') {
                    alert(`${err.response.data.status} ${err.response.data.error} : ${err.response.data.message}`)
                }
                else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    alert(`${err.response.data.message}`)
                }
                else if (err.message === "Request failed with status code 406") {
                    alert(`${err.response.data.status} ${err.response.data.error}`)
                }
                else {
                    alert(`Something went wrong! ${err}`)
                }
            })

        // To access the APplicant Profile Photo
        const loadImages = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                }
                
                const response = await fetch(`https://www.stint.world/applicants/findImage/${candidateID}`, requestOptions);
                // const response = await fetch(`http://localhost:8080/applicants/findImage/${candidateID}`, requestOptions);
                const imageBlob = await response.blob()
                const imageURL = URL.createObjectURL(imageBlob)
                setAppImages(imageURL)
            }
            catch (error) {
                setAppImages(userlogo)
            }
        }
        loadImages()

        // To get the applicant Resume 
        const loadResume = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                }
                const response = await fetch(`https://www.stint.world/applicants/findResume/${candidateID}`, requestOptions);
                // const response = await fetch(`http://localhost:8080/applicants/findResume/${candidateID}`, requestOptions);
                const resumeBlob = await response.blob()
                const resumeURL = URL.createObjectURL(resumeBlob)
                setResume(resumeURL)
            }
            catch (error) {
                alert("Resume loading failed")
            }
        }
        loadResume()
    }, [candidateID])


    const handleUpdateProfile = () => {
        setUpdateProfileState(true);
    }

    const handleDownloadResume = (e) => {
        e.preventDefault();
        saveAs(resume, `${profileData.firstName}  ${profileData.lastName} - Resume`)

    }
    const handleViewResume = (e) => {
        e.preventDefault();
        window.open(resume)
    }

    return (
        <>
            <NavigationBar logout={logout} ></NavigationBar>
            <Container fluid className="p-4">
                {(isLoaded === true && updateProfileState === false) &&
                    <>
                        <Row className="d-flex  flex-column justify-content-center">
                            <Col sm={12} className="d-flex flex-wrap border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
                                <span>
                                    <img src={`${appImages}`} alt={userlogo} className="fluid rounded-circle col-4" style={{ height: "200px", width: "200px" }} /><br />
                                    <button className="col-8 align-right mt-2 rounded-2 " onClick={handleUpdateProfile} style={{ backgroundColor: "#a741dc", color: "white", borderColor: "#a741dc" }}>Update Profile</button>
                                </span>
                                <Row className="mt-3 flex-wrap align-items-flex-start justify-content-space-arround col-md-8">
                                    <h2 className="text-start">
                                        {profileData.firstName} {profileData.lastName}
                                    </h2>

                                    <hr />
                                    <Col sm={6} className="text-end ddrowstyle">
                                        <p style={{ fontWeight: "500" }}><MdOutlineMailOutline></MdOutlineMailOutline> </p>
                                        <p className="mx-3" style={{ fontWeight: "500" }}> {profileData.email}  </p>
                                    </Col>
                                    <Col sm={6} className="text-center ddrowstyle">
                                        <p style={{ fontWeight: "500" }}><IoMdCall /></p>
                                        <p className="mx-3" style={{ fontWeight: "500" }}>{profileData.phNo} </p>
                                    </Col>
                                    <Col sm={6} className="text-end ddrowstyle">
                                        <p style={{ fontWeight: "500" }}><BsBriefcase></BsBriefcase> </p>
                                        <p className="mx-3" style={{ fontWeight: "500" }}>{profileData.jobLevel}  </p>
                                    </Col>
                                    <Col sm={6} className="text-center ddrowstyle">
                                        <p style={{ fontWeight: "500" }}><IoLocationOutline /></p>
                                        <p className="mx-3" style={{ fontWeight: "500" }}>{profileData.applicantLocation}</p>
                                    </Col>
                                    <Col sm={6} className="text-end ddrowstyle">
                                        <p style={{ fontWeight: "500" }}><CiCalendarDate></CiCalendarDate> </p>
                                        <p className="mx-3" style={{ fontWeight: "500" }}>{profileData.dob} </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-column justify-content-center mt-3">
                            <Col sm={12} className="d-flex border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
                                <Row className="mt-3 align-items-flex-start justify-content-space-arround col-12">
                                    <h2 className="text-start">
                                        Education
                                    </h2>
                                    <hr />
                                    <Col sm={6} className="text-start">
                                        {isMaster && <>
                                            <p style={{ fontWeight: "500" }}>Masters in {profileData.mtechDeptName} </p>
                                            <p style={{ fontWeight: "400" }}> {profileData.mtechCollegeName} </p>
                                            <p style={{ fontWeight: "400" }}>Year: {profileData.mtechCollegeYOP}</p>
                                            <p style={{ fontWeight: "400" }}>Percentage / CGPA : {profileData.mtechCollegePerc}</p>
                                            <hr />
                                        </>
                                        }
                                        
                                        <p style={{ fontWeight: "500" }}>B.E in {profileData.btechDeptName} </p>
                                        <p style={{ fontWeight: "400" }}> {profileData.btechCollegeName} </p>
                                        <p style={{ fontWeight: "400" }}>Year : {profileData.btechCollegeYOP}</p>
                                        <p style={{ fontWeight: "400" }}>Percentage / CGPA : {profileData.btechCollegePerc}</p>
                                        <hr />
                                        <p style={{ fontWeight: "500" }}>Class XII </p>
                                        <p style={{ fontWeight: "400" }}> {profileData.school_12th_Name} </p>
                                        <p style={{ fontWeight: "400" }}>Year : {profileData.school_12th_YOP}</p>
                                        <p style={{ fontWeight: "400" }}>Percentage / CGPA : {profileData.school_12th_Perc}</p>
                                        <hr />
                                        <p style={{ fontWeight: "500" }}>Class X </p>
                                        <p style={{ fontWeight: "400" }}> {profileData.school_10th_Name} </p>
                                        <p style={{ fontWeight: "400" }}>Year : {profileData.school_10th_YOP}</p>
                                        <p style={{ fontWeight: "400" }}>Percentage / CGPA : {profileData.school_10th_Perc}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className="d-flex flex-column justify-content-center mt-3">
                            <Col sm={12} className="d-flex border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
                                <Row className="mt-3 align-items-flex-start justify-content-space-start col-12">
                                    <h2 className="mb-3 text-align-left" style={{ textAlign: "left" }}>Skills </h2>
                                    <hr />
                                    <div className="d-flex flex-wrap justify-cotent-start align-items-center">
                                        {
                                            profileData.skills.map((skill, index) => { return (<span key={index} className="border border-1 rounded-3 px-4 py-1 mx-1" >{skill}</span>) })
                                        }
                                    </div>

                                </Row>

                            </Col>
                        </Row>


                        <Row className="d-flex flex-column justify-content-center mt-3">
                            <Col sm={12} className="d-flex border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
                                <Row className="mt-3 align-items-flex-start justify-content-space-arround col-12">
                                    <h2 className="text-start">
                                        Resume
                                    </h2>
                                    <hr />
                                    <Col sm={6} className="text-start d-flex flex-column justify-content-center ">
                                        <p className="d-flex justify-content-start align-items-center flex-wrap " style={{ fontWeight: "500", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                            <span className="mx-2 my-2"><span onClick={handleDownloadResume}>Download Now  <FaDownload /></span></span>
                                            <span className="mx-2 my-2"> <span onClick={handleViewResume}>View resume <FaEye /></span></span>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                }
                {isLoaded === false &&
                    <Loader></Loader>
                }
                {updateProfileState && <Updateprofile profileData={profileData} candidateID={candidateID} profilephoto={appImages} updateProfileResteState={updateProfileResteState}  ></Updateprofile>}
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Profilepage;