import React, { useEffect, useState } from 'react'
import Footer from '../Website/Common/Footer'
import Header from '../Website/Common/Header'
import axios from 'axios'

function Packages() {
    const [pack,setpack] =useState([])
    useEffect(()=>{
        getdata()
    },[])

    const getdata = async()=>{
        const res = await axios.get("http://localhost:3000/packges")
        setpack(res.data)
    }
  return (
    <div>
        <Header heading="Our Packages"/>
       {/* Package Start */}
       <div className="container-xxl py-5">
                  <div className="container">
                      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                          <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                          <h1 className="mb-5">Awesome Packages</h1>
                      </div>
                     
                      <div className="row g-4 justify-content-center">
                        { 
                         pack && pack.map((pack)=>{
                            return (
                           
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                              <div className="package-item">
                                  <div className="overflow-hidden">
                                      <img className="img-fluid" src={pack.url} style={{height:"300px", width:"100%"}} alt=''/>
                                  </div>
                                  <div className="d-flex border-bottom">
                                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />{pack.coutry}</small>
                                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{pack.days} days</small>
                                      <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />{pack.person} Person</small>
                                  </div>
                                  <div className="text-center p-4">
                                      <h3 className="mb-0">${pack.price}</h3>
                                      <div className="mb-3">
                                          <small className="fa fa-star text-primary" />
                                          <small className="fa fa-star text-primary" />
                                          <small className="fa fa-star text-primary" />
                                          <small className="fa fa-star text-primary" />
                                          <small className="fa fa-star text-primary" />
                                      </div>
                                      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                      <div className="d-flex justify-content-center mb-2">
                                          <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                          <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                           )
                         })
                          
                          } 
                      </div>

                  </div>
              </div>
              {/* Package End */}
              <Footer/>
    </div>
  )
}

export default Packages
