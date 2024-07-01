// import { RxHamburgerMenu } from "react-icons/rx";
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
// import { useState } from "react";

const Dashboardhome = ({Toggle, dashboard, jobseeker,employer,jobs, interviews, settings}) => {




    return (
        <>
            <div className='px-0'>
                <AdminboardNavbar Toggle={Toggle} />
               {dashboard &&  <div className="px-3">
               <div className='container-fluid'>
                    <div className='row g-3 my-2'>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>230</h3>
                                    <p className='fs-5'>Jobseeker</p>
                                </div>
                                <FaUserGraduate className='fs-9 me-3 ' style={{color:"#450e5d", fontSize:"40px"}}></FaUserGraduate>
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>2450</h3>
                                    <p className='fs-5'>Employer</p>
                                </div>
                                <FaUserTie className='fs-9 me-3 ' style={{color:"#450e5d", fontSize:"40px"}}></FaUserTie>
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>2250</h3>
                                    <p className='fs-5'>Jobs</p>
                                </div>
                                <TfiBag className='fs-9 me-3 ' style={{color:"#450e5d", fontSize:"40px"}}></TfiBag>
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>2000</h3>
                                    <p className='fs-5'>Hired</p>
                                </div>
                                <GiProgression className='me-3 ' style={{color:"#450e5d", fontSize:"40px"}}></GiProgression>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="table caption-top bg-white rounded mt-2">
                    <caption className='text-white fs-4'>Recent Orders</caption>
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
                </div>}
                {jobseeker    &&  <Adminjobseekerspage></Adminjobseekerspage>}
                {employer     &&  <Adminemployerpage></Adminemployerpage>}
                {jobs         &&  <Adminjobspage></Adminjobspage>}
                {interviews   &&  <Admininterviewpage></Admininterviewpage>}
                {settings     &&  <Adminsettingpage></Adminsettingpage>}
            </div>

        </>
    );
}

export default Dashboardhome;