import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import adlog1 from "../images/adlog1.jpg";
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Adminloginpage = ({ login }) => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const viewpwd= useRef(false)


    // Reseting the err message state to false to hide err message block
    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false)
        }, 10000);
    }, [errMessageState])

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.get("https://www.stint.world/admins/login",
        axios.post("http://localhost:8080/admins/login", {
            emailId:email,
            password:password
        })
            .then((response) => { return response.data })
            .then((data) => {
                if (data.statusCode === 200) {
                    localStorage.setItem("adminId", data.data.adminId)
                    localStorage.setItem("adminName", data.data.adminName)
                    localStorage.setItem("adminEmail", data.data.adminEmail)
                    login("admin")
                    history.push("/admin/dashboard");
                }
            })
            .catch((err) => {
                setErrMessageState(true)
                if (err.message === "Request failed with status code 500") {
                    setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
                }
                else if (err.message === "Network Error") {
                    setErrMessage(`${err.message} : Request failed`)
                }
                else if (err.message === "Request failed with status code 406") {
                    setErrMessage(`${err.response.data.message}`)
                }
                else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
                    setErrMessage(`${err.response.data.message}`)
                }
                else {
                    setErrMessage(`Something went wrong! ${err}`)
                }
            })

        setEmail('');
        setPassword('');
    };

    const handleViewPassword =()=>{
        const pedIn= document.getElementById('password');
         if(viewpwd.current.checked)
            {
                pedIn.type="text"
            }
            else
            {
                pedIn.type="password"
            }
    }


    return (
            <Container  className="h-100 d-flex justify-content-center align-items-center py-5 ">
                <Row className="w-100 my-5">
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img src={adlog1} alt="AdminLogin" className='image-fluid' style={{ width: "400px", height: "400px" }} />
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className='mb-5'>Admin Login</h1>
                        <>
                        {errMessageState && <div className="row px-5 py-1 mx-5 col-10 border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                            {errMessage}
                        </div>}
                        </>
                        <form onSubmit={handleSubmit} className='col-7' style={{ textAlign: "left" }}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Password</Form.Label>
                               <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="viewpaswword" className='d-flex justify-content-start align-items-center' style={{fontSize:"smaller"}}> <input type="checkbox" onClick={handleViewPassword}id='viewpaswword' ref={viewpwd} />View Password</label>
                            </Form.Group>
                           

                            <button className="btn  btn-sm px-5 py-2" type="submit" style={{ backgroundImage: "linear-gradient(90deg, #881e91, #b4435d, #e46f22)", color: "white", fontWeight: "bold" }}>
                                Login
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
    );
}

export default Adminloginpage;