import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../Stylesh/Logout.css"

const Logout = ({logout}) => {
 const history = new useHistory();

    
    return ( 
        <Container fluid className="p-5 vh-100 d-flex justify-content-center flex-column align-items-end maindiv">
            <h3>Are you sure do you want to logout?</h3>
            <div className="mx-5 my-2">
                <button className="btn btn-primary btn-lg mx-5 px-5 my-2 py-2 rounded-2" onClick={logout}>Yes</button>
                <button className="btn btn-primary btn-lg mx-5 px-5 my-2 py-2 rounded-2" onClick={()=>{history.back('')}}>No</button>
            </div>
        </Container>
     );
}
 
export default Logout;