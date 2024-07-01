import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Adminlist from './Adminlist';
import Loader from './Loader';



const Adminsettingpage = ({logout}) => {

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adminList, setAdminList]= useState([]);
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()

  const handleCloseChangePassword = () => setShowChangePassword(false);
  const handleCloseAddAdmin = () => setShowAddAdmin(false);

  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      const resetPass = axios.put("https://www.stint.world/admins/resetpwd", null, { params: { mail: email, newPassword: newPassword, confirmPwd: confirmPassword } })
        .then((response) => { return response.data })
        .then((data) => {
          if (data.statusCode === 200) {
            alert(data.data)
            alert("You will be logged off, Please SignIn again")
            logout()
            
          }
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 500") {
            alert(`${err.response.data.status} ${err.response.data.error}`)
          }
          else if (err.message === "Network Error") {
            alert(`${err.message} : Request failed`)
          }
          else if (err.message === "Request failed with status code 500") {
            alert(`${err.response.data.status} ${err.response.data.error}`)
          }
          else if (err.message === "Request failed with status code 406") {
            alert(`${err.response.data.status} ${err.response.data.error}`)
          }
          else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
            alert(`${err.response.data.message}`)
          }
          else {
            alert(`Something went wrong! ${err}`)
          }
        })
    }
    else {
      alert("Password mismatched")
    }



    setEmail('');
    setNewPassword('');
    setConfirmPassword('')
    setShowChangePassword(false);
  };

  const handleSubmitAddAdmin = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      const newAdmin = {
        adminName: username,
        adminEmail: email,
        adminPassword: newPassword,
        adminPhoneNo: contact
      }

      const nd = axios.post("https://www.stint.world/admins/signup", newAdmin)
        .then((response) => { return response.data })
        .then((data) => {
          if (data.statusCode === 201) {
            alert(data.message)
            setUsername('');
            setEmail('');
            setContact('');
            setNewPassword('')
            setConfirmPassword('');
            setShowAddAdmin(false);
          }
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 500") {
            alert(`${err.response.data.status} ${err.response.data.error}`)
          }
          else if (err.message === "Network Error") {
            alert(`${err.message} : Request failed`)
          }
          else if (err.message === "Request failed with status code 500") {
            alert(`${err.response.data.status} ${err.response.data.error}`)
          }
          else if (err.message === "Request failed with status code 406") {
            alert(`${err.response.data.rootCause}`)
          }
          else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
            alert(`${err.response.data.message}`)
          }
          else {
            alert(`Something went wrong! ${err}`)
          }
        })

    }
    setUsername('');
    setEmail('');
    setContact('');
    setConfirmPassword('');
    setShowAddAdmin(false);
  };


  useEffect(()=>{
    const getAdminList = async()=>{
      const dataAdminList= await axios.get(`https://www.stint.world/admins/getAllAdmins`)
      .then((response)=>{ return response.data})
      .then((data)=>{
        if(data.statusCode === 200)
          {
            setAdminList(data.data)
            setLoaderState(false)
          }
      })
      .catch((err)=>{
        setErrMessageState(true)
        setLoaderState(false)
        if (err.message === "Request failed with status code 500") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Network Error") {
          setErrMessage(`${err.message} : Request failed`)
      }
      else if (err.message === "Request failed with status code 500") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Request failed with status code 406") {
          setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
      }
      else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
          setErrMessage(`${err.response.data.message}`)
      }
      else {
          setErrMessage(`Something went wrong! ${err}`)
      }
      })
    }
    getAdminList()
  },[])









  return (
    <>
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
              {errMessage}
            </div>}
            {(loaderState === true) && <Loader></Loader>}
    {/* {(loaderState === false && adminList && errMessageState === false) &&  <Container> */}
    {  <Container>
        <Row>
          <Col className="d-flex  align-items-center mt-5">
            <button className="btn btn-primary btn-lg" onClick={() => setShowChangePassword(true)}>
              Change Password
            </button>
            <button className="btn btn-primary btn-lg ms-2" onClick={() => setShowAddAdmin(true)} >
              Add New Admin
            </button>
          </Col>
        </Row>

        {/* to view the list of admin */}
       {(loaderState === false && adminList && errMessageState === false)  && <Adminlist adminList={adminList}></Adminlist>}

        {/* // form for reset admin password */}
        <Modal show={showChangePassword} onHide={handleCloseChangePassword}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitChangePassword}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <button className="btn btn-primary btn-l m-3" type="submit">
                Submit
              </button>
              <button className="btn btn-primary btn-l m-3" onClick={handleCloseChangePassword}>
                Cancel
              </button>
            </Form>
          </Modal.Body>
        </Modal>


        {/* form for create new admin  */}
        <Modal show={showAddAdmin} onHide={handleCloseAddAdmin}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitAddAdmin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel" // Use "tel" for phone number input
                  placeholder="Enter contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  min={10}
                  max={10}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password (Strong Password Required)</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter strong password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  min={8}
                />
                <Form.Text className="text-muted">
                  A strong password should include a mix of uppercase and lowercase letters, numbers, and symbols.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  min={8}
                />
              </Form.Group>
              <button className="btn btn-primary btn-l m-3" type="submit">
                Create
              </button>
              <button className="btn btn-primary btn-l m-3" onClick={handleCloseAddAdmin}>
                Cancel
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>}

    </>
  );
}

export default Adminsettingpage;