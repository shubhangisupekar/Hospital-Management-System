import React from "react";
import "./App.css";
import {Navbar,Nav,Container} from 'react-bootstrap';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import {Admin} from './Components/Admin';
import {Doctor} from './Components/Doctor';
import {Patient} from './Components/Patient';
import {Appointment} from './Components/Appointment';
import {Home} from './Components/Home';
import {Adsignup} from './Components/adsignup';
import{PatientSignUp}from'./Components/PatientSignUp';
import {PatientDashboard} from './Components/PatientDashboard';
import {DoctorDashboard} from './Components/DoctorDashboard';
import {AdminDashboard} from './Components/AdminDashboard';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
function App() {
  return (
    <BrowserRouter>
    <div>
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Life Care Hospital</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
      <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
      <Nav.Link as={Link} to="/patient">Patient</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/appointment">Book Appointment</Nav.Link>
      <Nav.Link as={Link} to="/AdminDashboard">AdminDashboard</Nav.Link>
      <Nav.Link as={Link} to="/PatientDashboard">PatientDashboard</Nav.Link>
      <Nav.Link as={Link} to="/DoctorDashboard">DoctorDashboard</Nav.Link> 
        
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      {/* <Nav.Link as={Link} to="/adsignup">Contact Us</Nav.Link> */}
      </Nav>
    </Container>
  </Navbar>

  </>
  <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        
        <Route path="/adsignup" element={<Adsignup/>} />
        <Route path="/patientsignup" element={<PatientSignUp/>} />
        <Route path="/PatientDashboard" element={<PatientDashboard/>} />
        {<Route path="/DoctorDashboard" element={<DoctorDashboard/>} />  }
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/adsignup" element={<adsignup/>}/> */}
      
        </Routes>
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

