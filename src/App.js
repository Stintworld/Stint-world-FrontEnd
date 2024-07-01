import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./Components/Login.jsx";
import Singlelogin from "./Components/Singlelogin.jsx";
import Resgistrationoptionpage from "./Components/Resgistrationoptionpage.jsx";
import Jobseekerregform from "./Components/Jobseekerregform.jsx";
import Employerregform from "./Components/Employerregform.jsx";
import Forgetpassword from "./Components/Forgetpassword.jsx";
import Resetpage from "./Components/Resetpage.jsx";
import Profilefillingform from "./Components/Profilefillingform.jsx";
import Payments from "./Components/Payments.jsx";
import Profilepage from "./Components/Profilepage.jsx";
import Updateprofile from "./Components/Updateprofile.jsx";
import Jobs from "./Components/Jobs.jsx";
import Jobdetails from "./Components/Jobdetails.jsx";
import Myapplications from "./Components/Myapplications.jsx";
import Postjob from "./Components/Postjob.jsx";
import Emppostedjobs from "./Components/Emppostedjobs.jsx";
import Emppostedjobdetails from "./Components/Emppostedjobdetails.jsx";
import Empviewallapplicants from "./Components/Empviewallapplicants.jsx";
import Empapplicantprofileview from "./Components/Empapplicantprofileview.jsx";
import Empprofileview from "./Components/Empprofileview.jsx";
import Empupdateprofile from "./Components/Empupdateprofile.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Empaboutus from "./Components/Empaboutus.jsx";
import Contactusemp from "./Components/Contactusemp.jsx";
import Contactus from "./Components/Contactus.jsx";
import Adminpanel from "./Components/Adminpanel.jsx";
import Adminviewapplicants from "./Components/Adminviewapplicants.jsx";
import Adminemppostedjobviews from "./Components/Adminemppostedjobviews.jsx";
import Adminviewjobdetails from "./Components/Adminviewjobdetails.jsx";
import Adminloginpage from "./Components/Adminloginpage.jsx";
import Landinpage from "./Components/Landinpage.jsx";
import Profilefillingformcopy from "./Components/Profilefillingformcopy.jsx";
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import useAuth from './useAuth.js';
import Logout from './Components/Logout.jsx';
import TermsCondition from './Components/TermsCondition.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import OutsideContact from './Components/OutsideContact.jsx';
import OutsideaboutUs from './Components/OutsideaboutUs.jsx';
import Adminapplicantprofileview from './Components/Adminapplicantprofileview.jsx';
import Adminemployerprofileview from './Components/Adminemployerprofileview.jsx';
import AdminEmppostedjobdetails from './Components/AdminEmppostedjobdetails.jsx';
import EmployerBlogs from './Components/EmployerBlogs.jsx';
import JobseekerBlogs from './Components/JobseekerBlogs.jsx';
import Blogs from './Components/Blogs.jsx';
import RefundPolices from './Components/RefundPolices.jsx';


function App() {
  

  const [isAuth, login, logout]= useAuth()

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* <Route path="/formprofile">
              <Profilefillingformcopy></Profilefillingformcopy>
            </Route> */}

            <ProtectedRoute path="/formprofile" isAuth={isAuth} component={Profilefillingformcopy} logout={logout}></ProtectedRoute>
            <ProtectedRoute path="/empblogs" isAuth={isAuth} component={EmployerBlogs} logout={logout}></ProtectedRoute>
            <ProtectedRoute path="/appblogs" isAuth={isAuth} component={JobseekerBlogs} logout={logout}></ProtectedRoute>
            <ProtectedRoute path="/blogs" isAuth={isAuth} component={Blogs} logout={logout}></ProtectedRoute>



            {/* <Route exact path="/">
              <Landinpage></Landinpage>
            </Route> */}

            <Route exact path="/" component={Landinpage}></Route>
            <Route exact path="/allaboutus" component={OutsideaboutUs}></Route>
            <Route exact path="/allcontactus" component={OutsideContact}></Route>
            <Route exact path="/privacypolicy" component={PrivacyPolicy}></Route>
            <Route exact path="/termscondition" component={TermsCondition}></Route>
            <Route exact path="/refundpolicy" component={RefundPolices}></Route>
            




            {/* <Route  path="/logins">
              <Login></Login>
            </Route> */}

            <Route  path="/logins" component={Login}></Route>


            <Route path="/login">
              <Singlelogin login={login}></Singlelogin>
            </Route>

            {/* <Route path="/login" component={<Singlelogin permissionGranted={permissionGranted}>}> </Route> */}



            {/* <Route path="/optreg">
              <Resgistrationoptionpage></Resgistrationoptionpage>
            </Route> */}

            <Route path="/optreg" component={Resgistrationoptionpage}></Route>


            {/* <Route path="/regjobseeker">
              <Jobseekerregform></Jobseekerregform>
            </Route> */}

            <Route path="/regjobseeker" component={Jobseekerregform}></Route>

            {/* <Route path="/regemployer">
              <Employerregform></Employerregform>
            </Route> */}

            <Route path="/regemployer" component={Employerregform}></Route>



            {/* <Route path="/forgetpassword">
              <Forgetpassword></Forgetpassword>
            </Route> */}
            <Route path="/forgetpassword" component={Forgetpassword} ></Route>

            {/* <Route path="/resetpage">
              <Resetpage></Resetpage>
            </Route> */}

            {/* <ProtectedRoute path="/resetpage" isAuth={isAuth} component={Resetpage} logout={logout}></ProtectedRoute> */}
            <Route  path="/resetpage" component={Resetpage}></Route>
            
            {/* <Route path="/subscribe">
              <Payments></Payments>
            </Route> */}

            <ProtectedRoute path="/subscribe" isAuth={isAuth} component={Payments} logout={logout}></ProtectedRoute>


            {/* <Route path="/viewprofile">
              <Profilepage></Profilepage>
            </Route> */}

            <ProtectedRoute path="/viewprofile" isAuth={isAuth} component={Profilepage} logout={logout}></ProtectedRoute>



            {/* <Route path="/updateprofile:candidateID">
              <Updateprofile></Updateprofile>
            </Route> */}

            <ProtectedRoute path="/updateprofile:candidateID" isAuth={isAuth} component={Updateprofile} logout={logout}></ProtectedRoute>

            {/* <Route path="/alljobs">
              <Jobs></Jobs>
            </Route> */}

            <ProtectedRoute path="/alljobs" isAuth={isAuth} component={Jobs} logout={logout}></ProtectedRoute>


            {/* <Route path="/jobdetails:jobid">
              <Jobdetails></Jobdetails>
            </Route> */}

            <ProtectedRoute path="/jobdetails:jobid" isAuth={isAuth} component={Jobdetails} logout={logout}></ProtectedRoute>


            {/* <Route path="/postedjobdetails:id">
              <Emppostedjobdetails></Emppostedjobdetails>
            </Route> */}

            <ProtectedRoute path="/postedjobdetails:id" isAuth={isAuth} component={Emppostedjobdetails} logout={logout}></ProtectedRoute>
            <ProtectedRoute path="/adminemppostedjobdetails:id" isAuth={isAuth} component={AdminEmppostedjobdetails} ></ProtectedRoute>



            {/* <Route path="/applicationhistory">
              <Myapplications></Myapplications>
            </Route> */}

            <ProtectedRoute path="/applicationhistory" isAuth={isAuth} component={Myapplications} logout={logout}></ProtectedRoute>

            {/* <Route path="/postjob">
              <Postjob></Postjob>
            </Route> */}
            <ProtectedRoute path="/postjob" isAuth={isAuth} component={Postjob} logout={logout}></ProtectedRoute>




            {/* <Route path="/posthistory">
              <Emppostedjobs></Emppostedjobs>
            </Route> */}
            <ProtectedRoute path="/posthistory" isAuth={isAuth} component={Emppostedjobs} logout={logout}></ProtectedRoute>



            {/* <Route path="/Adminemppostedjobviews:id">
              <Adminemppostedjobviews></Adminemppostedjobviews>
            </Route> */}
            <ProtectedRoute path="/Adminemppostedjobviews:id" isAuth={isAuth} component={Adminemppostedjobviews} logout={logout}></ProtectedRoute>




            {/* <Route path="/viewapplicants:id">
              <Empviewallapplicants></Empviewallapplicants>
            </Route> */}
            <ProtectedRoute path="/viewapplicants:id" isAuth={isAuth} component={Empviewallapplicants} logout={logout}></ProtectedRoute>




            {/* <Route path="/empapplicatprofileview:id">
              <Empapplicantprofileview></Empapplicantprofileview>
            </Route> */}
            <ProtectedRoute path="/empapplicatprofileview:id" isAuth={isAuth} component={Empapplicantprofileview} ></ProtectedRoute>
            <ProtectedRoute path="/adminapplicatprofileview:id" isAuth={isAuth} component={Adminapplicantprofileview} ></ProtectedRoute>




            {/* <Route path="/employerprofileview">
              <Empprofileview></Empprofileview>
            </Route> */}
            <ProtectedRoute path="/employerprofileview" isAuth={isAuth} component={Empprofileview} logout={logout}></ProtectedRoute>
            <ProtectedRoute path="/adminemployerprofileview:empid" isAuth={isAuth} component={Adminemployerprofileview}></ProtectedRoute>




            {/* <Route path="/updateemployerprofile">
              <Empupdateprofile></Empupdateprofile>
            </Route> */}
            <ProtectedRoute path="/updateemployerprofile" isAuth={isAuth} component={Empupdateprofile} logout={logout}></ProtectedRoute>




            {/* <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route> */}
            <ProtectedRoute path="/aboutus" isAuth={isAuth} component={Aboutus}  logout={logout}></ProtectedRoute>



            {/* <Route path="/empaboutus">
              <Empaboutus></Empaboutus>
            </Route> */}
            <ProtectedRoute path="/empaboutus" isAuth={isAuth} component={Empaboutus} logout={logout}></ProtectedRoute>




            {/* <Route path="/empcontactus">
              <Contactusemp></Contactusemp>
            </Route> */}

            <ProtectedRoute path="/empcontactus" isAuth={isAuth} component={Contactusemp} logout={logout} ></ProtectedRoute>



            {/* <Route path="/contactus">
              <Contactus></Contactus>
            </Route> */}
            <ProtectedRoute path="/contactus" isAuth={isAuth} component={Contactus} logout={logout}></ProtectedRoute>



            {/* <Route path="/admin/dashboard">
              <Adminpanel></Adminpanel>
            </Route> */}
            <ProtectedRoute path="/admin/dashboard" isAuth={isAuth} component={Adminpanel} logout={logout}></ProtectedRoute>



            {/* <Route path="/adminviewapplicants/:jobId">
              <Adminviewapplicants></Adminviewapplicants>
            </Route> */} 
            <ProtectedRoute path="/adminviewapplicants:jobId" isAuth={isAuth} component={Adminviewapplicants} logout={logout}></ProtectedRoute>



            {/* <Route path="/adminviewjd/:jobId">
              <Adminviewjobdetails></Adminviewjobdetails>
            </Route> */}
            <ProtectedRoute path="/adminviewjd/:jobId" isAuth={isAuth} component={Adminviewjobdetails} ></ProtectedRoute>




            <Route path="/admin/login">
              <Adminloginpage login={login}></Adminloginpage>
            </Route>
            {/* <Route path="/admin/login" component={Adminloginpage} login={login}></Route> */}

            {/* <Route path="/logout" >
              <Logout logout={logout}></Logout>
            </Route> */}

            {/* <ProtectedRoute path="/logout" isAuth={isAuth} component={Logout} ></ProtectedRoute> */}
            <ProtectedRoute path="/logout" isAuth={isAuth} component={Logout} logout={logout}  ></ProtectedRoute>


            <ProtectedRoute path="/ppf" isAuth={isAuth} component={Profilefillingform} logout={logout}></ProtectedRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
