import React, { useState } from "react";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add-employee-container">
      <form onSubmit={handleSubmit}>
        <label>Employee Name : </label>
        <input
          type="text"
          placeholder="Enter employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Employee ID : </label>
        <input
          type="text"
          placeholder="Enter employee id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label>Employee Designation : </label>
        <input
          type="text"
          placeholder="Enter employee designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <br />
        <label>Employee Email address : </label>
        <input
          type="email"
          placeholder="example@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Employee contact number : </label>
        <input
          type="tel"
          placeholder="123-456-7890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
