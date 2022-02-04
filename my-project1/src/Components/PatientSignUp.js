import React from "react";
// import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
// import reactDom from 'react-dom';
// import Admin from "./Admin";
import { getresiteruser } from "./Api";

// import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
// import reactDom from 'react-dom';
// import Admin from "./Admin";
 const test= (e)=>{
    //  e.PreventDefault()
     const data={
        "firstname":"shubhangi",
        "lastname":"supekar",
        "password":"Shub8@",
        "confirmPassword":" Shub8@"
    }
    console.log("fdghj")
getresiteruser()
}  

export const PatientSignUp = () =>{
    return (
    <>
    {/* <br/> <br/> <br/> <br/>
    <h1> Admin Signup </h1>
    <h1> Admin Signup </h1>
    <h1> Admin Signup </h1>
    <h1> Admin Signup </h1> */}
    
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form method="post" class="mt-5 border p-4 bg-light shadow" >
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>First Name<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter First Name"/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Last Name<span class="text-danger">*</span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Enter Last Name"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div class="col-md-12">
                            <input type={'button'} className="btn btn-primary float-end" value={'Signup'} onClick={(e)=>{test(e)}} />
                           {/* <button id="btn" class="btn btn-primary float-end" >Signup Now</button> */}
                           
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you have account, Please <a href="/patient">Login Now</a></p>
                
            </div>
        </div>
    </div>
</div>
    </>
    
        )
}


export default PatientSignUp;