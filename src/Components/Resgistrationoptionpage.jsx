import "../Stylesh/Resgistrationoptionpage.css";
import { Link } from "react-router-dom";
import lgs from "../images/lgs.png"
const Resgistrationoptionpage = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">

                    <div className="text-center">
                        <img src={lgs}
                            className="img-fluid" alt="logo" style={{ width: "250px", height: "250px" }} />
                        <h4 className="mt-1 mb-5 pb-1">Do you want to register as ?</h4>
                    </div>
                    <div className="col-12 mb-5 d-flex flex-column align-items-center justify-content-center regoptmarg">
                        <div className="d-flex flex-row pb-4 mb-4">
                            <Link to="/regjobseeker">
                                <button type="button" className="btn btn-lg btn-outline-primary mx-2 px-3">
                                    Jobseeker
                                </button>
                            </Link>
                            <Link to="/regemployer">
                                <button type="button" className="btn btn-lg btn-outline-primary mx-2 px-3">
                                    Employer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Resgistrationoptionpage;