import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../Stylesh/Payments.css";
import { Container, Row, Col, Form } from 'react-bootstrap';
import subscribers from "../images/subscribers.jpg"

const Payments = () => {

    const history = useHistory();

    const Handlesubscription= ()=>{
        // call the backend API. it will give the rozarpay payment URL as response and put that url below 
            window.open("https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-DWeb-Overall&utm_adgroup=All-Combination&utm_content=BrandAd&utm_term=razorpay%20login&utm_gclid=&utm_campaignID=21197421579&utm_adgroupID=164244092547&utm_adID=697013774062&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=1007773&gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8cyQR63IJszQmJXhp6dOWRqIW8EoX0IPo5ZvdsK5_9RFgLDgKurmFcaAqjDEALw_wcB")
    }

    const handlesubcriberedirection =()=>{
        history.push("/viewprofile")
    }
    const handlenotsubcriberedirection =()=>{
        history.push("/")
    }
    return (

        <>
            <Container fluid className="h-100 d-flex justify-content-center align-items-center py-5">
                <Row className="w-100 my-5">
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img src={subscribers} alt="AdminLogin" fluid style={{ width: "400px", height: "400px" }} />
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                       <h1 className='mb-5'>Here is the Chance</h1>
                        <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus fuga,
                            dignissimos maxime pariatur enim odio hic incidunt modi illum autem,
                            rerum veritatis, culpa quae nam deleniti. Debitis modi soluta animi?
                        </p>
                        <p>Click below to to access it</p>
                        <button onClick={Handlesubscription} className="btn btn-lg px-5 py-2" style={{backgroundImage: "linear-gradient(90deg, #881e91, #b4435d, #e46f22)", color: "white", fontWeight: "bold"}}>
                            Subscribe Now
                        </button>
                        <div className="mt-5 d-flex justify-content-around align-items-center">
                        <button onClick={handlesubcriberedirection}    style={{backgroundImage: "linear-gradient(90deg, #881e91, #b4435d, #e46f22)", color: "white", fontWeight: "bold"}}  className="btn mx-2 px-5 py-2">Subscribed</button>
                        <button onClick={handlenotsubcriberedirection} style={{backgroundImage: "linear-gradient(90deg, #881e91, #b4435d, #e46f22)", color: "white", fontWeight: "bold"}}  className="btn mx-2 px-5 py-2">Not Subscribed</button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Payments;