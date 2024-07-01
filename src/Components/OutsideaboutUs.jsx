import { Link } from "react-router-dom/cjs/react-router-dom.min";
import abs from "../images/aboutus.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
const OutsideaboutUs = () => {
    return (
        <>
            <div className="p-5" style={{ textAlign: "left", backgroundColor: "rgba(154, 53, 204, 0.09)", color: "rgb(38, 52, 180)" }}>
                <h4>About Us</h4>
                <hr />
                <div className="mb-4">
                    <div className="container d-flex justify-content-between align-items-center flex-wrap">
                        <div className="col-md-7">
                            <h2> Stint.world : Building the Bridge Between Talent and Opportunity</h2>
                            <p>Empowering Engineering Students to Launch Stellar Careers</p>
                            <p className="mt-3">
                                Stint.world is more than just an online job portal; it's a platform designed to forge a powerful connection between ambitious engineering students brimming with potential and the companies seeking their brilliance. We understand the unique challenges engineering students face as they embark on their careers. The job market can be vast and overwhelming, filled with a multitude of opportunities. Stint.world cuts through the noise by connecting you with relevant engineering positions that align with your skills and academic background.

                                On the other hand, companies today are constantly searching for the next generation of talented engineers to fuel innovation and growth. They require individuals who are not only equipped with the latest technical expertise but also possess the drive and adaptability to thrive in a dynamic industry. Stint.world bridges this gap by providing employers with access to a pre-vetted pool of engineering students who are eager to learn, contribute, and become valuable assets to their teams.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={abs} alt="aboutus" className="image-fluid" style={{ height: "250px", width: "250px" }} />
                        </div>

                    </div>

                    <h6 className="mt-5">Find Your Perfect Engineering Match</h6> We curate a selection of high-quality engineering jobs aligned with your specific skills and interests.
                    <h6 className="mt-4">Showcase Your Engineering Prowess</h6> Highlight your academic achievements, projects, and technical expertise to impress potential employers.
                    <h6 className="mt-4">Connect with Engineering Powerhouses</h6> Gain access to a network of top companies actively seeking the next generation of engineering talent.
                    <h6 className="mt-4">Land Your Dream Engineering Role</h6> Benefit from personalized career coaching, interview preparation tools, and streamlined application processes.

                    <h5 className="mt-5">For Employers Looking for Engineering Talent :</h5>
                    <hr />
                    <h6 className="mt-4">Attract Future Engineering Leaders</h6> Target a pool of pre-vetted, ambitious engineering students with diverse skillsets.
                    <h6 className="mt-4">Simplify Hiring</h6> Access a talent pipeline of students equipped with the latest knowledge and ready to contribute.
                    <h6 className="mt-4">Build a Strong Engineering Team</h6> Discover potential candidates who can quickly learn, adapt, and innovate.
                    <h6 className="mt-4">Make Informed Hiring Decisions</h6> Evaluate potential based on comprehensive profiles, portfolios, and technical assessments.

                    <h5 className="mt-5">Our Mission</h5>
                    <hr />
                    At Stint.world, we're passionate about empowering engineering students to launch stellar careers and enabling companies to build strong, future-proof engineering teams. We believe in fostering a platform that fosters meaningful connections and propels the engineering industry forward.

                    <h6 className="mt-5">Join us on Stint.world and take your engineering career to the next level!</h6>
                </div>

                <div className="fs-5 mt-5 fw-bold d-flex flex-wrap align-items-center justify-content-start">
                    Follow us on :
                    <div>
                        <Link className="fs-2 mx-2"> <span><ImFacebook2/></span> </Link>
                        <Link className="fs-2 mx-2"> <span><FaSquareInstagram/></span> </Link>
                        <Link className="fs-2 mx-2"> <span><FaLinkedin/></span> </Link>
                        <Link className="fs-2 mx-2"> <span><FaSquareXTwitter/></span> </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OutsideaboutUs;