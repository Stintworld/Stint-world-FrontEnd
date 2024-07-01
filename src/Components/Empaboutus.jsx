// import aboutus from "../images/aboutus.jpg";
import mission from "../images/m.png";
import vision from "../images/v.png";
import ab1 from "../images/ab1.jpg";
import ab3 from "../images/ab3.jpg";
import Empnavigationbar from "./Empnavigationbar.jsx";
import Footer from "./Footer.jsx";
const Empaboutus = ({logout}) => {
    return (
        <>
            <Empnavigationbar logout={logout} />
            <div className="container">
                <div className="row my-5 d-flex align-items-center justify-content-space-around">
                    <div className="col-md-6 order-md-1 my-5" style={{ textAlign: "left" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: "15px", letterSpacing: "4px", fontWeight: "400", color: "#5b627d" }}>ABOUT US</p>
                        <h1 style={{ fontSize: "44px" }}>Streamlining recruitment for a faster hire</h1>
                        <p >
                        {/* #450e5d 2%, #9932cc */}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>
                    <div className="col-md-6 order-md-2 d-flex justify-content-center align-items-center">
                        <img src={ab1} alt="YourImageDescription" className="img-fluid"  />
                    </div>
                </div>

                {/* ====== WHY US ========= */}
                <div className="row  my-5 d-flex align-items-center justify-content-space-around py-5" >
                    <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
                        <img src={ab3} alt="YourImageDescription" className="img-fluid" />
                    </div>
                    <div className="col-md-6 order-md-2" style={{ textAlign: "left" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: "15px", letterSpacing: "4px", fontWeight: "400", color: "#5b627d" }}>WHY US</p>
                        <h2 >Streamlining recruitment for a faster hire</h2>
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
                        <h4>Our Mission : Streamlining recruitment for a faster hire</h4>
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
                {/* style={{ backgroundColor: "#f6eafd", borderTopRightRadius: "100px", borderBottomLeftRadius: "100px" }} */}
                    <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
                        <img src={vision} alt="YourImageDescription" className="img-fluid" style={{ width: "250px", height: "300px" }} />
                    </div>
                    <div className="col-md-6 order-md-2" style={{ textAlign: "left" }}>
                        <h4> Our Vission : Streamlining recruitment for a faster hire</h4>
                        <p style={{borderLeft:"5px solid #9932cc", paddingLeft:"5px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos dolorum quisquam quaerat
                            quibusdam, mollitia officiis obcaecati aspernatur tempore! Ducimus porro distinctio fuga ex nisi quidem debitis qui fugit
                            possimus?
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Empaboutus;