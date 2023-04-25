import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle inpues
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  // form function
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="card p-2" onSubmit={handleSubmit}>
          <img
            src="/assets/images/logo/logo.png"
            alt="logo"
            height={150}
            width={400}
          />
          <div className="mb-1 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 ">
            <label htmlFor="name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <p>
              Already Register <Link to="/login">Login</Link>{" "}
            </p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
