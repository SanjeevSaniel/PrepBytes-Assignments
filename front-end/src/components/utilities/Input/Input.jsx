import React from "react";

const Input = () => {
  return (
    <div className="form-group form-style">
      <label htmlFor="name">Name *</label>
      <input
        // onChange={(e) => setName(e.target.value)}
        name="name"
        id="name"
        type="text"
        className="form-control"
        // required={true}
      />
      <div className="alert alert-danger"></div>
    </div>
  );
};

export default Input;
