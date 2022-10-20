import React, { useCallback, useRef, useState } from "react";
import useFetch from "../feature/useFetch";
import ListISP from "./ListISP";

const ISP = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, hasNextPage } = useFetch(page);
  const intObserver = useRef();

  const lastQuoteRef = useCallback(
    (quote) => {
      console.log(intObserver);
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((quotes) => {
        if (quotes[0].isIntersecting && hasNextPage) {
          console.log(quotes, "We are near last quote");
          setPage((prev) => prev + 1);
        }
      });

      if (quote) {
        intObserver.current.observe(quote);
      }
    },
    [isLoading, hasNextPage]
  );

  const content = data.map((ele, index) => {
    if (data.length === index + 1) {
      console.log("Last element of list");
      return (
        <ListISP
          key={ele.id}
          quote={ele.quote}
          author={ele.author}
          ref={lastQuoteRef}
        />
      );
    }
    return <ListISP key={ele.id} quote={ele.quote} author={ele.author} />;
  });
  return (
    <div>
      <h2>React Infinite Pagination</h2>
      {content}
      {isLoading && <div className="loading-div">Loading........</div>}
    </div>
  );
};

export default ISP;
