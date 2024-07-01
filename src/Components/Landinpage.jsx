import { Navbar, Container, Nav } from 'react-bootstrap';
import "../Stylesh/Landingpage.css"
import jp from "../images/ab3.jpg"
import lg1 from "../images/lg1.png"
import { Link } from "react-router-dom"

const Landinpage = () => {



    return (
        <div className="landing-page d-flex flex-column vh-100 landpage">
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={lg1} alt="stintworld" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="d-flex flex-wrap align-items-center mt-2 mt-lg-0">  {/* Responsive Nav Layout */}
                            <Nav.Link>
                                <Link to="/login">
                                    <button className="btn btn-secondary">Login</button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/optreg">
                                    <button className="btn btn-primary">Sign Up</button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="d-flex flex-column vh-100">  {/* Responsive Main Content */}
                <div className="container">
                    <div className="row align-items-center justify-content-center h-100">  {/* Center Content Vertically */}
                        <div className="col-12 col-md-6 my-5">
                            <h1 className="display-4 mb-4">
                                "Find Your Dream Job. Make Your Mark."
                            </h1>
                            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                <button className="btn btn-primary btn-lg shadow-sm">Get Started</button>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={jp} alt="jobprof" style={{ width: "100%", height: "auto" }} />  {/* Responsive Image */}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-auto py-3 text-center bottom-0  d-flex justify-content-between align-items-center flex-wrap" style={{ backgroundColor: "#9a35cc17", color: "#2634b4" }}>
                <div className=" d-flex flex-wrap justify-content-center align-items-center" style={{ fontSize: "small" }} >
                    <span> <Link to="/allaboutus" className="list-group-item list-group-item-action mx-2">About Us</Link></span>
                    <span><Link to="/allcontactus" className="list-group-item list-group-item-action mx-2">Contact Us</Link></span>
                    <span><Link to="/termscondition" className="list-group-item list-group-item-action mx-2">Terms & Condition</Link></span>
                    <span><Link to="/privacypolicy" className="list-group-item list-group-item-action mx-2">Privacy Polices</Link></span>
                    <span><Link to="/refundpolicy" className="list-group-item list-group-item-action mx-2">Refund polices</Link></span>
                </div>
                <span className='mx-2 mt-2' style={{ fontSize: "small" }}>&#169; All rights are reserved {new Date().getFullYear()} @ Vismaya Software Solutions</span>
            </footer>
        </div>
    );
}
export default Landinpage;