import { useEffect, useState } from "react";
import List from "./List";
import PageNav from "./PageNav";
import useFetch from "../feature/useFetch";

function NormalPagination() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetch(page);

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h2>React Pagination</h2>
      <PageNav pageNumber={page} handlePrev={prevPage} handleNext={nextPage} />
      {isLoading ? (
        <div className="loading-div">Loading........</div>
      ) : (
        data?.quotes.map((ele) => (
          <List key={ele.id} quote={ele.quote} author={ele.author} />
        ))
      )}
    </div>
  );
}

export default NormalPagination;
