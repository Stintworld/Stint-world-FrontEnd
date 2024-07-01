import "../Stylesh/Profilefillingform.css";
import { useState, useRef, useEffect } from "react";
import Empnavigationbar from "../Components/Empnavigationbar.jsx";
import Footer from "../Components/Footer.jsx";
import axios from "axios";



const Postjob = ({logout}) => {

    const EmployerID= localStorage.getItem("employerId")
    const jobtyps = [
        "Full Time",
        "Part Time",
        "contract",
        "Internship",
        "Freelancing"
    ];

    const role = useRef()
    const companyname = useRef()
    const location = useRef()
    const salary = useRef()
    const jobdiscription = useRef()
    const skillrequired = useRef()
    const companywebsite = useRef()
    const aboutcompany = useRef()
    const jobtype = useRef()
    const companylogo = useRef()
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [responseFirstApi, setResponseFirstApi] = useState();
    const [responseSecondApi, setResponseSecondApi] = useState();

    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 40000)

    }, [errMessageState])

    let formDataCompanyLogo = new FormData();


    // Calling API to post new job
    const handlepostjob = (event) => {
        event.preventDefault();
        const skill = skillrequired.current.value;
        const SkillsArray = skill.split(",")
        if (SkillsArray[SkillsArray.length - 1] === '') {
            SkillsArray.pop();
        }
       
        const complogo= companylogo.current.files[0];
        formDataCompanyLogo.append("file", complogo)

        const newJob = {
            jobTitle: role.current.value,
            jobDiscription: jobdiscription.current.value,
            company: companyname.current.value,
            salary: salary.current.value,
            companyWebsite: companywebsite.current.value,
            aboutCompany: aboutcompany.current.value,
            skills: SkillsArray,
            jobType: jobtype.current.value,
            // jobLocation: location.current.value,
            jobLocation: location.current.value,
        }

        const newJobPost = axios.post(`https://www.stint.world/jobs/addjob/${EmployerID}`, newJob,
            { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                if (data.statusCode === 201) 
                {
                    setResponseFirstApi(data)
                    logocomp(data)
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
                else if (err.message === "Request failed with status code 500" || err.code === 'ERR_BAD_RESPONSE') {
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

function logocomp(data){
    if( data != null &&  data.statusCode === 201)
        {
            const updateLogoNewJob = axios.post(`https://www.stint.world/jobs/addlogo/${data.data.jobId}`, formDataCompanyLogo, { headers: { 'Content-Type': 'multipart/form-Data' } })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setResponseSecondApi(data)
                alert("Congratulations!!!, You have successfully posted a job")
            })
            .catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 500" || err.code === 'ERR_BAD_RESPONSE') {
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
}

    return (
        <>
            <Empnavigationbar logout={logout} />
            <div className="container my-5 " style={{ borderLeft: "10px solid #a741dc", borderRadius: "20px", backgroundColor: "#eed8fc", boxShadow: "5px 5px 5px 2px #ce8df3" }}>
                <h2 className="pt-5" style={{ color: "#63247f" }}>Post New Job</h2>
                <p>
                    Please enter your information and proceed to the next step so we can
                    post new job.
                </p>
                {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                    {errMessage}
                </div>}
                <form style={{ textAlign: "left" }} onSubmit={handlepostjob}>
                    <p className="compulsaryinfo"> indicates the feild must be filled </p>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="role" className="col-sm-3 col-form-label compulsary">Role/ designation</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    placeholder="Developer"
                                    // value={role}
                                    // onChange={(event) => { setRole(event.target.value) }}
                                    ref={role}
                                    style={{ color: "gray" }}
                                    required

                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="companyname" className="col-sm-3 col-form-label compulsary">Organization Name</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyname"
                                    placeholder="Arrow solutions"
                                    // value={companyname}
                                    // onChange={(event) => { setCompanyname(event.target.value) }}
                                    ref={companyname}
                                    style={{ color: "gray" }}
                                    required
                                />
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
                                    id="location"
                                    placeholder="Hubli"
                                    // value={location}
                                    // onChange={(event) => { setLocation(event.target.value) }}
                                    ref={location}
                                    style={{ color: "gray" }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="salary" className="col-sm-3 col-form-label compulsary">
                                Salary
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="salary"
                                    placeholder="900000"
                                    // value={salary}
                                    // onChange={(event) => { setSalary(event.target.value) }}
                                    ref={salary}
                                    style={{ color: "gray" }}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="companywebsite" className="col-sm-3 col-form-label compulsary">
                                Company official website
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companywebsite"
                                    placeholder="https://example.com"
                                    // value={companywebsite}
                                    // onChange={(event) => { setCompanywebsite(event.target.value) }}
                                    ref={companywebsite}
                                    required
                                    style={{ color: "gray" }}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-6">
                            <label htmlFor="jobtype" className="col-sm-3 col-form-label compulsary">
                                Job Type
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="jobtype"
                                    // value={jobtype}
                                    style={{ color: "gray" }}
                                    ref={jobtype}
                                    required
                                // onChange={(event) => { setJobtype(event.target.value) }}
                                >
                                    <option value="">Select Job Type</option>
                                    {jobtyps.map((jobtype) => (
                                        <option key={jobtype} value={jobtype}>
                                            {jobtype}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>


                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="jobdiscription" className="col-sm-3 col-form-label compulsary">
                                Job Discription
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="jobdiscription"
                                    placeholder="Sample here"
                                    min="100"
                                    max="900"
                                    // value={jobdiscription}
                                    style={{ color: "gray" }}
                                    ref={jobdiscription}
                                    required
                                // onChange={(event) => { setJobdiscription(event.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group row col-6">
                            <label htmlFor="skillrequired" className="col-sm-3 col-form-label compulsary">
                                Skilles Required
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="skillrequired"
                                    placeholder="React, java, git"
                                    min="10"
                                    max="200"
                                    // value={skillrequired}
                                    style={{ color: "gray" }}
                                    ref={skillrequired}
                                    required
                                // onChange={(event) => { setSkillrequired(event.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>



                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="aboutcompany" className="col-sm-3 col-form-label compulsary">
                                About company
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="aboutcompany"
                                    placeholder="Sample here"
                                    min="100"
                                    max="600"
                                    // value={aboutcompany}
                                    ref={aboutcompany}
                                    style={{ color: "gray" }}
                                    required
                                // onChange={(event) => { setAboutcompany(event.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group row col-6">
                            <label htmlFor="compphoto" className="col-sm-3 col-form-label compulsary">
                                Organization logo
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="compphoto"
                                    // onChange={(event) => { setCompanylogo(event.target.value) }}
                                    // value={companylogo}
                                    accept="image/*" // Accepts only image files
                                    ref={companylogo}
                                    required
                                    style={{ color: "gray" }}
                                />
                                <p className="text-muted">Accepted formats: JPG, JPEG, PNG</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3 compulsary" style={{ justifyContent: "flex-end" }}>
                        <div className="form-group row col-5 mb-5">
                            <div className="col-sm-8">
                                <input
                                    type="submit"
                                    className="form-control"
                                    id="postjob"
                                    value="Post Job"
                                    style={{ backgroundColor: "#a741dc", color: "white", fontWeight: "bold" }}
                                />
                            </div>
                        </div>
                    </section>
                </form>
            </div >
            <Footer />
        </>
    );
}

export default Postjob;