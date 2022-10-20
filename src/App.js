import { useEffect, useState } from "react";
import "./index.css";
import ISP from "./InfiniteScrollPagination/ISP";
import NormalPagination from "./NormalPagination/NormalPagination";

function App() {
  return (
    <>
      {/* <NormalPagination /> */}
      <ISP />
    </>
  );
}

export default App;
