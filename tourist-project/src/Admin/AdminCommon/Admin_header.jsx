import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_header({heading}) {
  return (
    <div>
         {/* Topbar Start */}
         <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                  <div className="row gx-0">
                      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                          <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                              <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                              <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                              <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                          </div>
                      </div>
                      <div className="col-lg-4 text-center text-lg-end">
                          <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Topbar End */}
              {/* Navbar & Hero Start */}
              <div className="container-fluid position-relative p-0">
                  <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                      <a href className="navbar-brand p-0">
                          <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
                          {/* <img src="img/logo.png" alt="Logo"> */}
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span className="fa fa-bars" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <div className="navbar-nav ms-auto py-0">
                              <NavLink className="nav-item nav-link" to="/Dashboard">Home</NavLink>
                              <NavLink className="nav-item nav-link" to="/About">About</NavLink>
                              <NavLink className="nav-item nav-link" to="/Services">Services</NavLink>
                              
                              

                              <div className="nav-item dropdown">
                                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Packages</NavLink>
                                  <div className="dropdown-menu m-0">
                                  <NavLink className="dropdown-item" to="/Viewpackages">Packages</NavLink>
                                  <NavLink className="dropdown-item" to="/Addpackages">Add New Package</NavLink>
                                  
                                  </div>
                              </div>
                               

                              <div className="nav-item dropdown">
                                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Deals</NavLink>
                                  <div className="dropdown-menu m-0">
                                  
                                      <NavLink className="dropdown-item" to="/Destination">Destination</NavLink>
                                      <NavLink className="dropdown-item" to="/Booking">Booking</NavLink>
                                      <NavLink className="dropdown-item" to="/Travel_Guide">Travel Guides</NavLink>
                                      <NavLink className="dropdown-item" to="/Testimonial">Testimonial</NavLink>
                                      <NavLink className="dropdown-item" to="/Pagenotfound"> 404 Page</NavLink>
                                  </div>
                              </div>
                              <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
                          </div>
                          <a href className="btn btn-primary rounded-pill py-2 px-4">Register</a>
                      </div>
                  </nav>
                  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                      <div className="container py-5">
                          <div className="row justify-content-center py-5">
                              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                  <h1 className="display-3 text-white mb-3 animated slideInDown">{heading}</h1>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Navbar & Hero End */}
    </div>
  )
}

export default Admin_header
