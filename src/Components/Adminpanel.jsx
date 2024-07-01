import "../Stylesh/Adminpanel.css"
// import Dashboardhome from "./Dashboardhome";
// import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Loader from './Loader';

import AdminboardNavbar from "./AdminboardNavbar";

import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TfiBag } from "react-icons/tfi";
import Adminjobseekerspage from "./Adminjobseekerspage";
import Adminemployerpage from "./Adminemployerpage";
import Adminjobspage from "./Adminjobspage";
import Admininterviewpage from "./Admininterviewpage";
import Adminsettingpage from "./Adminsettingpage";
import Adminquerylist from "./Adminquerylist";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";



const Adminpanel = ({ logout }) => {

    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    const [dashboard, setDashboard] = useState(true);
    const [jobseeker, setJobseeker] = useState(false);
    const [employer, setEmployer] = useState(false);
    const [jobs, setJobs] = useState(false);
    const [interviews, setInterviews] = useState(false);
    const [settings, setSettings] = useState(false);
    const [queries, setQueries] = useState(false);

    const handledashboard = (e) => {
        e.preventDefault();
        setDashboard(true);
        setJobseeker(false);
        setEmployer(false);
        setJobs(false);
        setInterviews(false);
        setSettings(false);
        setQueries(false)
    }
    const handlejobseeker = (e) => {
        e.preventDefault();
        setJobseeker(true);
        setDashboard(false);
        setEmployer(false);
        setJobs(false);
        setInterviews(false);
        setSettings(false);
        setQueries(false)
    }
    const handleemployer = (e) => {
        e.preventDefault();
        setEmployer(true);
        setDashboard(false);
        setJobseeker(false);
        setJobs(false);
        setInterviews(false);
        setSettings(false);
        setQueries(false)
    }
    const handlejobs = (e) => {
        e.preventDefault();
        setJobs(true);
        setDashboard(false);
        setJobseeker(false);
        setEmployer(false);
        setInterviews(false);
        setSettings(false);
        setQueries(false)
    }
    const handleinterviews = (e) => {
        e.preventDefault();
        setInterviews(true);
        setDashboard(false);
        setJobseeker(false);
        setEmployer(false);
        setJobs(false);
        setQueries(false)
        setSettings(false);
    }
    const handlesettings = (e) => {
        e.preventDefault();
        setSettings(true);
        setDashboard(false);
        setJobseeker(false);
        setEmployer(false);
        setJobs(false);
        setInterviews(false);
        setQueries(false)
    }
    const handleQueris = (e) => {
        e.preventDefault();
        setQueries(true)
        setSettings(false);
        setDashboard(false);
        setJobseeker(false);
        setEmployer(false);
        setJobs(false);
        setInterviews(false);
    }
    const handlelogout = (e) => {
        e.preventDefault();
        alert("logged out successfully....")
    }









    return (
        <>
            <div className='container-fluid  min-vh-100 ' style={{ backgroundColor: '#ce8df3' }}>
                <div className='row '>
                    {toggle && <div className='col-4 col-md-2  vh-100 position-fixed' style={{ backgroundColor: '#450e5d' }}>
                        {/* <Sidebar setstatevalues={setstatevalues} /> */}
                        <>
                            <div className='sidebar p-2' style={{ backgroundColor: '#450e5d', color: "white" }}>
                                <div className='m-2' >
                                    <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                                    <span className='brand-name fs-4' >Stint World</span>
                                </div>
                                {/* <hr className='text-dark' /> */}
                                <div className='list-group list-group-flush mt-5' style={{ textAlign: "left" }} >
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg mt-2' onClick={handledashboard}>
                                        <RxDashboard className='fs-5 me-3' style={{ color: "white" }}></RxDashboard>
                                        <span style={{ color: "white" }} >Dashboard</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlejobseeker}>
                                        <FaUserGraduate className='fs-5 me-3' style={{ color: "white" }}></FaUserGraduate>
                                        <span style={{ color: "white" }} >Jobseeker</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handleemployer}>
                                        <FaUserTie className='fs-5 me-3 ' style={{ color: "white" }}></FaUserTie>
                                        <span style={{ color: "white" }} >Employer</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlejobs}>
                                        <TfiBag className='fs-5 me-3' style={{ color: "white" }}></TfiBag>
                                        <span style={{ color: "white" }}>Jobs</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handleinterviews}>
                                        <GiProgression className='fs-5 me-3' style={{ color: "white" }}></GiProgression>
                                        <span style={{ color: "white" }}>Interviews</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handleQueris}>
                                        <FaPersonCircleQuestion className='fs-5 me-3' style={{ color: "white" }}></FaPersonCircleQuestion>
                                        <span style={{ color: "white" }}>Queries</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlesettings}>
                                        <IoSettingsOutline className='fs-5 me-3' style={{ color: "white" }}></IoSettingsOutline>
                                        <span style={{ color: "white" }}>Settings</span>
                                    </Link>
                                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlelogout}>
                                        <RiLogoutCircleRLine className='fs-5 me-3' style={{ color: "white" }}></RiLogoutCircleRLine>
                                        <span style={{ color: "white" }} onClick={logout} >Logout</span>
                                    </Link>
                                </div>
                            </div>

                        </>
                    </div>}
                    {toggle && <div className='col-4 col-md-2'></div>}
                    <div className='col p-0 m-0'>
                        {/* <Dashboardhome Toggle={[Toggle, dashboard, jobseeker, employer, jobs, interviews, settings]} /> */}
                        <>
                            <div className='px-0'>
                                <AdminboardNavbar Toggle={Toggle} handlesettings={handlesettings} handledashboard={handledashboard}/>
                                {dashboard && <div className="px-3">
                                    <div className='container-fluid'>
                                        <div className='row g-3 my-2'>
                                            <div className='col-md-3 p-1'>
                                                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                                    <div>
                                                        <h3 className='fs-2'>230</h3>
                                                        <p className='fs-5'>Jobseeker</p>
                                                    </div>
                                                    <FaUserGraduate className='fs-9 me-3 ' style={{ color: "#450e5d", fontSize: "40px" }}></FaUserGraduate>
                                                </div>
                                            </div>
                                            <div className='col-md-3 p-1'>
                                                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                                    <div>
                                                        <h3 className='fs-2'>2450</h3>
                                                        <p className='fs-5'>Employer</p>
                                                    </div>
                                                    <FaUserTie className='fs-9 me-3 ' style={{ color: "#450e5d", fontSize: "40px" }}></FaUserTie>
                                                </div>
                                            </div>
                                            <div className='col-md-3 p-1'>
                                                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                                    <div>
                                                        <h3 className='fs-2'>2250</h3>
                                                        <p className='fs-5'>Jobs</p>
                                                    </div>
                                                    <TfiBag className='fs-9 me-3 ' style={{ color: "#450e5d", fontSize: "40px" }}></TfiBag>
                                                </div>
                                            </div>
                                            <div className='col-md-3 p-1'>
                                                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                                    <div>
                                                        <h3 className='fs-2'>2000</h3>
                                                        <p className='fs-5'>Hired</p>
                                                    </div>
                                                    <GiProgression className='me-3 ' style={{ color: "#450e5d", fontSize: "40px" }}></GiProgression>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <table className="table caption-top bg-white rounded mt-2">
                                        <caption className='text-white fs-4'>Recent placements</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                }
                                {/* {(jobseeker &&   jobseekerData  && loaderState=== false) && <Adminjobseekerspage jobseekerData={jobseekerData}></Adminjobseekerspage>} */}
                                {jobseeker && <Adminjobseekerspage ></Adminjobseekerspage>}
                                {employer && <Adminemployerpage></Adminemployerpage>}
                                {/* {(jobs && jobsData && loaderState === false) && <Adminjobspage jobsData={jobsData}></Adminjobspage>} */}
                                {jobs && <Adminjobspage ></Adminjobspage>}
                                {interviews && <Admininterviewpage></Admininterviewpage>}
                                {settings && <Adminsettingpage logout={logout}></Adminsettingpage>}
                                {queries && <Adminquerylist logout={logout}></Adminquerylist>}
                            </div>

                        </>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Adminpanel;