import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 w-100 flex-column  justify-content-center align-items-center bg-white">
      <div className="w-50 shadow  rounded p-4">
        <h1>Create a New User</h1>

        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
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
  );
};

export default Create;
