import React, { useState, useContext } from "react";
import CompanyContext from "../context/CompanyContext";

const AddEmployee = () => {
  const { data, addEmployee } = useContext(CompanyContext);

  // console.log(data, addEmployee);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, id, designation, email, phoneNumber, category);
    const newEmployee = {
      name,
      id,
      designation,
      email,
      phoneNumber,
    };
    addEmployee(newEmployee);
    setName("");
    setId("");
    setDesignation("");
    setEmail("");
    setPhoneNumber("");
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
        <label htmlFor="category">Team Category : </label>
        <select
          value={category}
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option></option>
          <option value="HR/Head of Staff">HR/Head of Staff</option>
          <option value="Head Engineering">Head Engineering</option>
        </select>
        {category === "HR/Head of Staff"}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;

const teamSelector = (
  <>
    <label>Select Team Number : </label>
    <select>
      <option></option>
      <option></option>
    </select>
  </>
);
