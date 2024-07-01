import "../Stylesh/Login.css";
import { Link } from "react-router-dom";
// import { useHistory as history } from "react-router-dom/cjs/react-router-dom.min";
import lg2 from  "../images/lg2.png"
const Login = () => {



    return (
        <>
            <div className="container my-5">
                <div className="row">
                <div className="text-center">
                        <img src={lg2}
                            className="img-fluid" alt="logo" style={{ width: "250px", height: "250px" }} />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Teams</h4>
                    </div>
                    <div className="col-md-6 mb-5">

                        <div className="d-flex flex-column ms-md-5">
                       
                            <p className="pb-2">Please login to your jobseeker account</p>
                            <form >
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-4">
                                    <input type="submit" className="form-control signinbutton" id="submitbuttons" value="Sign in" />
                                </div>
                            </form>

                            <div className="text-left pt-1 mb-5 pb-1">
                                {/* <button type="button" className="btn btn-primary w-100">Sign in</button> */}
                                <Link className="text-muted" to="/login">Forgot password?</Link>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-flex-starts pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <button type="button" className="btn btn-outline-danger mx-2">Register Now</button>
                            </div>

                        </div>

                    </div>

                    {/* ------------- Employeer login section -------------- */}
                    <div className="col-md-6 mb-5">
                        <div className="d-flex flex-column ms-md-5">
                            <p className="pb-2">Please login to your employer account</p>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="eemail" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="epassword" />
                                </div>
                                <div className="mb-4">
                                    {/* <label htmlFor="submit" className="form-label">Password</label> */}
                                    <input type="submit" className="form-control signinbutton" id="esubmitbuttons" value="Sign in" />
                                </div>
                            </form>

                            <div className="text-right pt-1 mb-5 pb-1">
                                {/* <button type="button" className="btn btn-primary w-100">Sign in</button> */}
                                <Link className="text-muted" to="/forgetpassword">Forgot password?</Link>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-flex-starts pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <button type="button" className="btn btn-outline-danger mx-2">Register Now</button>
                            </div>
                        </div>
                    </div>


                    {/* discreption code is below.......... */}
                    {/* <div className="col-md-6 mb-5">
                        <div className="d-flex flex-column justify-content-center h-100 mb-4 bg-primary text-white">

                            <div className="px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4">We are more than just a company</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                        </div>

                    </div> */}

                </div>
            </div>
        </>
    );
}

export default Login;