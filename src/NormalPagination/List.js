import React from "react";

const List = ({ quote, author }) => {
  return (
    <div className="list-container">
      <h4>
        Author Name : <i>{author}</i>
      </h4>
      <p>
        <b>Quote : </b>"{quote}"
      </p>
    </div>
  );
};

export default List;
