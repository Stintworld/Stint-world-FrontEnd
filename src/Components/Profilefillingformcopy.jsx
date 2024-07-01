import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Stylesh/Profilefillingform.css";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";




const Profilefillingformcopy = ({logout}) => {
    const applicantId = localStorage.getItem("ApplicantId")
    const history = useHistory();
    const [expstate, setExpstate] = useState(false)
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()

    const name = localStorage.getItem("applicantName");
    const apemail= localStorage.getItem("ApplicantEmail")


    const engineeringBranches = [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Others",
    ];

    const fname = useRef(name);
    const lname = useRef();
    const email = useRef(apemail);
    const phone = useRef();
    const dob = useRef();
    const fileimage = useRef();
    const resume = useRef();
    const school10th = useRef();
    const passingYear10th = useRef();
    const percentageCGPA10th = useRef();
    const school12th = useRef();
    const passingYear12th = useRef();
    const percentageCGPA12th = useRef();
    const schoolDegree = useRef();
    const passingYearDegree = useRef();
    const percentageCGPACgpaDegree = useRef();
    const specializationDegree = useRef();
    const jobLevel = useRef("FRESHER");
    const skills = useRef();
    const mtechcollege = useRef();
    const mtechYOP = useRef();
    const mtechmarks = useRef();
    const mtechbranch = useRef();
    const expyear = useRef(0);
    const applicant_location = useRef('');

    
   

    var joblevel;
    var yoe;
    const handleJobLevelChange = (event) => {
        if (event.target.value === "EXPERIENCED") {
            setExpstate(true);
            // yoe= expyear.current.value;
            joblevel = "EXPERIENCED"
        }
        else {
            setExpstate(false);
            // yoe=0;
            joblevel = "FRESHER"
        }
    };


    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 90000)

    }, [errMessageState])


    const submitprofileinfo = (event) => {
        event.preventDefault();
        const skill = skills.current.value;
        const SkillsArray = skill.split(",")
        const filteredSKillsArray = SkillsArray.filter((skill) => { return (skill !== "") })
        const trimmedKillsArray = filteredSKillsArray.map(element => element.trim());


        const pphoto = fileimage.current.files[0];
        const AppResume = resume.current.files[0];
        let formDataImage = new FormData();
        let formDataResume = new FormData();
        formDataImage.append("image", pphoto)
        formDataResume.append("resume", AppResume)

        var gender;
        const Gender = document.getElementsByName('gender')
        for (const element of Gender) {
            if (element.checked) {
                gender = element.value;
            }

        }

        const Applicant = {
            firstName: fname.current.value,
            lastName: lname.current.value,
            email: email.current.value,
            phNo: phone.current.value,
            dob: dob.current.value,
            gender: gender,
            school_10th_Name: school10th.current.value,
            school_10th_YOP: passingYear10th.current.value,
            school_10th_Perc: percentageCGPA10th.current.value,
            school_12th_Name: school12th.current.value,
            school_12th_YOP: passingYear12th.current.value,
            school_12th_Perc: percentageCGPA12th.current.value,
            jobLevel: jobLevel.current.value,
            applicantLocation: applicant_location.current.value,
            // jobLevel: joblevel,

            yearOfExp: expyear.current.value,
            //  yearOfExp: yoe,
            btechCollegeName: schoolDegree.current.value,
            btechCollegeYOP: passingYearDegree.current.value,
            btechDeptName: specializationDegree.current.value,
            btechCollegePerc: percentageCGPACgpaDegree.current.value,
            mtechCollegePerc: mtechmarks.current.value,
            mtechDeptName: mtechbranch.current.value,
            mtechCollegeYOP: mtechYOP.current.value,
            mtechCollegeName: mtechcollege.current.value,
            skills: trimmedKillsArray,
        }
        const applicantData = axios.put(`https://www.stint.world/applicants/updateprofile/${applicantId}`, Applicant,
        // const applicantData = axios.put(`http://localhost:8080/applicants/updateprofile/${applicantId}`, Applicant,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then((response) => {
                return (
                    response.data
                )
            }).then((data) => {
                if (data.statusCode === 201) {
                    const resumeresponse = resumeApiCall(formDataResume)
                    const pphotoresponse = profilephotoApiCall(formDataImage)
                }
            }).catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 404") {
                    setErrMessage(`${err.response.data.message}`); 
                }
                else if(err.message === "Network Error")
                {
                    
                    setErrMessage(`${err.message} : connection refused`)
                }
                else if(err.message === "equest failed with status code 500")
                {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if(err.message === "Request failed with status code 404" || err.code=== "ERR_BAD_REQUEST")
                {
                    setErrMessage(`${err.response.data.message}`)
                }
                else
                {
                    setErrMessage("Somthing went wrong please check")
                }
            })
    }



    function resumeApiCall(formDataResume)
    {
        var resprresume;
        const applicantResume= axios.post(`https://www.stint.world/applicants/addresume/${applicantId}`, formDataResume, {headers:{'Content-Type':'multipart/form-Data'}})
        // const applicantResume=  axios.post(`http://localhost:8080/applicants/addresume/${applicantId}`, formDataResume, {headers:{'Content-Type':'multipart/form-Data'}})
        .then((response)=>{
            return response.data
        })
        .then((data)=>{;
            if(data.statusCode=== 201)
                {
                    alert("Resume Uploaded Successfully")
                }
        })
        .catch((err)=>{
            setErrMessageState(true)
            if(err.message === "Network Error" || err.code ==='ERR_NETWORK')
                {
                    setErrMessage(`${err.message} : connection refused`)
                }
            else if (err.message ==="Request failed with status code 404") {
                setErrMessage(`${err.response.data.message}`); 
            }
            
            else if(err.message === "equest failed with status code 500")
            {
                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
            }
            else if(err.message === "Request failed with status code 404" || err.code=== "ERR_BAD_REQUEST")
            {
                setErrMessage(`${err.response.data.message}`)
            }
            else
            {
                setErrMessage("Somthing went wrong please check")
            }
        })  
       

    }


   function profilephotoApiCall(formDataImage)
    {
        let resprimg;
        const applicantImage= axios.post(`https://www.stint.world/applicants/addimage/${applicantId}`, formDataImage, {headers:{'Content-Type':'multipart/form-Data'}})
        // const applicantImage=  axios.post(`http://localhost:8080/applicants/addimage/${applicantId}`, formDataImage, {headers:{'Content-Type':'multipart/form-Data'}})
        .then((response)=>{
            return response.data
        })
        .then((data)=>{
            if(data.statusCode=== 201)
                {
                    alert("Profile Photo Updated Successfully")
                    alert("Congratulatons!, We have recevied your profile information")
                    history.push("/subscribe")                   
                }
        })
        .catch((err)=>{
            setErrMessage(err.message);
            setErrMessageState(true)
            if(err.message === "Network Error")
            {
                setErrMessage(`${err.message} : connection refused`)
            }
            else if (err.message ==="Request failed with status code 404") 
            {
                setErrMessage(`${err.response.data.message}`); 
            }
            else if(err.message === "equest failed with status code 500")
            {
                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
            }
            else if(err.message === "Request failed with status code 404" || err.code=== "ERR_BAD_REQUEST")
            {
                setErrMessage(`${err.response.data.message}`)
            }
            else
            {
                setErrMessage("Somthing went wrong please check")
            }
        })     
    }

    return (
        <>
            <NavigationBar logout={logout}></NavigationBar>
            <div className="container my-5 " style={{ borderLeft: "10px solid #a741dc", borderRadius: "20px", backgroundColor: "#eed8fc", boxShadow: "5px 5px 5px 2px #ce8df3" }}>
                <h2 className="pt-5" style={{ color: "#63247f" }}>Profile Information</h2>
                <p>
                    Please enter your information and proceed to the next step so we can
                    build profile.
                </p>
                {errMessageState && <div className="row px-5 py-1 mx-5 col-4 border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                    {errMessage}
                </div>}
                <form style={{ textAlign: "left" }} onSubmit={submitprofileinfo}>
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
                                    value={name}
                                    ref={fname}
                                    disabled
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
                                    ref={lname}
                                    required
                                    minLength={1}
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
                                    value={apemail}
                                    ref={email}
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
                                    ref={phone}
                                    minLength={10}
                                    maxLength={13}
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
                                    ref={dob}
                                    required
                                />
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
                                    // value={applicant_location}
                                    ref={applicant_location}
                                    required
                                />
                            </div>
                        </div>
                    </section>




                    <h5 className="text-left mt-5 mb-3">Educational Details </h5>
                    <h6 className="mt-5">Class X </h6>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="school10th" className="col-sm-3 col-form-label compulsary">
                                School Name
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school10th"
                                    placeholder="School Name"
                                    ref={school10th}
                                    required
                                    minLength={5}
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
                                    ref={passingYear10th}
                                    required
                                    minLength={4}
                                    maxLength={4}
                                    step={0.1}
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
                                    ref={percentageCGPA10th}
                                    required
                                    min={0}
                                    max={100}
                                    step={0.1}
                                />
                            </div>
                        </div>
                    </section>



                    <h6 className="mt-5">Class XII </h6>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>

                        <div className="form-group row col-6">
                            <label htmlFor="school12th" className="col-sm-3 col-form-label compulsary">
                                College Name
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school12th"
                                    placeholder="School Name"
                                    ref={school12th}
                                    required
                                    minLength={5}
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
                                    ref={passingYear12th}
                                    required
                                    minLength={4}
                                    maxLength={4}
                                    step={0.1}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-starts" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPA12th" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPA12th"
                                    placeholder="Percentage or CGPA"
                                    ref={percentageCGPA12th}
                                    required
                                    min={0}
                                    max={100}
                                    step={0.1}
                                />
                            </div>
                        </div>
                    </section>

                    <h6 className="mt-5">Degree </h6>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="schoolDegree" className="col-sm-3 col-form-label compulsary">
                                College Name
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolDegree"
                                    placeholder="School/College Name"
                                    ref={schoolDegree}
                                    required
                                    minLength={5}
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
                                    ref={specializationDegree}
                                    required
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
                                    ref={passingYearDegree}
                                    required
                                    minLength={4}
                                    maxLength={4}
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
                                    ref={percentageCGPACgpaDegree}
                                    step={0.1}
                                    minLength={1}
                                    min={0}
                                    max={100}
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
                                    ref={mtechcollege}
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
                                    ref={mtechbranch}
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
                                    ref={mtechYOP}
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
                                    ref={mtechmarks}
                                    step={0.1}
                                    min={0}
                                    max={100}
                                />
                            </div>
                        </div>

                    </section>
                    <h5 className="text-left mt-5 mb-3">Other Info </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="joblevel" className="col-sm-3 col-form-label compulsary">
                                Job Level
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="joblevel"
                                    onChange={handleJobLevelChange}
                                    ref={jobLevel}
                                    required
                                >
                                    <option value="">Select Job Level</option>
                                    <option value="FRESHER">Fresher</option>
                                    <option value="EXPERIENCED">Experienced</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="skills" className="col-sm-3 col-form-label compulsary">
                                Skills
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="skills"
                                    placeholder="Skills separate it by ,"
                                    ref={skills}
                                    minLength={"20"}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {expstate && <section className="flex-container col-6 d-flex my-3" style={{ justifyContent: "flex-start" }}>
                        <label htmlFor="expyears" className="col-sm-3 col-form-label">
                            Year of Experience
                        </label>
                        <div className="col-sm-6 mb-5">
                            <input
                                type="number"
                                className="form-control"
                                id="expyears"
                                ref={expyear}
                                placeholder="Year of Experience"
                                // name="expyears"
                                required
                                step={1}
                                minLength={1}
                                min={1}
                                max={40}
                            />
                        </div>
                    </section>}

                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="pphoto" className="col-sm-3 col-form-label compulsary">
                                Upload Image
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profilephoto"
                                    accept="image/*" // Accepts only image files                                    
                                    ref={fileimage}
                                    required
                                />
                                <p className="text-muted">Accepted formats: JPG, JPEG, PNG</p>
                            </div>
                        </div>
                        {/* photo and resume code */}
                        <div className="form-group row col-6">
                            <label htmlFor="resume" className="col-sm-3 col-form-label compulsary">
                                Upload Resume
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="resume"
                                    ref={resume}
                                    accept="file/pdf"
                                    required
                                />
                            </div>
                        </div>
                    </section>


                    <section className="flex-container col-13 d-flex my-3 compulsary" style={{ justifyContent: "flex-end" }}>
                        <div className="form-group row col-5 mb-5">
                            <div className="col-sm-8">
                                <input
                                    type="submit"
                                    className="form-control"
                                    id="submitprofile"
                                    value="Submit"
                                    style={{ backgroundColor: "#a741dc", color: "white", fontWeight: "bold" }}
                                />
                            </div>
                        </div>
                    </section>
                </form>
            </div >
            <Footer></Footer>
        </>
    );
}
export default Profilefillingformcopy;