import "../Stylesh/Employerregform.css";
import "../Stylesh/Forgetpassword.css";
import React, { useState } from 'react';
import forgotpassword from "../images/Forgot password-amico.png";
import { Link } from "react-router-dom";
import axios from "axios";


const Forgetpassword = () => {

  const [email, setEmail] = useState('');
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    const restlinks = axios.get("https://www.stint.world/employer/forgotpwd", { params: { toMail: email } })
      .then((response) => { return response.data })
      .then((data) => {
        if(data.statusCode === 200)
          {
            document.getElementsByClassName("resetmessage")[0].style.display = "block";
            setTimeout(() => {
              document.getElementsByClassName("resetmessage")[0].style.display = "none";
            }, 20000)
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

    // Clear form fields after submission
    setEmail('');
  };









  return (
    <>
      <div className="container signup-form">
        <div className="row rounded-3 border-1 border-info my-5 d-flex flex-row align-items-center justify-content-flex-space-around forboxshadow">
          <div className="col-md-6 image-section">
            <img src={forgotpassword} alt="Signup Illustration" style={{ width: "350px", height: "350px" }} />
          </div>
          <div className="col-md-6 form-section mt-5 text-left">
            <h1 className="forgotpasshead mb-2">Forgot Password ?</h1>
            <p className="mb-5" style={{ textAlign: "left" }}>"No worries, you can easily reset if needed!"</p>
           {errMessageState && <div className="alert alert-danger" role="alert" >
              {errMessage}
            </div>}

            {/* //Radio button selection
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
            </div> */}

            <form onSubmit={handleSubmit} className="empregtext">
              <div className="form-group">
                <label htmlFor="email" className="form-label ">Enter Registered Email ID: </label>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <p className="resetmessage" style={{ display: "none" }}>
                Reset Link is sent to entered email ID. Kindly check your inbox
              </p>
              <div className="my-4">
                <input type="submit" className="form-control signinbutton" id="submitbuttons" value="Reset" />
              </div>
            </form>

            {/* Login redirection link */}
            <p className="text-muted mt-3">
              Don't have an account? <Link to="/optreg">SignUp here</Link>
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Forgetpassword;