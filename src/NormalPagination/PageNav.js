import React from "react";

const PageNav = ({ pageNumber, handlePrev, handleNext }) => {
  return (
    <div className="page-nav-container">
      <button
        onClick={() => handlePrev()}
        disabled={pageNumber === 1 ? true : false}
      >
        Prev
      </button>
      <button> {pageNumber} </button>
      {/* <button> 2 </button> */}
      <button
        onClick={() => handleNext()}
        disabled={pageNumber === 10 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
