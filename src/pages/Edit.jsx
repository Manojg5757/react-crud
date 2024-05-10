import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const {id} = useParams()
  const navigate=useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id)
    .then(res=>{
      setValues(res.data)
    })
  },[])


  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put("http://localhost:3000/user/"+id,values)
    .then((res)=>{
      navigate('/')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="d-flex vh-100 w-100 flex-column  justify-content-center align-items-center bg-white">
    <div className="w-50 shadow  rounded p-4">
      <h1>Edit</h1>

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control"
            value={values.name}
            id="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="form-control"
            id="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="mobile">Name:</label>
          <input
            type="number"
            name="mobile"
            placeholder="mobile"
            className="form-control"
            id="mobile"
            value={values.mobile}
            onChange={(e) => setValues({ ...values, mobile: e.target.value })}
          />
        </div>
        <div className="mt-2 d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button className="btn btn-success">Back</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Edit