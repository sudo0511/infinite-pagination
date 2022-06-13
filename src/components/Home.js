import { logDOM } from "@testing-library/react";
import React, { useContext, useState } from "react";
import CompanyContext from "../context/CompanyContext";
import AddEmployee from "./AddEmployee";
import View from "./View";

function Home() {
  const [toggle, setToggle] = useState(true);
  const { data } = useContext(CompanyContext);

  console.log(data);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="header-container">
        <h3>{data?.name}</h3>
        <button onClick={handleToggle}>
          {toggle ? "Add Employee" : "Cancel"}
        </button>
      </div>
      <hr style={{ marginBottom: 18 }} />
      {toggle ? <View data={data?.team} /> : <AddEmployee />}
    </>
  );
}

export default Home;
