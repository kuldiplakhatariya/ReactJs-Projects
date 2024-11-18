// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Packages from "./Pages/Packages";
import Destination from "./Pages/Destination";
import Booking from "./Pages/Booking";
import Travel_Guide from "./Pages/Travel_Guide";
import Testimonial from "./Pages/Testimonial";
import Page_404_notfound from "./Pages/Page_404_notfound";
import Contact from "./Pages/Contact";
import Dashboard from "./Admin/AdminCommon/AdminCommon/Dashboard";
import Viewpackages from "./Admin/AdminCommon/Viewpackages";
import Addpackages from "./Admin/AdminCommon/Addpackages";
import Admin_Login from "./Admin/AdminCommon/Admin_Login";
// import Packageview from "./Admin/AdminCommon/Packageview";

function App() {
  
  return (
    <div>
     <BrowserRouter>
       {/* website user */}
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>} />
        <Route path="/Packages" element={<Packages/>}/>
        <Route path="/Destination" element={<Destination/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/Travel_Guide" element={<Travel_Guide/>}/>
        <Route path="/Testimonial" element={<Testimonial/>}/>
        {/* <Route path="/Pagenotfound" element={<Page_404_notfound/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<Page_404_notfound />}/>

        {/* hide admin */}
        <Route path="/Admin_Login" element={<Admin_Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Viewpackages" element={<Viewpackages/>} />
        <Route path="/Addpackages" element={<Addpackages/> }/>
     </Routes>
    
     </BrowserRouter>
  {/* {For Universal} */}
 
  <ToastContainer/> 
    </div>
  );
}

export default App;
