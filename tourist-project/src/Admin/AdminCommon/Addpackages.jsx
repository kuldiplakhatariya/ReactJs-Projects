import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Admin_header from './Admin_header'
import axios from 'axios'

function Addpackages() {
    const redirect = useNavigate()

    const [data,setdata] = useState({
        id:"",
        coutry:"",
        days:"",
        person:"",
        price:"",
        desc:"",
        url:""
    })
   const getchange=(e)=>{
    setdata({
        ...data,
        id:new Date().getTime().toString(),
        [e.target.name]: e.target.value
    })
   }
// add data to packages
const handlesubmit=async(e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:3000/packges",data)
    //console.log(res.data)
    setdata({
        id:"",
        coutry:"",
        days:"",
        person:"",
        price:"",
        desc:"",
        url:""
    })
    redirect("/Viewpackages")
}
  return (
    <div>
        <Admin_header heading={"Add New Packages"}/>

          <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" >
              <div className="container">
                  <div className="booking p-5">
                      <div className="row g-5 align-items-center">

                          <div className="col-md-12">
                              <h1 className="text-white mb-4" align-items-center>Add New Package</h1>
                              <form onSubmit={handlesubmit}>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="text" value={data.coutry} onChange={getchange} name='coutry' className="form-control bg-transparent" id="name" placeholder="Country Name" />
                                              <label htmlFor="name">Country Name</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                      <div className="form-floating">
                                              <select className="form-select bg-transparent"  onChange={getchange} name='days' value={data.days}>
                                                  <option value={1}>1 day</option>
                                                  <option value={2}>3 Days</option>
                                                  <option value={3}>5 Days</option>
                                                  <option value={7}>7 Days</option>
                                                  <option value={9}>9 Days</option>
                                              </select>
                                              <label >Select Days</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                      <div className="form-floating">
                                              <input type="text" className="form-control bg-transparent" id="name" placeholder="Enter Price" onChange={getchange} value={data.price} name='price'/>
                                              <label htmlFor="name">Price</label>
                                          </div>
                                          </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <select className="form-select bg-transparent" onChange={getchange} value={data.person} name='person'>
                                             
                                                  <option value={2}>1 Person</option>
                                                  <option value={5}>5 Person</option>
                                                  <option value={7}>7 Person</option>
                                                  <option value={9}>9 Person</option>
                                              </select>
                                              <label >Person</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 60 }} defaultValue={""} onChange={getchange} value={data.url} name='url'/>
                                              <label htmlFor="message">Enter Img URL</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control bg-transparent" placeholder="Package Description" id="message" style={{ height: 100 }} defaultValue={""} onChange={getchange} value={data.desc} name='desc'/>
                                              <label htmlFor="message">Package Description</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn btn-outline-light w-100 py-3" type="submit" >Add Package</button>
                                      </div>
                                      
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Addpackages
