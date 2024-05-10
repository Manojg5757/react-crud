import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  });

  const handleDelete = (id)=>{
        axios.delete("http://localhost:3000/user/"+id)
        .then((res)=>{
            location.reload()
        })
        .catch(err=>console.log(err))
  }
  return (
    <div className="d-flex vh-100 flex-column align-items-center">
      <h1>List Of Users</h1>
      <Link to='/create' className="btn btn-primary">Add +</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td className=" d-flex gap-4">
                    <Link to={`/read/${item.id}`} className="btn btn-sm btn-info">Read</Link>
                    <Link to={`/edit/${item.id}`} className="btn btn-sm btn-primary">Edit</Link>
                    <button className="btn btn-sm btn-danger" onClick={(e)=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>Loading Still</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
