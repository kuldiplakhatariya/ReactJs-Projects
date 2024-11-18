import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Admin_Login() {
    const redirect = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("Adminid")){
            redirect("/Dashboard")
        }
    })
    const [formdata,setformdata] = useState({
        email:"",
        password:""
    })
    const getchange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
        console.log(formdata)
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const {email,password} = formdata
        // To check blank data
        if(!email.trim("") || !password.trim("") ){
            toast.error("Please Enter E-Mail And Passward to login")
            return
        }
        try {
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            if(res.data.length === 0){
                toast.error("Email does not exits ! ")
                return
            }
            const admin = res.data[0]
            if(admin.password !== password){
                toast.error("In correct passward !")
                return
            }
            localStorage.setItem("Adminid",admin.id)
            localStorage.setItem("Adminname",admin.name)
            toast.success("Sussfully Login")
            redirect("/Dashboard")

        } catch (error) {
            toast.error("Invalid inputs !...")
            
        }
    }
  return (
      <div>
          <section className="vh-100">
              <div className="container py-5 h-100">
                <div className="container form-control form-control-lg center justify-content-center">Admin Login</div>
                  <div className="row d-flex align-items-center justify-content-center h-100">
                      <div className="col-md-8 col-lg-7 col-xl-6">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                      </div>
                      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                          <form onSubmit={handlesubmit}>
                              {/* Email input */}
                              <div data-mdb-input-init className="form-outline mb-4">
                                  <input type="email" name='email' value={formdata.email} onChange={getchange} id="form1Example13" className="form-control form-control-lg" />
                                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                              </div>
                              {/* Password input */}
                              <div data-mdb-input-init className="form-outline mb-4">
                                  <input type="password" name='password' value={formdata.password} onChange={getchange} id="form1Example23" className="form-control form-control-lg" />
                                  <label className="form-label" htmlFor="form1Example23">Password</label>
                              </div>
                              <div className="d-flex justify-content-around align-items-center mb-4">
                                  {/* Checkbox */}
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" defaultValue id="form1Example3"  />
                                      <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                  </div>
                                  <a href="#!">Forgot password?</a>
                              </div>
                              {/* Submit button */}
                              <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" >Sign in</button>
                          
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </div>

  )
}
export default Admin_Login
