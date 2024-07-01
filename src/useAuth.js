import { useCallback, useEffect, useState } from "react";



export default function useAuth() {
    //setting the initial value to true or false based on log in status. if loggedin then initial value 
    // to true else false
    const [isAuth, setIsAuth]=useState(()=>{
        const loginStatusJson= localStorage.getItem("loginStatus");
        const  loginStatus = loginStatusJson? JSON.parse(loginStatusJson): false;
        return loginStatus;
    })
    // const login = useCallback(()=>{
    //     localStorage.setItem("loginStatus", true)
    //     setIsAuth(true)

    // }, [isAuth])
    // const logout = useCallback(()=>{
    //     localStorage.setItem("loginStatus", false)
    //     setIsAuth(false)
    // }, [isAuth])
    
    // const loginstatus = JSON.parse(localStorage.getItem("loginStatus"))
    //setting the initial value to true or false based on log in status. if loggedin then initial value 
    // to true else false
    //intialValue
    // console.log("Initial value is from APP.js is : ......", intialValue);
    // if(localStorage.getItem("loginStatus")  === true)
    //     {
            
    //         intialValue= true;
    //         // setIsAuth(true)
    //         console.log("setting the inital value to true.... for page refreshing: ", intialValue);
    //     }
    //     else
    //     {
    //         // setIsAuth(intialValue)
    //         intialValue= false;
    //     } 

        
   



    function login(usertype)
    {
        localStorage.setItem("userType", usertype)
        localStorage.setItem("loginStatus", true)
        setIsAuth(true)
    }
    function logout() 
    {
        setIsAuth(false)
        localStorage.setItem("loginStatus", false)
        const keys = Object.keys(localStorage);
        keys.map((key)=>{
            localStorage.removeItem(`${key}`)
        })
    }
    return [isAuth, login, logout]
}


