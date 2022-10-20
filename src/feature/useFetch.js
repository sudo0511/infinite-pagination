import React, { useEffect, useState } from "react";

const useFetch = (pageNum = 1) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");
    const controller = new AbortController();
    // console.log(controller);
    const { signal } = controller;
    fetchData(pageNum, { signal })
      .then((data) => {
        setData((prev) => [...prev, ...data.quotes]);
        // console.log(data, Boolean(data.quotes.length));
        setHasNextPage(Boolean(data.quotes.length));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [pageNum]);

  const fetchData = async (pageNum = 1, options = {}) => {
    const skip = pageNum === 1 ? 0 : (pageNum - 1) * 10;
    const request = await fetch(
      `https://dummyjson.com/quotes?limit=10&skip=${skip}`,
      options
    );
    const response = await request.json();
    return response;
  };

  return { data, isLoading, error, hasNextPage };
};

export default useFetch;
