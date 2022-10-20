import React from "react";

const ListISP = React.forwardRef(({ quote, author }, ref) => {
  //   console.log(ref);
  const quoteBody = (
    <>
      <h4>
        Author Name : <i>{author}</i>
      </h4>
      <p>
        <b>Quote : </b>"{quote}"
      </p>
    </>
  );

  const content = ref ? (
    <div className="list-container" ref={ref}>
      {quoteBody}
    </div>
  ) : (
    <div className="list-container">{quoteBody}</div>
  );
  return <>{content}</>;
});

export default ListISP;
