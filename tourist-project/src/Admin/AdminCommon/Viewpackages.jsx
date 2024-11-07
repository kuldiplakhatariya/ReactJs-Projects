import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Admin_header from './Admin_header'

function Viewpackages() {
    const [pack,setpack] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/packges")
        setpack(res.data)
    }
   const delethandle=async(id)=>{
    const res = await axios.delete(`http://localhost:3000/packges/${id}`)
    // setpack(res.data)
    console.log(res.data)
    fetchdata()
   }

   const [packedit,setpackedit] = useState(null)
   const [packupdate,setpackupdate]=useState({
        id:"",
        coutry:"",
        days:"",
        person:"",
        price:"",
        desc:"",
        url:""
   })
   // Model ...
  const saveedit=(pack)=>{
    setpackedit(pack)
    setpackupdate(pack)
  }
  const getchange=(e)=>{
    setpackupdate({
        ...packupdate,
        [e.target.name]:e.target.value
    })
    console.log(packupdate)
  }
  const handleupdate=async(e)=>{
    e.preventDefault()
    // const res =await axios.put(`http://localhost:3000/packges/${packupdate.id}`,packupdate)
    const res = await axios.put(`http://localhost:3000/packges/${packupdate.id}`,packupdate)
    console.log(res.data)
    fetchdata()
    setpackedit(null)
}
  return (
    <div>
        <Admin_header heading="View Packages"/>
          <table className="table">
              <thead>
                  <tr className='text-center'>
                      <th scope="col">ID</th>
                      <th scope="col">Country</th>
                      <th scope="col">Days</th>
                      <th scope="col">Person</th>
                      <th scope="col">Price</th>
                      <th scope="col">image</th>
                      <th>Acation</th>
                  </tr>
              </thead>
              <tbody>
                 {
                   pack && pack.map((pack)=>{
                    return(
                        <tr className='text-center' key={pack.id}>
                        <th scope="row">{pack.id}</th>
                        <td>{pack.coutry}</td>
                        <td>{pack.days}</td>
                        <td>{pack.person}</td>
                        <td>{pack.price}</td>
                        <img className="img-fluid" src={pack.url} style={{height:"90px", width:"60%"}} alt=''/>
                        <td>
                        <button className='btn btn-primary'>View</button>
                        <button className='btn btn-success mx-2' onClick={()=>saveedit(pack)}>Edit</button>
                        <button className='btn btn-danger'onClick={()=>delethandle(pack.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                   })
                 }
              
              </tbody>
          </table>
         {
            packedit &&(
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" >
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
  
                            <div className="col-md-12">
                                <h1 className="text-white mb-4" align-items-center>Update Package</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" onChange={getchange} value={packupdate.coutry} name='coutry' className="form-control bg-transparent" id="name" placeholder="Country Name" />
                                                <label htmlFor="name">Country Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-floating">
                                                <select className="form-select bg-transparent" onChange={getchange} value={packupdate.days} name='days'>
                                                    <option value={1}>1 day</option>
                                                    <option value={3}>3 Days</option>
                                                    <option value={5}>5 Days</option>
                                                    <option value={7}>7 Days</option>
                                                    <option value={9}>9 Days</option>
                                                </select>
                                                <label  >Select Days</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Enter Price" onChange={getchange} value={packupdate.price} name='price'/>
                                                <label htmlFor="name">Price</label>
                                            </div>
                                            </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" onChange={getchange} value={packupdate.person} name='person' >
                                               
                                                    <option value={1}>1 Person</option>
                                                    <option value={3}>3 Person</option>
                                                    <option value={5}>5 Person</option>
                                                    <option value={7}>7 Person</option>
                                                    <option value={9}>9 Person</option>
                                                </select>
                                                <label>Person</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 60 }} defaultValue={""} onChange={getchange} value={packupdate.url} name='url'/>
                                                <label htmlFor="message">Enter Img URL</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Package Description" id="message" style={{ height: 100 }} defaultValue={""} onChange={getchange} value={packupdate.desc} name='desc'/>
                                                <label htmlFor="message">Package Description</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={handleupdate}>Update Package</button>

                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={()=>setpackedit(null)}>Cancel</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
         }
    </div>
  )
}
export default Viewpackages
