import Empnavigationbar from "./Empnavigationbar.jsx";
import Adminviewemppostedjobcard from "./Adminviewemppostedjobcard.jsx";
import Footer from "./Footer.jsx";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";

const Adminemppostedjobviews = () => {
  const [postedJobs, setPostedJobs] = useState()
  const [loaderState, setLoaderState] = useState(true)
  const [errMessageState, setErrMessageState] = useState(false)
  const [errMessage, setErrMessage] = useState()
  const { id: empID } = useParams();
  const history = useHistory();

  useEffect(() => {
    const adminEmpPostedJobsByID = axios.get(`https://www.stint.world/jobs/getjobs/${empID}`)
      .then((response) => { return response.data })
      .then((data) => {
        if (data.statusCode === 200) {
          setPostedJobs(data.data)
          setLoaderState(false)
        }
      })
      .catch((err) => {
        setLoaderState(false)
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
          setErrMessage(`${err.response.data.message}`)
        }
        else {
          setErrMessage(`Something went wrong! ${err}`)
        }
      })
  }, [empID])


  return (
    <>
      {/* Error message Disoaly block */}
      {errMessageState && <div className="row px-5 py-1 mx-5 mb-5 col-4 shadow-sm border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
        {errMessage}
      </div>}
      {(loaderState === false && postedJobs.length > 0 && errMessageState === false) && <Adminviewemppostedjobcard postedJobs={postedJobs}></Adminviewemppostedjobcard>}
      {(loaderState === false && postedJobs.length === 0 && errMessageState === false) && <div className="flex-container d-flex flex-warp justify-content-center algin-items-center">
        <h3 className="p-5 mt-5">Employer not posted jobs yet</h3>

      </div>}
      {(loaderState === true) && <Loader></Loader>}
      <Footer />

    </>
  );
}

export default Adminemppostedjobviews;