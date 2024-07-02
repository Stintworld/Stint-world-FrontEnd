import "../Stylesh/Login.css";
import { Link, useHistory } from "react-router-dom";
import lg3 from "../images/lg3.png"
import axios from "axios";
import { useEffect, useRef, useState } from "react";



const Singlelogin = ({login}) => {
    
    const history = useHistory();
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const viewpwd= useRef(false)

        // Reseting the err message state to false to hide err message block
        useEffect(() => {
            setTimeout(() => {
                setErrMessageState(false)
            }, 10000);
        }, [errMessageState])

    const Handleprofileform = (e) => {
        e.preventDefault();
        let AccountType=''
        const Email = document.getElementById('email').value
        const Password = document.getElementById('password').value
        const Type = document.getElementsByName('accountType')
        for (const element of Type) {
            if(element.checked)
            {
                AccountType=element.value;
            } 
        }
        let path='';
        if(AccountType==="jobseeker")
            {
                path="https://www.stint.world/applicants/login"
            }
            else
            {
                path="https://www.stint.world/employer/login"
            }
        const user = axios.post(path,{emailId:Email, password:Password})
        .then((response)=>{
            return response.data;
        }).then((data)=>{
            if(data.statusCode === 200 || data.statusCode === 201)
            {
               if(AccountType==="jobseeker")
                {
                    localStorage.setItem("ApplicantId", data.data.applicantId)
                    localStorage.setItem("ApplicantEmail", data.data.applicantEmail)
                    localStorage.setItem("applicantName", data.data.applicantName)
                    alert("Login Successful")
                    login("jobseeker")
                    history.push("/alljobs");
                }
                else{
                    localStorage.setItem("employerId", data.data.employerId)
                    localStorage.setItem("employerEmail", data.data.employerEmail)
                    localStorage.setItem("employerName", data.data.employerName)
                    localStorage.setItem("orgLocation", data.data.orgLocation)
                    localStorage.setItem("organisation", data.data.organisation)
                    alert("Login Successful")
                    login("employer")
                    history.push("/postjob"); 
                }
            }
        }).catch((err)=>{
            setErrMessageState(true)
            if (err.message === "Request failed with status code 500") {
                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
            }
            else if (err.message === "Network Error") {
                setErrMessage(`${err.message} : Request failed`)
            }
            else if (err.message === "Request failed with status code 406") {
                setErrMessage("Invalid Credentials")
            }
            else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                setErrMessage(`${err.response.data.message}`)
            }
            else {
                setErrMessage(`Something went wrong! ${err}`)
            }
        })
    }


    const handleViewPassword =()=>{
        const pedIn= document.getElementById('password');
         if(viewpwd.current.checked)
            {
                pedIn.type="text"
            }
            else
            {
                pedIn.type="password"
            }
    }

    
    return (
            <div className="container my-5">
                <div className="row">
                    <div className="text-center">
                        <img src={lg3}
                            className="img-fluid" alt="logo" />
                    </div>
                    <div className="col-md-6 mb-5">

                        <p className="pb-2 ms-md-5" style={{ textAlign: "left" }}>Login to your account</p>
                        {errMessageState && <div className="row px-5 py-1 mx-5 col-10 border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                    {errMessage}
                </div>}
                        <div className="d-flex flex-column ms-md-5">

                            <form onSubmit={Handleprofileform}>
                                <div className="mb-3 d-flex flex-row align-items-center justify-content-between mt-3 pb-4 mb-4">
                                    <p style={{ textAlign: "left", marginBottom: "0px" }}>Login as : </p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="accountType" id="jobseeker" value="jobseeker" required />
                                        <label className="form-check-label" htmlFor="jobseeker">Jobseeker</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="accountType" id="employer" value="employer" required />
                                        <label className="form-check-label" htmlFor="employer">Employer</label>
                                    </div>
                                </div>
                                <div className="mb-4" style={{ textAlign: "left" }}>
                                    <label htmlFor="email" className="form-label" >Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Example@gmail.com" required />
                                </div>
                                <div className="mb-4" style={{ textAlign: "left" }}>
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password!@123" minLength={8} required />
                                    <label htmlFor="viewpaswword" className='d-flex justify-content-start align-items-center' style={{fontSize:"smaller"}}> <input type="checkbox" onClick={handleViewPassword}id='viewpaswword' ref={viewpwd} />View Password</label>
                                </div>
                                <div className="mb-4">
                                    <input type="submit" className="form-control signinbutton" id="submitbuttons" value="Sign in" />
                                </div>
                            </form>

                            <div className="pt-1 mb-5 pb-1" style={{ textAlign: "right" }}>
                                <Link className="text-muted" to="/resetpage">Forgot password?</Link>
                                {/* <Link className="text-muted" to="/forgetpassword">Forgot password?</Link> */}
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-flex-starts pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <Link to="/optreg"><button type="button" className="btn btn-outline-danger mx-2">Register Now</button></Link>
                            </div>
                        </div>
                    </div>


                    {/* discreption code is below.......... */}
                    <div className="col-md-6 mb-5">
                        <div className="d-flex flex-column justify-content-center h-100 mb-4  text-white textdiscription rounded-5">

                            <div className="px-3 py-4 p-md-5 mx-md-4 rounded-5">
                                <h4 className="mb-4">Empowering Careers, Building Futures</h4>
                                <p className="text-muted dispcolor">"At STINT.WORLD, we are more than just a company. We are a community dedicated to empowering individuals to reach their full potential. Our mission is to provide not just job opportunities but also the support, resources, and inspiration needed for career success. Join us and become part of a network that values growth, learning, and the power of community."
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
    );
}

export default Singlelogin;