import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Admin_header from './Admin_header'

function Packageview() {

    // array
    const [packages, setpacksage] = useState([])

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/packges")
        console.log(res.data)
        setpacksage(res.data)
    }

    const handledelete=async(id)=>{
        
        const res = await axios.delete(`http://localhost:3000/packges/${id}`)
        console.log(res.data)
        Fetchdata()
    }

    const [packedit,setpackedit] = useState(null)
    const [packediting,setpackediting] = useState({
        id: "",
        coutry: "",
        days: "",
        person: "",
        price: "",
        desc: "",
        url: ""
    })

    // model
    const saveedite=(pack)=>{
        setpackedit(pack)
        setpackediting(pack)
    }

    const headleupdate=async(e)=>{
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/packges/${packediting.id}`,packediting)
        console.log(res.data)
        Fetchdata()
        setpackedit(null)
    }

    return (
        <div>
            <Admin_header heading="view package" />
            <div className="container my-5">
                <h1>View Package</h1>
                <table class="table table-dark table-hover mb-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">coutry</th>
                            <th scope="col">days</th>
                            <th scope="col">person</th>
                            <th scope="col">price</th>
                            <th>Acation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages && packages.map((pack) => {
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{pack.id}</th>
                                        <td>{pack.coutry}</td>
                                        <td>{pack.days}</td>
                                        <td>{pack.person}</td>
                                        <td>{pack.price}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2' onClick={()=>saveedite(pack)}>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>handledelete(pack.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    packedit && (
                        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="booking p-5">
                                <div className="row g-5 align-items-center">
        
                                    <div className="col-md-12">
                                        <h1 className="text-white mb-4">Update packages</h1>
                                        <form >
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" name='coutry' value={packediting.coutry} onChange={(e)=>setpackediting({...packediting,coutry:e.target.value})} className="form-control bg-transparent" id="name" placeholder="Country Name" />
                                                        <label htmlFor="name">courty name</label>
                                                    </div>
                                                </div>
        
                                                <div className="col-md-6">
                                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                                        <input type="tel" name='price' value={packediting.price}  onChange={(e)=>setpackediting({...packediting,price:e.target.value})} className="form-control bg-transparent " id="datetime" placeholder="Enter your Price" />
                                                        <label htmlFor="datetime">Price</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-floating">
                                                        <input type="url"  name='url' value={packediting.url} onChange={(e)=>setpackediting({...packediting,url:e.target.value})} className="form-control bg-transparent" id="email" placeholder="Enter iamge" />
                                                        <label htmlFor="email">Enter iamge</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <select className="form-select bg-transparent" value={packediting.days} onChange={(e)=>setpackediting({...packediting,days:e.target.value})}  name='days' id="select1">
                                                            <option value={3}>3</option>
                                                            <option value={5}>5</option>
                                                            <option value={7}>7</option>
                                                            <option value={9}>9</option>
                                                        </select>
                                                        <label htmlFor="select1">Days</label>
                                                    </div>
                                                </div>
        
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <select className="form-select bg-transparent" value={packediting.person} onChange={(e)=>setpackediting({...packediting,person:e.target.value})}  name='person' id="select2">
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
        
                                                        </select>
                                                        <label htmlFor="select2">person</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control bg-transparent" value={packediting.desc}  name='desc' onChange={(e)=>setpackediting({...packediting,desc:e.target.value})}  placeholder="Package desc" id="message" style={{ height: 100 }} defaultValue={""} />
                                                        <label htmlFor="message">package  description</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                        <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={headleupdate}>Update</button>
                                                        </div>
                                                        <div className="col-md-6">
                                                        <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={()=>setpackedit(null)}>cancel</button>
                                                        </div>
                                                    </div>
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
        </div>
    )
}

export default Packageview
