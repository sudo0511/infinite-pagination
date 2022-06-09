import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

function View({ data }) {
  const [expand, setExpand] = useState(false);
  console.log(data);

  if (Array.isArray(data)) {
    return (
      <div style={{ paddingLeft: 15 }} onClick={() => setExpand(!expand)}>
        {data?.map((ele) => {
          if (ele.team) {
            return (
              <div key={ele.id}>
                <Link to={`/employee/${ele?.id}`}>
                  <span style={{ color: "red" }}>
                    {ele.name} <strong>({ele.designation})</strong>
                  </span>
                </Link>
                <View key={ele.id} data={ele.team} />
              </div>
            );
          } else {
            return <View key={ele.id} data={ele} />;
          }
        })}
      </div>
    );
  } else
    return (
      <Link to={`/employee/${data?.id}`}>
        <span style={{ color: "blue" }}>
          {data?.name} <strong>({data?.designation})</strong>
          <br />
        </span>
      </Link>
    );
}

export default View;
