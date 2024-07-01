import "../Stylesh/Empnavigationbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import l2 from "../images/l2.png"
import { FaUser } from "react-icons/fa";

const Empnavigationbar = ({logout}) => {
    return ( 
        <>
        <Navbar  expand="lg" style={{backgroundColor: "#450e5d", backgroundImage: "linear-gradient(0deg, #450e5d 2%, #9932cc)"}}>
                <Container fluid>
                    <Navbar.Brand href="/"> <img src={l2} alt="stintworld" className='rounded-circle' style={{height:"55px", width:"55px"}}/>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-scroll" />
                    <Navbar.Collapse id="navbar-scroll" style={{flexGrow:"0"}}>
                        <Nav className="me-auto" >
                            <Nav.Link  style={{color: "white"}} id="linkshover"><Link to="/postjob" style={{color:"white", textDecoration:"none"}}>Home</Link></Nav.Link>
                            <Nav.Link style={{color: "white"}} id="linkshover"> <Link to="/postjob" style={{color:"white", textDecoration:"none"}}>Post Job</Link>  </Nav.Link>
                            <NavDropdown title={<span style={{ color: "white" }}>Services</span>} id="services-dropdown servdrop">  
                                {/* Add your service links here */}
                                <NavDropdown.Item > <Link to="/employerprofileview" style={{color:"#6f1f95", textDecoration:"none"}}>Resume Writing</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/employerprofileview" style={{color:"#6f1f95", textDecoration:"none"}}>Career Counsiling</Link> </NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/employerprofileview" style={{color:"#6f1f95", textDecoration:"none"}}>Service 3</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/employerprofileview" style={{color:"#6f1f95", textDecoration:"none"}}>Service 4</Link> </NavDropdown.Item>
                                {/* Add more service links as needed */}
                                </NavDropdown>
                            <Nav.Link  style={{color: "white"}} id="linkshover"><Link to="/empaboutus" style={{color:"white", textDecoration:"none"}}>About Us</Link></Nav.Link>
                            <Nav.Link style={{color: "white"}} id="linkshover"><Link to="/empblogs" style={{color:"white", textDecoration:"none"}}>Blogs</Link></Nav.Link>
                            <Nav.Link style={{color: "white"}} id="linkshover"><Link to="/empcontactus" style={{color:"white", textDecoration:"none"}}>Contact Us</Link></Nav.Link>

                            <NavDropdown title={<FaUser style={{ color: "white", fontSize:"20px"}}/>} className="mx-3" id="profile-dropdown linkshover servdrop" style={{ color: "white"}}>
                           
                            <NavDropdown.Item ><Link to="/employerprofileview" style={{color:"#6f1f95", textDecoration:"none"}}>My Profile</Link></NavDropdown.Item>
                            
                            <NavDropdown.Item ><Link to="/posthistory" style={{color:"#6f1f95", textDecoration:"none"}}>Job posted</Link> </NavDropdown.Item>
                            <NavDropdown.Item > <button className="btn" onClick={logout}>Logout</button></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default Empnavigationbar;