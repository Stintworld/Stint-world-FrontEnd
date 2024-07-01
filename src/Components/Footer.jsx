import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const Footer = () => {
    return ( 
    <>
     <footer className="footer text-white mt-5" style={{backgroundImage: "linear-gradient(0deg, #450e5d 20%, #9932cc)", bottom:"0"}}>
      <Container>
        <Row className="pt-5 justify-content-between align-items-start d-flex flex-wrap" style={{justifyContent: "space-between", textAlign:"left"}}>
          <Col xs={8} md={3}>
            <h5 className="text-uppercase mb-4">Contact Info</h5>
            <address>
              <p>Address: Satellite complex, Koppikar road, Hubli - 580029</p>
              <p>
                <a href="mailto:vss122017@gmail.com" style={{color: "white", textDecoration:"none"}}>Email: vss122017@gmail.com</a>
              </p>
              <p>Phone: +91 9901823897</p>
            </address>
          </Col>
          <Col xs={6} md={2}>
            <h5 className="text-uppercase mb-2 mt-3">Qucick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/allaboutus" style={{color: "white", textDecoration:"none"}}>About Us</Link>
              </li>
              <li>
                <Link to="/allcontactus" style={{color: "white", textDecoration:"none"}}>Contact Us</Link>
              </li>
              <li>
                <Link to="/blogs" style={{color: "white", textDecoration:"none"}}>Blogs</Link>
              </li>
              <li>
                <Link to="/termscondition" style={{color: "white", textDecoration:"none"}}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacypolicy" style={{color: "white", textDecoration:"none"}}>Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          {/* <Col xs={8} md={4}> */}
          <Col className="col-auto">
            <h5 className="text-uppercase mb-2 mt-3">Newsletter</h5>
            <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
            <form className='d-flex flex-row align-items-center justify-content-flex-space-around'>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                />
              </div>
              <button className="btn btn-primary mx-2" type="submit" style={{backgroundColor:"#a741dc"}}>
                Subscribe
              </button>
            </form>
          </Col>
          <Col xs={12} className="text-center mt-4">
            <p>
              Copyright © {new Date().getFullYear()} All rights reserved | This template is made with <FaHeart/> by Vismaya Software Solutions
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </> 

    );
}
 
export default Footer;