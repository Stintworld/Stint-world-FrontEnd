import "../Stylesh/Updateprofile.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import userlogo from "../images/userlogo.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'; // Import Modal component
import Form from 'react-bootstrap/Form'; // Import Form component
import axios from "axios";


const Updateprofile = ({ profileData, candidateID, profilephoto, updateProfileResteState }) => {
    const history = useHistory();
    const [expstate, setExpstate] = useState(true)
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()

    const engineeringBranches = [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Information Technology",
        "Mechanical Engineering",
        // Add more branches here
    ];


    var skillslist = "";
    const skillsdata = profileData.skills.map((skill) => {
        skillslist = skillslist + skill + ","

    })

    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const [firstName, setFirstName] = useState(profileData.firstName);
    const [lastName, setLastName] = useState(profileData.lastName);
    const [email, setEmail] = useState(profileData.email);
    const [phone, setPhone] = useState(profileData.phNo);
    const [dob, setDob] = useState(profileData.dob);
    const [file, setFile] = useState('');
    const [resume, setResume] = useState('');
    const [school10th, setSchool10th] = useState(profileData.school_10th_Name);
    const [passingYear10th, setPassingYear10th] = useState(profileData.school_10th_YOP);
    const [percentageCGPA10th, setPercentageCGPA10th] = useState(profileData.school_10th_Perc);

    const [school12th, setSchool12th] = useState(profileData.school_12th_Name);
    const [passingYear12th, setPassingYear12th] = useState(profileData.school_12th_YOP);
    const [percentageCGPA12th, setPercentageCGPA12th] = useState(profileData.school_12th_Perc);

    const [schoolDegree, setSchoolDegree] = useState(profileData.btechCollegeName);
    const [passingYearDegree, setPassingYearDegree] = useState(profileData.btechCollegeYOP);
    const [percentageCGPACgpaDegree, setPercentageCGPACgpaDegree] = useState(profileData.btechCollegePerc);
    const [specializationDegree, setSpecializationDegree] = useState(profileData.btechDeptName);
    const [expyear, setExpyear] = useState(profileData.yearOfExp);
    const [mtechcollege, setMtechcollege] = useState(profileData.mtechCollegeName);
    const [mtechYOP, setMtechYOP] = useState(profileData.mtechCollegeYOP);
    const [mtechmarks, setMtechmarks] = useState(profileData.mtechCollegePerc);
    const [mtechbranch, setMtechbranch] = useState(profileData.mtechDeptName);
    const [skills, setSkills] = useState(skillslist);
    const [gender, setGender] = useState(profileData.gender);
    const [applicatLocation, setApplicant_Location] = useState(profileData.applicantLocation)
    const [jobLevel, setJobLevel] = useState(profileData.jobLevel);
    // const [jobLevel, setJobLevel] = useState('EXPERIENCED');


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleDOB = (event) => {
        setDob(event.target.value);
    };
    const [imageUrl, setImageUrl] = useState()

    const handleImageChange = (event) => {
        setImageUrl(URL.createObjectURL(event.target.files[0])); // Update image URL for immediate preview
        setFile(event.target.files[0])
    };
    const handlePopupClose = () => setShowPopup(false);

    const handleResumeChange = (event) => {
        setResume((event.target.files[0]));
    };
    var joblevel;
    const handleJobLevelChange = (event) => {
        // setJobLevel(event.target.value);
        if (event.target.value === "EXPERIENCED") {
            setExpstate(true);
            //    joblevel="FRESHER"
            setJobLevel("EXPERIENCED")
        }
        else {
            setExpstate(false);
            // joblevel="EXPERIENCED"
            setJobLevel("FRESHER")
            setExpyear(0)
        }
    };
    const handleexpyear = (event) => {
        setExpyear(event.target.value)
    }
    const handleSpecializationChange = (event) => {
        setSpecializationDegree(event.target.value);
    };
    const handleSkillschange = (event) => {
        setSkills(event.target.value)
    };
    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 90000)

    }, [errMessageState])




    // Code To Update Applicant's Profile details. 
    const submitprofileupdate = (event) => {
        event.preventDefault();
        const SkillsArray = skills.split(",")
        const filteredSKillsArray = SkillsArray.filter((skill) => { return (skill !== "") })
        const trimmedKillsArray = filteredSKillsArray.map(element => element.trim());

        var gender;
        const Gender = document.getElementsByName('gender')
        for (let i = 0; i < Gender.length; i++) {
            if (Gender[i].checked) {
                gender = Gender[i].value;
            }
        }

        const updateApplicant = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phNo: phone,
            dob: dob,
            gender: gender,
            school_10th_Name: school10th,
            school_10th_YOP: passingYear10th,
            school_10th_Perc: percentageCGPA10th,
            school_12th_Name: school12th,
            school_12th_YOP: passingYear12th,
            school_12th_Perc: percentageCGPA12th,
            // jobLevel: jobLevel.current.value,
            jobLevel: jobLevel,
            yearOfExp: expyear,
            btechCollegeName: schoolDegree,
            btechCollegeYOP: passingYearDegree,
            btechDeptName: specializationDegree,
            btechCollegePerc: percentageCGPACgpaDegree,
            mtechCollegePerc: mtechmarks,
            mtechDeptName: mtechbranch,
            mtechCollegeYOP: mtechYOP,
            mtechCollegeName: mtechcollege,
            skills: trimmedKillsArray,
            applicantLocation: applicatLocation,
        }

        const updateCandidateProfile = axios.put(`https://www.stint.world/applicants/updateprofile/${candidateID}`, updateApplicant,
            { headers: { 'Content-Type': 'application/json' } }
        ).then((response) => {
            return (
                response.data
            )
        }).then((data) => {
            if (data.statusCode === 201) {
                alert("Profile details Updated successfully")
                updateProfileResteState(false)
                // history.push("/viewprofile")

            }
        }).catch((err) => {
            setErrMessageState(true)
            if (err.message === "Request failed with status code 500") {
                setErrMessage(`${err.response.data.error}`)
            }
            else if (err.message === "Network Error") {
                setErrMessage(`${err.message} : Request failed`)
            }
            else if (err.message === "Request failed with status code 500") {
                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
            }
            else if (err.message === "Request failed with status code 406") {
                setErrMessage(`${err.response.data.error}`)
            }
            else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                setErrMessage(`${err.response.data.message}`)
            }
            else {
                setErrMessage(`Something went wrong! ${err}`)
            }
        })
    }




    // Code To Update the Profile Photo.
    const handleSavePhoto = () => {
        setShowPopup(false); // Close popup after saving
        let formDataImage = new FormData();
        formDataImage.append("image", file)

        const applicantImage = axios.post(`https://www.stint.world/applicants/addimage/${candidateID}`, formDataImage, { headers: { 'Content-Type': 'multipart/form-Data' } })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                if (data.statusCode === 201) {
                    alert("Profile Photo updated successfully")
                    updateProfileResteState(false)
                }
            })
            .catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Request failed with status code 406") {
                    setErrMessage(`${err.response.data.error}`)
                }
                else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    setErrMessage(`${err.response.data.message}`)
                }
                else {
                    setErrMessage(`Something went wrong! ${err}`)
                }
            })
    };





    // Code To Update Applicant's resume.
    const handleUpdateResume = (event) => {
        event.preventDefault();

        let formDataResume = new FormData();
        formDataResume.append("resume", resume)
        const applicantResume = axios.post(`https://www.stint.world/applicants/addresume/${candidateID}`, formDataResume, { headers: { 'Content-Type': 'multipart/form-Data' } })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                if (data.statusCode === 201) {
                    alert(data.message)
                    updateProfileResteState(false)
                }
            })
            .catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Request failed with status code 406") {
                    setErrMessage(`${err.response.data.error}`)
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
            <div className="container my-5 " style={{ borderLeft: "10px solid #a741dc", borderRadius: "20px", backgroundColor: "#eed8fc", boxShadow: "5px 5px 5px 2px #ce8df3" }}>
                <h2 className="pt-5" style={{ color: "#63247f" }}>Update Profile</h2>
                <p>
                    Keep updating the profile, it standsout your candidature
                </p>
                <Row className="d-flex flex-column justify-content-center">
                    <Col sm={12} className="d-flex border border-radius-1 py-3 rounded-5" style={{ justifyContent: "space-around", backgroundColor: "#eed8fc", borderColor: "#e0baf8" }}>
                        <span>
                            <img src={profilephoto} alt={userlogo} className="fluid rounded-circle col-4" style={{ height: "200px", width: "200px" }} /><br />
                            {/* <Link to="/updateprofile"><button className="col-8 align-right mt-2 rounded-2 " style={{backgroundColor:"#a741dc", color:"white", borderColor:"#a741dc"}}>Change Photo</button> </Link> */}
                            <Link to="#" onClick={() => setShowPopup(true)}>
                                <button className="col-8 align-right mt-2 rounded-2 " style={{ backgroundColor: "#a741dc", color: "white", borderColor: "#a741dc" }}>Change Photo</button>
                            </Link>
                        </span>
                        {errMessageState && <div className="row px-5 py-1 mx-5 col-4 border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                            {errMessage}
                        </div>}
                    </Col>
                    {/* Popup for image selection and saving */}
                    <Modal show={showPopup} onHide={handlePopupClose}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#63247f" }}>Change Photo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Select New Photo</Form.Label>
                                    <Form.Control type="file" onChange={handleImageChange} />
                                </Form.Group>
                            </Form>
                            <img src={imageUrl} alt="SelectedPhotoPreview" style={{ maxWidth: "300px", maxHeight: "300px" }} />
                        </Modal.Body>
                        <Modal.Footer>
                            <button variant="secondary" className="rounded-2 px-3 py-1" onClick={handlePopupClose} style={{ backgroundColor: "#a741dc", color: "white", border: "1px solid #eed8fc" }}>
                                Cancel
                            </button>
                            <button variant="primary" className="rounded-2 px-3 py-1" onClick={handleSavePhoto} style={{ backgroundColor: "#a741dc", color: "white", border: "1px solid #eed8fc" }}>
                                Save Photo
                            </button>
                        </Modal.Footer>
                    </Modal>
                </Row>

                <form style={{ textAlign: "left" }} onSubmit={submitprofileupdate}>
                    <h5 className="text-left mt-5 mb-3">Persoanl Info </h5>
                    <p className="compulsaryinfo"> indicates the feild must be filled </p>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label compulsary">First Name</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="lastName" className="col-sm-3 col-form-label compulsary">Last Name</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="email" className="col-sm-3 col-form-label compulsary">
                                Email
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    disabled
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="phone" className="col-sm-3 col-form-label compulsary">
                                Phone Number
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="birthDate" className="col-sm-3 col-form-label compulsary">
                                Birth Date
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthMonth"
                                    placeholder="MM"
                                    min="1"
                                    max="12"
                                    value={dob}
                                    onChange={handleDOB}>
                                </input>
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="form-group row col-6">
                            <label htmlFor="gender" className="col-sm-3 col-form-label compulsary">Gender</label>
                            <div className="col-sm-6">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="MALE"
                                        checked={gender === "MALE"}
                                        onChange={(event) => setGender(event.target.value)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="FEMALE"
                                        checked={gender === "FEMALE"}
                                        onChange={(event) => setGender(event.target.value)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="location" className="col-sm-3 col-form-label compulsary">
                                Location
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="applicantLocation"
                                    placeholder="location"
                                    value={applicatLocation}
                                    onChange={(event) => { setApplicant_Location(event.target.value) }}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    <h5 className="text-left mt-5 mb-3">Educational Details </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="school10th" className="col-sm-3 col-form-label compulsary">
                                School (10th)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school10th"
                                    placeholder="School Name"
                                    value={school10th}
                                    onChange={(event) => setSchool10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row col-6">
                            <label htmlFor="passingYear10th" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYear10th"
                                    placeholder="YYYY"
                                    value={passingYear10th}
                                    onChange={(event) => setPassingYear10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-starts" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPA10th" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPA10th"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPA10th}
                                    onChange={(event) => setPercentageCGPA10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>

                        <div className="form-group row col-6">
                            <label htmlFor="school12th" className="col-sm-3 col-form-label compulsary">
                                School (12th)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school12th"
                                    placeholder="School Name"
                                    value={school12th}
                                    onChange={(event) => setSchool12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="passingYear12th" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYear12th"
                                    placeholder="YYYY"
                                    value={passingYear12th}
                                    onChange={(event) => setPassingYear12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-starts" }}>

                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPA10th" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPA12th"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPA12th}
                                    onChange={(event) => setPercentageCGPA12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="schoolDegree" className="col-sm-3 col-form-label compulsary">
                                School/College (Degree)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolDegree"
                                    placeholder="School/College Name"
                                    value={schoolDegree}
                                    onChange={(event) => setSchoolDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="specializationDegree" className="col-sm-3 col-form-label compulsary">
                                Department
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="specializationDegree"
                                    value={specializationDegree}
                                    onChange={handleSpecializationChange}
                                >
                                    <option value="">Select Department</option>
                                    {engineeringBranches.map((branch) => (
                                        <option key={branch} value={branch}>
                                            {branch}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="passingYearDegree" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="passingYearDegree"
                                    placeholder="YYYY"
                                    value={passingYearDegree}
                                    onChange={(event) => setPassingYearDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPACgpaDegree" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPACgpaDegree"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPACgpaDegree}
                                    onChange={(event) => setPercentageCGPACgpaDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <h6 className="mt-5">Masters (Optional)</h6>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="mtechcollege" className="col-sm-3 col-form-label ">
                                College Name
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mtechcollge"
                                    placeholder="College Name"
                                    // ref={mtechcollege} 
                                    value={mtechcollege}
                                    onChange={(event) => { setMtechcollege(event.target.value) }}
                                    minLength={5}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="specializationDegree" className="col-sm-3 col-form-label ">
                                Department
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="mtechbranch"
                                    // ref={mtechbranch}
                                    value={mtechbranch}
                                    onChange={(event) => { setMtechbranch(event.target.value) }}
                                >
                                    <option value="">Select Department</option>
                                    {engineeringBranches.map((branch) => (
                                        <option key={branch} value={branch}>
                                            {branch}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="mtechYOP" className="col-sm-3 col-form-label ">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mtechYOP"
                                    placeholder="YYYY"
                                    // ref={mtechYOP} 
                                    value={mtechYOP}
                                    onChange={(event) => { setMtechYOP(event.target.value) }}
                                    minLength={4}
                                    maxLength={4}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="mtechmarks" className="col-sm-3 col-form-label ">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mtechmarks"
                                    placeholder="Percentage or CGPA"
                                    // ref={mtechmarks} 
                                    value={mtechmarks}
                                    onChange={(event) => { setMtechmarks(event.target.value) }}
                                    step={1}
                                    min={0}
                                    max={100}
                                />
                            </div>
                        </div>

                    </section>
                    <h5 className="text-left mt-5 mb-3">Skill Sets </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-12">
                            <label htmlFor="skills" className="col-sm-3 col-form-label compulsary">
                                Skills
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="skills"
                                    placeholder="Skills separate it by ,"
                                    value={skills}
                                    onChange={handleSkillschange}
                                    minLength={"20"}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    <h5 className="text-left mt-5 mb-3">Other Info </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="jobLevel" className="col-sm-3 col-form-label compulsary">
                                Job Level
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="jobLevel"
                                    value={jobLevel}
                                    onChange={handleJobLevelChange}
                                >
                                    <option value="">Select Job Level</option>
                                    <option value="FRESHER">Fresher</option>
                                    <option value="EXPERIENCED">Experienced</option>
                                </select>
                            </div>
                        </div>
                        {expstate && <div className="form-group row col-6">
                            <label htmlFor="expyear" className="col-sm-4 col-form-label">
                                Year of Experience
                            </label>
                            <div className="col-sm-6 mb-5">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="expyear"
                                    // ref={expyear}
                                    onChange={handleexpyear}
                                    value={expyear}
                                    placeholder="Year of Experience"
                                    name="expyear"
                                    required
                                    step={1}
                                    minLength={1}
                                    min={0}
                                    max={40}
                                />
                            </div>
                        </div>}
                    </section>


                    <section className="flex-container col-auto d-flex my-3 mx-3 justify-content-start">
                        <div className="form-group row col-auto mb-5 justify-content-center">
                            <div className="col-auto">
                                <input
                                    type="submit"
                                    className="form-control"
                                    id="submitprofile"
                                    value="Update profile Info"
                                    style={{ backgroundColor: "#a741dc", color: "white", fontWeight: "bold" }}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                </form>



                {/* update new resume code */}
                <form className="pb-5" onSubmit={handleUpdateResume}>
                    <section className=" col-13  my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row flex-column col-6 resumupdateinput">
                            <label htmlFor="resume" className="col-sm-6 col-form-label compulsary" style={{ textAlign: "left" }}>
                                Update Resume
                            </label>
                            <div className="col-auto">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="resume"
                                    // value={resume}
                                    required
                                    onChange={handleResumeChange}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-auto justify-content-start mt-3">
                            <div className="col-auto">
                                <input
                                    type="submit"
                                    className="form-control"
                                    id="resume"
                                    value="Update Resume"
                                    style={{ backgroundColor: "rgb(167, 65, 220)", color: "white", fontWeight: "bold" }}
                                />
                            </div>
                        </div>
                    </section>
                </form>
            </div >

    );
}

export default Updateprofile;