import React, { useEffect, useState, createContext, useReducer } from "react";
import AppReducer from "../features/AppReducer";

const CompanyContext = createContext();

export const CompanyProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      // console.log(res);
      setData(res);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const request = await fetch("./data.json");
    const response = await request.json();
    return response;
  };

  const [state, dispatch] = useReducer(AppReducer, data?.company?.team);

  const addEmployee = (payload) => {
    dispatch({ type: "ADD_EMPLOYEE", payload });
  };

  return (
    <CompanyContext.Provider value={{ data: data?.company, addEmployee }}>
      {props.children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
