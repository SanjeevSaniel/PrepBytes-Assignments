import React, { useState } from "react";
import axios from "axios";

import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  let [errors, setErrors] = useState({});

  // const [id, setId] = useState();

  const validate = () => {
    const errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required.";
    }

    if (email.trim() === "") {
      errors.email = "Email ID is required.";
    }

    if (mobileNumber.trim() === "") {
      errors.mobileNumber = "Mobile Number is required.";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // const onChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(errors);

    errors === null ? setErrors({}) : setErrors(errors);
    console.log("Errors", errors);
    if (errors) {
      return;
    } else {
      const user = { name, email, mobileNumber };
      axios.post("http://localhost:5000/register", user).then((response) => {
        console.log(response.data);
      });
      console.log("Submitted");
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-group form-style">
          <label htmlFor="name">Name *</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
              errors.name = "";
            }}
            name="name"
            id="name"
            type="text"
            className={
              errors.name ? "form-control alert-input" : "form-control"
            }
            error={errors.name}
            // required={true}
          />
          {errors.name && <div className="alert-style">{errors.name}</div>}
        </div>

        <div className="form-group form-style">
          <label htmlFor="email">Email *</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              errors.email = "";
            }}
            id="email"
            name="email"
            type="text"
            className={
              errors.email ? "form-control alert-input" : "form-control"
            }
            // className="form-control"
            // required={true}
          />
          {errors.email && <div className="alert-style">{errors.email}</div>}
        </div>

        <div className="form-group form-style">
          <label htmlFor="phone">Mobile Number *</label>
          <input
            onChange={(e) => {
              setMobileNumber(e.target.value);
              errors.mobileNumber = "";
            }}
            id="phone"
            name="phone"
            type="tel"
            className={
              errors.mobileNumber ? "form-control alert-input" : "form-control"
            }
            // required={true}
          />
          {errors.mobileNumber && (
            <div className="alert-style">{errors.mobileNumber}</div>
          )}
        </div>
        <button className="btn-submit" type="submit">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Register;
