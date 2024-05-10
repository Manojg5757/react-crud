import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Read = () => {

  const {id} = useParams()

  const [data,setdata] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+ id)
    .then(res=>{
      setdata(res.data)
    })
  },[])
  return (
    <div className='w-100 vh-100 d-flex flex-column  justify-content-center align-items-center'>
        <div className='w-50 shadow p-4'>
        {
          data? <>
          <h1>Name:{data.name}</h1>
        <h1>Email:{data.email}</h1>
        <h1>Phone:{data.mobile}</h1>
          </> : <div>Loading</div>
        }
        <Link to='/' className='btn btn-primary' >Back</Link>
        </div>
    </div>
  )
}

export default Read