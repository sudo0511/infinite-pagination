import React, { useEffect, useState, createContext } from "react";

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

  // console.log(data);

  return (
    <CompanyContext.Provider value={{ data }}>
      {props.children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
