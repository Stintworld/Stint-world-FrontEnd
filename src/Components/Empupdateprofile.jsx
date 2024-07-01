import "../Stylesh/Empupdateprofile.css"
import React, { useState } from 'react';
import up from "../images/up.jpg";
import axios from "axios";

// 

const Empupdateprofile = ({ empProfile, udateempstate }) => {

    const [name, setName] = useState(empProfile.employerName);
    const [email, setEmail] = useState(empProfile.employerEmail);
    const [phone, setPhone] = useState(empProfile.employerPhNo);
    const [organizationname, setOrganizationname] = useState(empProfile.organisation);
    const [location, setLocation] = useState(empProfile.orgLocation);
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedEmp = {
            employerEmail: email,
            employerName: name,
            employerPhNo: phone,
            organisation: organizationname,
            orgLocation: location
        }

        const updatedEmployerData = axios.put(`https://www.stint.world/employer/update/${empProfile.employerId}`, updatedEmp, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                return response.data
            })
            .then((data) => {
                if (data.statusCode === 200) {
                    alert("Your profile has been Updated successfully.")
                    udateempstate()
                    // history.push("/employerprofileview")
                }
            })
            .catch((err) => {
                if (err.request) {
                    setErrMessage("Connection request faild");
                    setErrMessageState(true)
                }
                else if (err.message) {
                    setErrMessage(err.message);
                    setErrMessageState(true)
                }
                else {
                    setErrMessage("Oop's, Somthing went wrong! Please check");
                    setErrMessageState(true)
                }
            })

    };




    return (
        <>
            <div className="container signup-form">
                <div className="row rounded-3  border-1 border-info my-5 d-flex flex-row align-items-center justify-content-flex-space-around forboxshadow">
                    <div className="col-md-6 image-section">
                        <img src={up} alt="Signup Illustration" className="fluid empupdateprofileimage" />
                    </div>
                    <div className="col-md-6 form-section mt-5 ">
                        <h3 className="mb-5">Redefine Your Profile here</h3>
                        {errMessageState && <div className="alert alert-danger" role="alert" >
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
                                    disabled
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
                                    disabled
                                />
                            </div>

                            <span className="">
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label ">Contact number: </label>
                                    <input
                                        type="tel"
                                        className="form-control mb-3"
                                        id="phone"
                                        placeholder="+919012345678"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                    />
                                </div>
                                <div className="my-4">
                                    <input type="submit" className="form-control signinbutton " id="submitbuttons" value="Update" />
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Empupdateprofile;