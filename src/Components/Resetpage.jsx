import { Link } from "react-router-dom";
import "../Stylesh/Forgetpassword.css";
import { useEffect, useState } from 'react';
import forgotpassword from "../images/Forgot password-amico.png";
import NavigationBar from "./NavigationBar.jsx"
import Footer from "./Footer.jsx";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.js";


const Resetpage = ({ logout }) => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmpassword] = useState('');
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [otp, setOtp] = useState('');



    // Reseting the err message state to false to hide err message block
    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false)
        }, 10000);
    }, [errMessageState])

    const handleSubmit = (event) => {
        event.preventDefault();
        var AccountType = ''
        const Type = document.getElementsByName('userType')
        for (let i = 0; i < Type.length; i++) {
            if (Type[i].checked) {
                AccountType = Type[i].value;
            }
        }
        var path = '';
        if (AccountType === "jobseeker") {
            path = "https://www.stint.world/employer/resetpwd"
        }
        else {
            path = "https://www.stint.world/employer/resetpwd"
        }

        const user = axios.put(path, null, { params: { mail: email, newPassword: password, confirmPwd: Confirmpassword } })
            .then((response) => {
                return response.data;
            }).then((data) => {
                if (data.statusCode === 200) {
                    // Implement form submission logic here (e.g., send data to server)
                    alert("Paswword chenaged successfully")
                    history.push("/login")
                }
            }).catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 406") {
                    setErrMessage(`${err.response.data.message}`)
                }
                else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    setErrMessage(`${err.response.data.message}`)
                }
                else {
                    setErrMessage(`Something went wrong! ${err}`)
                }
            })

        // Clear form fields after submission
        // setEmail('');
    };

    // call the OTP sending  API here
    let sendotp = (e) => {
        e.preventDefault();
        resendotp()
        document.getElementById("email").disabled = true;
        alert("Please wait we are sending the OTP to enterd email")
        const sendOtp = axios.post(`https://www.stint.world/otps/sendotpmail`, null, { params: { emailId: email } })
        // const sendOtp = axios.post(`http://localhost:8080/otps/sendotpmail`, null, { params: { emailId: email } })
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
                ;
                setErrMessageState(true)
                setErrMessage("Error while sending the OTP")
                if (err.message === "equest failed with status code 500") {
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
                    setErrMessage("Somthing went wrong please check")
                }
            })
    }


    // call the OTP verification API here
    let verifyotp = (e) => {
        e.preventDefault();
        const verifyOtp = axios.get("https://www.stint.world/otps/verifyotp", { params: { mail: email, otp: otp } })
        // const verifyOtp = axios.get("http://localhost:8080/otps/verifyotp", { params: { mail: email, otp: otp } })
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
                if (err.message === "equest failed with status code 500") {
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
    }
    // Changing the send OTP button text to Resend OTP
    function resendotp() {
        setTimeout(() => {
            document.getElementById("sendotpbtn").innerHTML = "Resend OTP";
        }, 4000);
    }



    return (
        <>
            <NavigationBar logout={logout}></NavigationBar>
            <div className="container signup-form">
                <div className="row rounded-3  border-1 border-info my-5 d-flex flex-row align-items-center justify-content-flex-space-around forboxshadow">
                    <div className="col-md-6 image-section">
                        <img src={forgotpassword} alt="Signup Illustration" className="img-fluid" style={{ width: "350px", height: "350px" }} />
                    </div>
                    <div className="col-md-6 form-section mt-5 text-left">
                        <h1 className="forgotpasshead mb-2">Reset Password </h1>
                        <p className="mb-5" style={{ textAlign: "left" }}>"No worries, you can easily reset if needed!"</p>
                        {errMessageState && <div className="alert alert-danger" role="alert" style={{ display: 'block' }}>
                            {errMessage}
                        </div>}
                        <form onSubmit={handleSubmit} className="empregtext">

                            {/* Radio button selection */}
                            <div className="mb-3 d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                <label>Registered as:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" id="employerRadio" value="employer" required style={{ outline: "solid 2px #9932cc" }} />
                                    <label className="form-check-label" htmlFor="employerRadio">Employer</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" id="jobseekerRadio" value="jobseeker" required style={{ outline: "solid 2px #9932cc" }} />
                                    <label className="form-check-label" htmlFor="jobseekerRadio">Jobseeker</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label ">Email ID: </label>
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
                                    <label htmlFor="password" className="form-label ">New Password: </label>
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="password"
                                        placeholder="example"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Confirmpassword" className="form-label ">Confirm New Password: </label>
                                    <input
                                        type="Confirmpassword"
                                        className="form-control mb-3"
                                        id="Confirmpassword"
                                        placeholder="password"
                                        value={Confirmpassword}
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="my-4">
                                    <input type="submit" className="form-control signinbutton " id="submitbuttons" value="Reset" />
                                </div>


                            </span>








                        </form>

                        {/* Login redirection link */}
                        <p className="text-muted mt-3">
                            Don't have an account? <Link to="/optreg">SignUp here</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
}

export default Resetpage;