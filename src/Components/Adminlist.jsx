import axios from "axios";
import { Table } from "react-bootstrap";



const Adminlist = ({ adminList }) => {

  const mainAdminID= localStorage.getItem("adminId")

  const handleDeaactivateAdmin = (adminId) => {
    console.log("Deleting the admin with ID: ", adminId);
    // admins/deletebyadminhead/{adminHeadId}/{adminId}"
    const deletedAdmin = axios.put(`https://www.stint.world/admins/deletebyadminhead/${mainAdminID}/${adminId}`)
    .then((response)=>{
      return response.data
    })
    .then((data)=>{
      if(data.statusCode === 200)
        {
          alert(data.message)
        }
    })
    .catch((err)=>{
      if (err.message === "Request failed with status code 500") {
        alert(`${err.response.data.statusCode} ${err.response.data.message}`)
    }
    else if (err.message === "Network Error") {
      alert(`${err.message} : Request failed`)
    }
    else if (err.message === "Request failed with status code 406") {
      alert(`${err.response.data.message}`)
    }
    else if (err.message === "Request failed with status code 404" || err.code === "ERR_BAD_REQUEST") {
      alert(`${err.response.data.message}`)
    }
    else {
      alert(`Something went wrong! ${err}`)
    }
    })

  }

  return (
    <>
      <div className="flex-conatiner mt-5">
        <h4 style={{ textAlign: "left", color: "darkblue" }}>Admin List</h4>
        <div className="conatiner mt-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminList.map((admin) => (
                <tr key={admin.adminId}>
                  <td>{admin.adminId}</td>
                  <td>{admin.adminName}</td>
                  <td>{admin.adminPhoneNo}</td>
                  <td>{admin.adminEmail}</td>
                  <td><button className="btn btn-primary rounded-2" onClick={() => { handleDeaactivateAdmin(admin.adminId) }}>Deactivate</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Adminlist;