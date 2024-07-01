import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Stylesh/NavigationBar.css";
import { Link } from "react-router-dom";
import l2 from "../images/l2.png"
import { FaUser } from "react-icons/fa";


const NavigationBar = ({logout}) => {

    return (
        <>
            <Navbar  expand="lg" style={{backgroundColor: "#450e5d", backgroundImage: "linear-gradient(0deg, #450e5d 2%, #9932cc)"}}>
                <Container fluid>
                    <Navbar.Brand href="/"> <img src={l2} alt="stintworld" className='rounded-circle' style={{height:"55px", width:"55px"}}/>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-scroll" />
                    <Navbar.Collapse id="navbar-scroll" style={{flexGrow:"0"}}>
                        <Nav className="me-auto" >
                            <span><Nav.Link  style={{color: "white"}} id="linkshover"><Link to="/alljobs" style={{color:"white", textDecoration:"none"}}>Home</Link></Nav.Link></span>
                            <span><Nav.Link style={{color: "white"}} id="linkshover"> <Link to="/alljobs" style={{color:"white", textDecoration:"none"}}>Jobs</Link>  </Nav.Link></span>
                            <NavDropdown title={<span style={{ color: "white" }}>Services</span>} id="services-dropdown servdrop">  
                                {/* Add your service links here */}
                                <span><NavDropdown.Item ><Link to="/alljobs" style={{color:"#6f1f95", textDecoration:"none"}}>Service 1</Link></NavDropdown.Item></span>
                                <span><NavDropdown.Item ><Link to="/alljobs" style={{color:"#6f1f95", textDecoration:"none"}}>Service 2</Link> </NavDropdown.Item></span>
                                <span><NavDropdown.Item ><Link to="/alljobs" style={{color:"#6f1f95", textDecoration:"none"}}>Service 3</Link></NavDropdown.Item></span>
                                <span><NavDropdown.Item ><Link to="/alljobs" style={{color:"#6f1f95", textDecoration:"none"}}>Service 4</Link> </NavDropdown.Item></span>
                                {/* Add more service links as needed */}
                                </NavDropdown>
                                <span><Nav.Link  style={{color: "white"}} id="linkshover"><Link to="/aboutus" style={{color:"white", textDecoration:"none"}}>About Us</Link></Nav.Link></span>
                                <span> <Nav.Link style={{color: "white"}} id="linkshover"><Link to="/appblogs" style={{color:"white", textDecoration:"none"}}>Blogs</Link></Nav.Link></span>
                                <span><Nav.Link style={{color: "white"}} id="linkshover"><Link to="/contactus" style={{color:"white", textDecoration:"none"}}>Contact</Link></Nav.Link></span>


                            <NavDropdown title={<FaUser style={{ color: "white", fontSize:"20px"}}/>} className="mx-3" id="profile-dropdown linkshover servdrop" style={{ color: "white"}}>
                            
                            <NavDropdown.Item ><Link to="/viewprofile" style={{color:"#6f1f95", textDecoration:"none"}}>My Profile</Link></NavDropdown.Item>
                           
                            <NavDropdown.Item ><Link to="/applicationhistory" style={{color:"#6f1f95", textDecoration:"none"}}>My Applications</Link> </NavDropdown.Item>
                           
                            <NavDropdown.Item > <button onClick={logout} className='btn rounded-2'  >Logout</button> </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavigationBar;