import { useEffect, useRef, useState } from "react";
import Empnavigationbar from "./Empnavigationbar.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";




const Contactusemp = ({logout}) => {
    const [errMessageState, setErrMessageState] = useState(false)
    const [qrespState, setQrespState] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [qresp, setQresp]= useState('')
    const qmeail =localStorage.getItem("employerEmail")
    const qname= localStorage.getItem("employerName")
    const name= useRef(qname)
    const email= useRef(qmeail)
    const subject= useRef('')
    const message= useRef('')

    useEffect(() => {
        setTimeout(() => {
            setErrMessageState(false);
        }, 50000)

    }, [errMessageState])
    useEffect(() => {
        setTimeout(() => {
            setQrespState(false);
        }, 50000)

    },[qrespState])






    const handleQuery =(e)=>{
        e.preventDefault()
        const newQuery= {
            fromName: name.current.value,
            fromEmail: email.current.value,
            subject: subject.current.value,
            message: message.current.value,
        }
        
        const createQuery = axios.post("https://www.stint.world/enqueries/create", newQuery)
        .then((response)=>{return response.data})
        .then((data)=>{
            if(data.statusCode === 200)
            {
               
                setQresp(`${data.message}, our represntative will reach you in short time`)
                setQrespState(true)
            }
        })
        .catch((err)=>{
            setErrMessageState(true)
            if (err.message === "Request failed with status code 404") {
                setErrMessage(`${err.response.data.message}`); 
            }
            else if(err.message === "Network Error")
            {
                
                setErrMessage(`${err.message} : connection refused`)
            }
            else if(err.message === "equest failed with status code 500")
            {
                setErrMessage(`${err.response.data.status} ${err.response.data.error}`)
            }
            else if(err.message === "Request failed with status code 404" || err.code=== "ERR_BAD_REQUEST")
            {
                setErrMessage(`${err.response.data.message}`)
            }
            else
            {
                setErrMessage("Somthing went wrong please check")
            }
        })
        }
       


    return (
        <>
            <Empnavigationbar logout={logout}/>
            <section class="contact" id="contact">
                <div class="container">
                    <div class="heading text-center">
                        <h2>Contact <span> Us </span></h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                    <div class="row d-flex align-items-center mt-3" style={{ justifyContent: "space-around" }}>
                        <div class="col-md-5 col-lg-4">
                            <div class="content d-flex flex-column justify-content-center align-items-center" >
                                <div class="info">
                                    <i class="fas fa-mobile-alt"></i>
                                    <h4 class="d-inline-block">PHONE<br />
                                        <span>+91 9901823897</span></h4>
                                </div>
                                <div class="info">
                                    <i class="far fa-envelope"></i>
                                    <h4 class="d-inline-block">EMAIL<br />
                                        <span>vss122017@gmail.com</span></h4>
                                </div>
                                <div class="info">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <h4 class="d-inline-block">ADDRESS <br />
                                        <span>Satellite complex, Koppikar road, Hubli - 580029</span></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                        {errMessageState && <div className="row px-2 py-1 mx-0 mb-3 col-12 border border-1 rounded-1" style={{ color: "red", backgroundColor: "#ffb2b2" }}>
                    {errMessage}
                </div>}
                        {qrespState && <div className="row px-2 py-1 mx-0 mb-3 col-12 border border-1 rounded-1" style={{ color: "#250aca", backgroundColor: "lightgreen" }}>
                    {qresp}
                </div>}
                            <form onSubmit={handleQuery}>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Name" ref={name} value={qname} disabled required/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control" placeholder="Email" ref={email} value={qmeail} required/>
                                    </div>
                                    <div class="col-12">  <input type="text" class="form-control" placeholder="Subject" ref={subject} required/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="5" id="comment" placeholder="Message" ref={message} required></textarea>
                                </div>
                                <button class="btn btn-block btn-lg" type="submit">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contactusemp;