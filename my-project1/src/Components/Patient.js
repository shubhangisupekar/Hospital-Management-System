import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import reactDom from 'react-dom';


export const Patient = () =>{
   return (
  
      <body>

       <br/><br/><br/><br/><br/><br/><br/><br/><br/>  

      <div class="loginform">
          
          <div class="avatar">
          <img src="./images/images.jpg" alt="Avatar"/>
          </div>
          <h2>Patient Login</h2>
          
          <form action="">
              <p>Username</p>
              <input type="text" name="username" placeholder="Enter Username"/>
              <p>Password</p>
              <input type="password" name="password" placeholder="Enter Password"/>
             < input type="submit" name="login-btn" value="Login" />
               
              <a href="#">Forgot your password?</a>
              <a href="/PatientSignUp" class="have-not">Dont have an account?</a>
          </form>        
      </div>
  </body>

   )

}

export default Patient;