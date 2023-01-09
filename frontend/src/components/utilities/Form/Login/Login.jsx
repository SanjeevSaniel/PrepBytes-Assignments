import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    mobileNumber: "",
  });

  let [errors, setErrors] = useState({});
  //   const [submit, setSubmit] = useState(false);

  const schema = {
    email: Joi.string().email().required().label("Email"),
    mobileNumber: Joi.string()
      .min(10)
      .max(10)
      .required()
      .label("Mobile Number"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(loginUser, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    const Errors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) Errors[input.name] = errorMessage;
    else delete Errors[input.name];

    const User = { ...loginUser };
    User[input.name] = input.value;

    setLoginUser(User);
    setErrors(Errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(errors);

    errors === null ? setErrors({}) : setErrors(errors);
    console.log("Errors", errors);
    if (errors) return;
    else {
      doSubmit();
    }
  };

  const doSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/login", loginUser)
        .then((response) => {
          console.log(response.data);
        });
      //   setSubmit(true);
      console.log("Submitted");
    } catch (er) {
      if (er.response && er.response.status === 400) {
        const Errors = { ...errors };
        Errors.email = er.response.data;
        setErrors(Errors);
      }
    }
  };
  return (
    <form method="POST" onSubmit={handleSubmit} className="login-form">
      <div className="form-group form-style">
        <label htmlFor="email">Email *</label>
        <input
          onChange={handleChange}
          id="email"
          value={loginUser.email}
          name="email"
          type="text"
          className={errors.email ? "form-control alert-input" : "form-control"}
        />
        {errors.email && <div className="alert-style">{errors.email}</div>}
      </div>

      <div className="form-group form-style">
        <label htmlFor="phone">Mobile Number *</label>
        <input
          onChange={handleChange}
          id="phone"
          name="mobileNumber"
          value={loginUser.mobileNumber}
          type="tel"
          className={
            errors.mobileNumber ? "form-control alert-input" : "form-control"
          }
        />
        {errors.mobileNumber && (
          <div className="alert-style">{errors.mobileNumber}</div>
        )}
      </div>
      <button
        disabled={validate()}
        className={validate() ? "btn-submit" : "btn-submit active"}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
