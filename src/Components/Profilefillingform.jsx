import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Stylesh/Profilefillingform.css";



const Profilefillingform = () => {
    const history= useHistory();

    const name= localStorage.getItem("employerName");
    const apemail= localStorage.getItem("ApplicantEmail")

    const engineeringBranches = [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Information Technology",
        "Mechanical Engineering",
        // Add more branches here
    ];

    const [firstName, setFirstName] = useState(name);
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(apemail);
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [file, setFile] = useState('');
    const [resume, setResume] = useState('');
    const [school10th, setSchool10th] = useState('');
    const [passingYear10th, setPassingYear10th] = useState('');
    const [percentageCGPA10th, setPercentageCGPA10th] = useState('');

    const [school12th, setSchool12th] = useState('');
    const [passingYear12th, setPassingYear12th] = useState('');
    const [percentageCGPA12th, setPercentageCGPA12th] = useState('');

    const [schoolDegree, setSchoolDegree] = useState('');
    const [passingYearDegree, setPassingYearDegree] = useState('');
    const [percentageCGPACgpaDegree, setPercentageCGPACgpaDegree] = useState('');
    const [specializationDegree, setSpecializationDegree] = useState('');


    const [gender, setGender] = useState('');
    const [jobLevel, setJobLevel] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleDOB = (event) => {
        setDob(event.target.value);
    };


    const handleImageChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    const handleResumeChange = (event) => {
        setResume(URL.createObjectURL(event.target.files[0]));
    };
    const handleJobLevelChange = (event) => {
        setJobLevel(event.target.value);
    };
    const handleSpecializationChange = (event) => {
        setSpecializationDegree(event.target.value);
    };


    const submitprofileinfo =(event)=>{
        event.preventDefault();
        alert("form data submitted")
        history.push("/subscribe")
    }


    return (
        <>
            <div className="container my-5 " style={{ borderLeft: "10px solid #a741dc", borderRadius: "20px", backgroundColor: "#eed8fc", boxShadow: "5px 5px 5px 2px #ce8df3" }}>
                <h2 className="pt-5" style={{ color: "#63247f" }}>Profile Information</h2>
                <p>
                    Please enter your information and proceed to the next step so we can
                    build profile.
                </p>
                <form style={{ textAlign: "left" }} onSubmit={submitprofileinfo}>
                    <h5 className="text-left mt-5 mb-3">Persoanl Info </h5>
                    <p className="compulsaryinfo"> indicates the feild must be filled </p>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="firstName" className="col-sm-3 col-form-label compulsary">First Name</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="lastName" className="col-sm-3 col-form-label compulsary">Last Name</label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="email" className="col-sm-3 col-form-label compulsary">
                                Email
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    // onChange={handleEmailChange}
                                    // required
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="phone" className="col-sm-3 col-form-label compulsary">
                                Phone Number
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="birthDate" className="col-sm-3 col-form-label compulsary">
                                Birth Date
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthMonth"
                                    placeholder="MM"
                                    min="1"
                                    max="12"
                                    value={dob}
                                    onChange={handleDOB}>
                                </input>
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="form-group row col-6">
                            <label htmlFor="gender" className="col-sm-3 col-form-label compulsary">Gender</label>
                            <div className="col-sm-6">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={gender === "male"}
                                        onChange={(event) => setGender(event.target.value)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={gender === "female"}
                                        onChange={(event) => setGender(event.target.value)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    <h5 className="text-left mt-5 mb-3">Educational Details </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="school10th" className="col-sm-3 col-form-label compulsary">
                                School (10th)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school10th"
                                    placeholder="School Name"
                                    value={school10th}
                                    onChange={(event) => setSchool10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row col-6">
                            <label htmlFor="passingYear10th" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="passingYear10th"
                                    placeholder="YYYY"
                                    value={passingYear10th}
                                    onChange={(event) => setPassingYear10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-starts" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPA10th" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPA10th"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPA10th}
                                    onChange={(event) => setPercentageCGPA10th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>

                        <div className="form-group row col-6">
                            <label htmlFor="school12th" className="col-sm-3 col-form-label compulsary">
                                School (12th)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="school12th"
                                    placeholder="School Name"
                                    value={school12th}
                                    onChange={(event) => setSchool12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="passingYear12th" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="passingYear12th"
                                    placeholder="YYYY"
                                    value={passingYear12th}
                                    onChange={(event) => setPassingYear12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-starts" }}>

                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPA10th" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPA12th"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPA12th}
                                    onChange={(event) => setPercentageCGPA12th(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="schoolDegree" className="col-sm-3 col-form-label compulsary">
                                School/College (Degree)
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolDegree"
                                    placeholder="School/College Name"
                                    value={schoolDegree}
                                    onChange={(event) => setSchoolDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="specializationDegree" className="col-sm-3 col-form-label compulsary">
                                Department
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="specializationDegree"
                                    value={specializationDegree}
                                    onChange={handleSpecializationChange}
                                >
                                    <option value="">Select Department</option>
                                    {engineeringBranches.map((branch) => (
                                        <option key={branch} value={branch}>
                                            {branch}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="passingYearDegree" className="col-sm-3 col-form-label compulsary">
                                Year of Passing
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="passingYearDegree"
                                    placeholder="YYYY"
                                    value={passingYearDegree}
                                    onChange={(event) => setPassingYearDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row col-6">
                            <label htmlFor="percentageCGPACgpaDegree" className="col-sm-3 col-form-label compulsary">
                                Percentage/CGPA
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="percentageCGPACgpaDegree"
                                    placeholder="Percentage or CGPA"
                                    value={percentageCGPACgpaDegree}
                                    onChange={(event) => setPercentageCGPACgpaDegree(event.target.value)}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <h5 className="text-left mt-5 mb-3">Other Info </h5>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "space-between" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="jobLevel" className="col-sm-3 col-form-label compulsary">
                                Job Level
                            </label>
                            <div className="col-sm-6">
                                <select
                                    className="form-control"
                                    id="jobLevel"
                                    value={jobLevel}
                                    onChange={handleJobLevelChange}
                                >
                                    <option value="">Select Job Level</option>
                                    <option value="fresher">Fresher</option>
                                    <option value="experienced">Experienced</option>
                                </select>
                            </div>
                        </div>



                        {/* photo and resume code */}
                        <div className="form-group row col-6">
                            <label htmlFor="resume" className="col-sm-3 col-form-label compulsary">
                                Upload Resume
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="resume"
                                    // value={resume}
                                    onChange={handleResumeChange}
                                    required
                                />
                            </div>
                        </div>

                    </section>
                    <section className="flex-container col-13 d-flex my-3" style={{ justifyContent: "flex-start" }}>
                        <div className="form-group row col-6">
                            <label htmlFor="pphoto" className="col-sm-3 col-form-label compulsary">
                                Upload Image
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profilephoto"
                                    onChange={handleImageChange}
                                    // value={file}
                                    accept="image/*" // Accepts only image files
                                    required
                                />
                                <p className="text-muted">Accepted formats: JPG, JPEG, PNG</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex-container col-13 d-flex my-3 compulsary" style={{ justifyContent: "flex-end" }}>
                        <div className="form-group row col-5 mb-5">
                            <div className="col-sm-8">
                                <input
                                    type="submit"
                                    className="form-control"
                                    id="submitprofile"
                                    value="Submit"
                                    style={{backgroundColor:"#a741dc", color:"white", fontWeight:"bold"}}
                                    required
                                />
                            </div>
                        </div>
                    </section>
                </form>
            </div >
        </>
    );
}
export default Profilefillingform;