import ai from "../images/StintWorld.jpg"

import Footer from "./Footer";
import NavigationBar from "./NavigationBar";


const JobseekerBlogs = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <section className="container d-flex flex-wrap justify-content-around align-items-center p-5">
                <div style={{ width: "700px", textAlign: "left" }} >
                    <h1>Who Can Benefit from This? </h1> <br />
                    <p >
                    1. This app is made for only technical background candidates. <br />
                    2. This is for freshers and experienced engineering background candidates <br />
                    3. To motivate the freshers and career oriented program <br />
                    4. To bring candidates with experience while studying the courses with strong technical background experience. <br />
                    5. Applicable for all stream of engineering graduates and students <br />
                    6. To save time and their skills this app has been developed and not to struggle for jobs while completing their graduation. <br />
                    7. Applicable for distinction candidate and for backlog candidates as well <br />
                    8. Especially helps for backlogs candidates who were struggled and struggling for getting jobs in the market <br />
                    9. Planned for rural area candidates who doesn't know what's happening in the present market situation <br />
                    10. Research and Development for beginners to gain knowledge <br />
                    11. First learn and earn concept at minimal cost compared to market scenario <br />
                    12. After graduation who doesn't afford for course fees helps them for this opportunity to gain the knowledge   <br />                      
                </p>
            </div>
            <div  style={{ width: "250px" }}>
                <img className="img-fluid rounded-circle" src={ai} alt="AI_technology" style={{ width: "250px", height: "250px" }} />
            </div>
        </section >
            <Footer></Footer>
        </>
      );
}

export default JobseekerBlogs;