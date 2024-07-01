import ab2 from "../images/ab2.jpg";
import whyus from "../images/whyus.jpg";
import mission from "../images/m.png";
import vision from "../images/v.png";
import NavigationBar from "../Components/NavigationBar.jsx";
import Footer from "./Footer.jsx";
const Aboutus = () => {
    return (
        <>
            <NavigationBar/>
            <div className="container">
                <div className="row my-5 d-flex align-items-center justify-content-space-around">
                    <div className="col-md-6 order-md-1 my-5" style={{ textAlign: "left" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: "15px", letterSpacing: "4px", fontWeight: "400", color: "#5b627d" }}>ABOUT US</p>
                        <h1 style={{ fontSize: "44px" }}>Architecting the path to dream jobs for engineers</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>
                    <div className="col-md-6 order-md-2 d-flex justify-content-center align-items-center">
                        <img src={ab2} alt="YourImageDescription" className="img-fluid"  />
                        {/* style={{ width: "250px", height: "250px" }} */}
                    </div>
                </div>

                {/* ====== WHY US ========= */}
                <div className="row  my-5 d-flex align-items-center justify-content-space-around py-5" >
                    <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
                        <img src={whyus} alt="YourImageDescription" className="img-fluid"  />
                    </div>
                    <div className="col-md-6 order-md-2" style={{ textAlign: "left" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: "15px", letterSpacing: "4px", fontWeight: "400", color: "#5b627d" }}>WHY US</p>
                        <h2 style={{}}>Architecting the path to dream jobs for engineers</h2>
                        <p style={{borderLeft:"5px solid #9932cc", paddingLeft:"5px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>

                </div>
                {/* ====== Our Mission ========= */}
                <div className="row my-5 py-5 mt-5 d-flex align-items-center justify-content-space-around">
                    <div className="col-md-6 order-md-1" style={{ textAlign: "left" }}>
                        <h4>Our Mission : Architecting the path to dream jobs for engineers</h4>
                        <p style={{borderLeft:"5px solid #9932cc", paddingLeft:"5px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>
                    <div className="col-md-6 order-md-2 d-flex justify-content-center align-items-center">
                        <img src={mission} alt="YourImageDescription" className="img-fluid" style={{ width: "250px", height: "300px" }} />
                    </div>
                </div>

                {/* ====== Our Vision ========= */}
                <div className="row  my-5 mt-5 py-5 d-flex align-items-center justify-content-space-around py-5" >
                    <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
                        <img src={vision} alt="YourImageDescription" className="img-fluid" style={{ width: "250px", height: "300px" }} />
                    </div>
                    <div className="col-md-6 order-md-2" style={{ textAlign: "left" }}>
                        <h4> Our Vission : Architecting the path to dream jobs for engineers</h4>
                        <p style={{borderLeft:"5px solid #9932cc", paddingLeft:"5px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Aboutus;