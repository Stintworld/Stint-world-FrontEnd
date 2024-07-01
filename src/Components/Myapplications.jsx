import "../Stylesh/Myapplications.css"
import "../Stylesh/Jobs.css";
import NavigationBar from "../Components/NavigationBar.jsx";
import Myapplicationscard from "../Components/Myapplicationscard.jsx";
import Footer from "../Components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from "../Components/Loader.jsx";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

const Myapplications = ({ logout }) => {
    const history = useHistory();
    const [loaderState, setLoaderState] = useState(true)
    const [errMessageState, setErrMessageState] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [items, setItems] = useState()
    const [nodata, setNoData] = useState(false);
    const ApplicantID = Number(localStorage.getItem("ApplicantId"))


    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 10000)

    }, [errMessageState])

    const handleGoBack=(e)=>{
        e.preventDefault()
        history.goBack()
    }

    useEffect(() => {
        const myapplications = axios.get(`https://www.stint.world/jobapplications/getbyapplicantid/${ApplicantID}`)
        // const myapplications = axios.get(`http://localhost:8080/jobapplications/getbyapplicantid/${ApplicantID}`)
            .then((response) => { return response.data })
            .then((data) => {
                if (data.statusCode === 200) {
                    setItems(data.data.reverse())
                    setNoData(false)
                }
                setLoaderState(false)
            })
            .catch((err) => {
                setErrMessageState(true)
                setLoaderState(false)
                setNoData(true)
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
                    setErrMessage(`${err.response.data.rootCause}`)
                }
                else {
                    setErrMessage(`Something went wrong! ${err}`)
                }
            })
    }, [ApplicantID])


    return (
        <>
            <NavigationBar logout={logout}></NavigationBar>
            {/* Error message Disoaly block */}
            {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                {errMessage}
            </div>}
            {(loaderState === false && nodata === false) && <Myapplicationscard items={items}></Myapplicationscard>}
            {(loaderState === true) && <Loader></Loader>}
            {(loaderState === false && nodata === true) && <div className="container justify-content-center align-items-center my-5 py-5">
                <h2>You have not applied any jobs yet</h2>
                <p><Link onClick={handleGoBack}>Click here</Link> to view all jobs</p>
            </div>}
            <Footer></Footer>
        </>
    );
}

export default Myapplications;