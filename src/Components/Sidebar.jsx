import { Link } from "react-router-dom";
import "../Stylesh/Adminpanel.css";
import { RxDashboard } from "react-icons/rx";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { TfiBag } from "react-icons/tfi";
// import { useState } from "react";


const Sidebar = ({setDashboard}) => {



    const handledashboard=()=>{
        alert(setDashboard)
        // setDashboard(true);
        // setJobseeker(false);
        // setEmployer(false);
        // setJobs(false);
        // setInterviews(false);
        // setSettings(false);
    }
    const handlejobseeker=()=>{
    //     setJobseeker(true);
    //     setDashboard(false);
    //     setEmployer(false);
    //     setJobs(false);
    //     setInterviews(false);
    //     setSettings(false);
    }
    const handleemployer=()=>{ 
        // setEmployer(true) ;
        // setDashboard(false);
        // setJobseeker(false);
        // setJobs(false);
        // setInterviews(false);
        // setSettings(false); 
    }
    const handlejobs=()=>{ 
        // setJobs(true);
        // setDashboard(false);
        // setJobseeker(false);
        // setEmployer(false);
        // setInterviews(false);
        // setSettings(false);  
    }
    const handleinterviews=()=>{ 
        // setInterviews(true);
        // setDashboard(false);
        // setJobseeker(false);
        // setEmployer(false);
        // setJobs(false);
        // setSettings(false);
    }
    const handlesettings=()=>{ 
        // setSettings(true);
        // setDashboard(false);
        // setJobseeker(false);
        // setEmployer(false);
        // setJobs(false);
        // setInterviews(false);
    }
    const handlelogout=()=>{
        alert("logged out success fully....")
    }
    return (
        <>
            <div className='sidebar p-2' style={{backgroundColor: '#450e5d', color:"white"}}>
                <div className='m-2' >
                    <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                    <span className='brand-name fs-4' >Sting World</span>
                </div>
                {/* <hr className='text-dark' /> */}
                <div className='list-group list-group-flush mt-5' style={{textAlign:"left"}} >                       
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg mt-2' onClick={handledashboard}>
                        <RxDashboard className='fs-5 me-3' style={{color:"white"}}></RxDashboard>
                        <span style={{color:"white"}} >Dashboard</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlejobseeker}>
                    <FaUserGraduate className='fs-5 me-3' style={{color:"white"}}></FaUserGraduate>
                        <span style={{color:"white"}} >Jobseeker</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handleemployer}>
                    <FaUserTie className='fs-5 me-3 ' style={{color:"white"}}></FaUserTie>
                        <span style={{color:"white"}} >Employer</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlejobs}>
                    <TfiBag className='fs-5 me-3' style={{color:"white"}}></TfiBag>
                        <span style={{color:"white"}}>Jobs</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handleinterviews}>
                    <GiProgression className='fs-5 me-3' style={{color:"white"}}></GiProgression>
                        <span style={{color:"white"}}>Interviews</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlesettings}>
                    <IoSettingsOutline className='fs-5 me-3' style={{color:"white"}}></IoSettingsOutline>
                        <span style={{color:"white"}}>Settings</span>
                    </Link>
                    <Link to="/" className='list-group-item py-2 sidebarlinksbg  mt-2' onClick={handlelogout}>
                    <RiLogoutCircleRLine className='fs-5 me-3' style={{color:"white"}}></RiLogoutCircleRLine>
                        <span style={{color:"white"}} >Logout</span>
                    </Link>
                </div>
            </div>

        </>
    );
}

export default Sidebar;