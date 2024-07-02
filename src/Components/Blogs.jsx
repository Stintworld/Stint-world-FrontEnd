import ai from "../images/StintWorld.jpg"
const Blogs = () => {
    return (
        <>
            <h1 className="mt-2 mx-5" style={{ textAlign: "left", color: "darkblue" }}>Blogs</h1>
            <section className="container d-flex flex-wrap justify-content-around align-items-center p-5">
                <div style={{ width: "700px", textAlign: "left" }} >
                    <h1>Who Can Benefit from This? </h1> <br />
                    <p >
                        1.This app is designed for candidates with a technical background, including both fresh graduates and experienced professionals. <br />
                        2.Our goal is to empower both recent graduates embarking on their careers and experienced engineers seeking to advance their skillsets. <br />

                        3.We help candidates gain valuable experience while studying relevant courses, regardless of their specific engineering discipline. <br />

                        4.This app was developed to streamline the job search process for engineering students and graduates, enabling them to leverage their skills effectively. <br />

                        5.The app is open to all engineering students and graduates, including those with both distinction and backlog grades. <br />

                        6.We understand the challenges faced by candidates with backlogs, and this app can be a valuable tool to help them overcome those hurdles and secure employment. <br />

                        7.The app caters to both urban and rural candidates, providing valuable insights into the current job market.<br />

                        8.It offers a research and development platform for beginners to gain practical knowledge. <br />

                        9.Our 'learn and earn' concept allows users to acquire skills at an affordable cost compared to traditional learning methods. <br />

                        10.This app provides a valuable opportunity for recent graduates who may face financial constraints to access essential knowledge and skills. <br />
                    </p>
                </div>
                <div style={{ width: "250px" }}>
                    <img className="img-fluid rounded-circle" src={ai} alt="AI_technology" style={{ width: "250px", height: "250px" }} />
                </div>
            </section >
        </>
    );
}

export default Blogs;