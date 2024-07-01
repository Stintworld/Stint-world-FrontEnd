import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
const ProtectedRoute = ({isAuth, component: Component, logout, ...rest}) => { 
    return ( 
        <>
        {
            <Route  
                {...rest} 
               
                render={(props)=>{
                    const pathUri=props.match.path
                    if(isAuth === true)
                    {
                        if((localStorage.getItem("userType") === "jobseeker") && 
                        (pathUri === "/contactus" || pathUri ===  "/alljobs" || pathUri ===  "/appblogs" || pathUri === "/formprofile"  || pathUri === "/subscribe" 
                            || pathUri === "/viewprofile"  || pathUri === "/jobdetails:jobid" || pathUri === "/updateprofile:candidateID"
                            || pathUri === "/applicationhistory"  || pathUri === "/aboutus"  || pathUri === "/logout" || pathUri === "/blogs" 
                        ))
                        {
                            return(<Component {...props} logout={logout} ></Component>)
                        }
                        else if((localStorage.getItem("userType") === "employer") && (
                            pathUri === "/blogs" ||  pathUri === "/empblogs" || pathUri === "/postedjobdetails:id" || pathUri === "/postjob" || pathUri === "/posthistory" || pathUri === "/viewapplicants:id" || pathUri === "/empapplicatprofileview:id" || pathUri === "/employerprofileview" || pathUri === "/updateemployerprofile" || pathUri === "/empaboutus"  || pathUri === "/empcontactus" || pathUri === "/logout"  
                        ))
                        {
                            return(<Component {...props} logout={logout} ></Component>)
                        }
                        else if(localStorage.getItem("userType") === "admin" )
                            {
                                return(<Component {...props} logout={logout} ></Component>)
                            }
                        else{
                            return  <Redirect  to={{path:"/"}}  />
                        }
                        // return(<Component {...props} logout={logout} ></Component>)
                        // return(<Component {...props} {...rest} ></Component>)
                        
                    }
                    else 
                    {
                       return  <Redirect  to={{path:"/"}}  />
                    }
                }
                }
           
            />
        }
        </>
     );
} 
export default ProtectedRoute;