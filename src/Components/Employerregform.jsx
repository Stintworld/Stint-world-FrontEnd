import "../Stylesh/Employerregform.css";
import React, { useEffect, useRef, useState } from 'react';
import signupimage from "../images/Sign up-amico.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Employerregform = () => {

    const history = new useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [organizationname, setOrganizationname] = useState('');
    const [location, setLocation] = useState('');
    const [otp, setOtp] = useState('');
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const viewpwd = useRef(false)


    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false)
        }, 60000);
    }, [errMessageState])


    const handleSubmit = (event) => {
        event.preventDefault();
        const ack = viewpwd.current.checked;
        let newEmployer;
        if(ack)
            {
                if (password === confirmpassword) {
                    newEmployer = {
                        employerName: name,
                        employerEmail: email,
                        employerPhNo: phone,
                        employerPassword: password,
                        organisation:organizationname,
                        orgLocation:location
        
                    }
                    // const newEmp = axios.post("http://localhost:8080/employer/add", newEmployer)
                    const newEmp = axios.post("https://www.stint.world/employer/add", newEmployer)
                        .then((response) => {
                            return response.data
                        })
                        .then((data) => {
                            console.log(data);
                            if (data.statusCode === 201) {
                                alert(data.message)
                                history.push("/login")
                            }
                        })
                        .catch((err) => {
                            setErrMessageState(true)
                            if (err.message === "equest failed with status code 500") {
                                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                            }
                            else if (err.message === "Network Error") {
                                setErrMessage(`${err.message} : Request failed`)
                            }
                            else if (err.message === "Request failed with status code 406") {
                                setErrMessage(`${err.response.data.statusCode} ${err.response.data.rootCause}`)
                            }
                            else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                                setErrMessage(`${err.response.data.message}`)
                            }
                            else {
                                setErrMessage("Somthing went wrong please check")
                            }
                        })
                }
                else {
                    setErrMessageState(true)
                    setErrMessage("Pasowrd miss Match")
                }
            }
            else
            {
                setErrMessage("Kindly read and accept our T&C, Privacy & polices")
                setErrMessageState(true);
            }
         // Clear form fields after submission
         setName('');
         setEmail('');
         setPhone('');
         setPassword('');
         setConfirmpassword('');
         setOrganizationname('');
         setLocation('');
         setPassword('')
         setConfirmpassword('')
    };

    function resendotp() {
        setTimeout(() => {
            document.getElementById("sendotpbtn").innerHTML = "Resend OTP";
        }, 4000);
    }

    let sendotp = (e) => {
        e.preventDefault();


        resendotp()
        document.getElementById("email").disabled = true;

        // const sendOtp = axios.post(`http://localhost:8080/otps/sendotpmail`, null, { params: { emailId: email } })
        const sendOtp = axios.post(`https://www.stint.world/otps/sendotpmail`, null, { params: { emailId: email } })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                if (data.statusCode === 200) {
                    document.getElementsByClassName("verifyotpsection")[0].style.display = "block";
                    alert("OTP sent to entired Email ID");
                }
            })
            .catch((err) => {
                setErrMessageState(true)
                setErrMessage("Error while sending the OTP")
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
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

    let verifyotp = (e) => {
        e.preventDefault();
        // const verifyOtp = axios.get("http://localhost:8080/otps/verifyotp", { params: { mail: email, otp: otp } })
        const verifyOtp = axios.get("https://www.stint.world/otps/verifyotp", { params: { mail: email, otp: otp } })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                if (data.statusCode === 200) {
                    alert("OTP Verification success")
                    document.getElementsByClassName("verifyotpsection")[0].style.display = "none";
                    document.getElementsByClassName("hideshowinputfield")[0].style.display = "block";
                    document.getElementById("sendotpbtn").disabled = true;

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



    return (
            <div className="container signup-form">
                <div className="row rounded-3  border-1 border-info my-5 d-flex flex-row align-items-center justify-content-flex-space-around forboxshadow">
                    <div className="col-md-6 image-section">
                        <img src={signupimage} alt="Signup Illustration" style={{ width: "350px", height: "350px" }} />
                    </div>
                    <div className="col-md-6 form-section mt-5 ">
                        <h1>WELCOME</h1>
                        {errMessageState && <div className="alert alert-danger" role="alert" style={{ display: 'block' }}>
                            {errMessage}
                        </div>}

                        <form onSubmit={handleSubmit} className="empregtext">
                            <div className="form-group empregtext">
                                <label htmlFor="name" className="form-label " >Full Name: </label>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="name"
                                    placeholder="Tony"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label ">Offical Email ID: </label>
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    id="email"
                                    placeholder="Example@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="btn btn-info btn-sm mb-2" id="sendotpbtn" onClick={sendotp}>Send OTP</button>
                            </div>

                            <div className="form-group verifyotpsection">
                                {/* <label htmlFor="otp" className="form-label">Enter OTP here:</label>  */}
                                <input
                                    type="text"
                                    className="form-control mb-3 input-sm"
                                    id="otp"
                                    placeholder="Enter OTP here"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                                <button className="btn btn-info btn-sm" onClick={verifyotp}>Submit OTP</button> {/* Changed button text */}
                            </div>

                            <span className="hideshowinputfield">
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label ">Contact number: </label>
                                    <input
                                        type="tel"
                                        className="form-control mb-3"
                                        id="phone"
                                        placeholder="+919012345678"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        maxLength={10}
                                        minLength={10}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="orgname" className="form-label ">Organization Name: </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="organizationname"
                                        placeholder="Vihan Software Solution"
                                        value={organizationname}
                                        onChange={(e) => setOrganizationname(e.target.value)}
                                        required
                                        minLength={3}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location" className="form-label ">Location: </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="location"
                                        placeholder="Hubli"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                        minLength={3}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label ">Password: </label>
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="password"
                                        placeholder="example"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={8}
                                        maxLength={16}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Confirmpassword" className="form-label ">Confirm Password: </label>
                                    <input
                                        type="confirmpassword"
                                        className="form-control mb-3"
                                        id="confirmpassword"
                                        placeholder="password"
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                        required
                                        minLength={8}
                                        maxLength={16}
                                    />
                                </div>
                                <label htmlFor="checkboxtcpp" className='d-flex flex-wrap justify-content-start align-items-center' style={{ fontSize: "smaller" }}>
                                        <input type="checkbox" id='checkboxtcpp' ref={viewpwd} required />  I confirm I have read and agree to the &nbsp;
                                        <Link to="/termscondition" style={{ fontSize: "smaller" }}> T&C </Link>,&nbsp;
                                        <Link to="/privacypolicy" style={{ fontSize: "smaller" }}> Privacy & polices </Link>
                                    </label>
                                <div className="my-4">
                                    <input type="submit" className="form-control signinbutton " id="submitbuttons" value="Sign Up" />
                                </div>
                            </span>
                        </form>

                        {/* Login redirection link */}
                        <p className="text-muted mt-3">
                            Already have an account? <Link to="/login">Login Here</Link>
                        </p>

                    </div>



                </div>
            </div>
    );
}

export default Employerregform;