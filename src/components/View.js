import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

function View({ data }) {
  const [expand, setExpand] = useState(false);
  // console.log(data);

  return (
    <div className="view-container">
      {data?.map((ele) => {
        return (
          <>
            {Array.isArray(ele) ? (
              <div key={ele.id}>
                {ele.map((e) => (
                  <Link to={`/employee/${e.id}`}>
                    <span key={e.id}>
                      {e.name} ({e?.designation})
                      <br />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div key={ele.id}>
                <div className="view-item">
                  <Link to={`/employee/${ele.id}`}>
                    <h4>
                      {ele?.name} ({ele?.designation})
                    </h4>
                  </Link>
                  <button onClick={() => setExpand(!expand)}>
                    {!expand ? "➕" : "➖"}
                  </button>
                </div>

                <div
                  style={{
                    display: expand ? "block" : "none",
                    paddingLeft: 15,
                  }}
                >
                  {ele.team && <View data={ele.team} />}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );

  // if (Array.isArray(data)) {
  //   return (
  //     <div style={{ paddingLeft: 15 }} onClick={() => setExpand(!expand)}>
  //       {data?.map((ele) => {
  //         if (ele.team) {
  //           return (
  //             <div key={ele.id}>
  //               <Link to={`/employee/${ele?.id}`}>
  //                 <span style={{ color: "red" }}>
  //                   {ele.name} <strong>({ele.designation})</strong>
  //                 </span>
  //               </Link>
  //               <View key={ele.id} data={ele.team} />
  //             </div>
  //           );
  //         } else {
  //           return <View key={ele.id} data={ele} />;
  //         }
  //       })}
  //     </div>
  //   );
  // } else
  //   return (
  //     <Link to={`/employee/${data?.id}`}>
  //       <span style={{ color: "blue" }}>
  //         {data?.name} <strong>({data?.designation})</strong>
  //         <br />
  //       </span>
  //     </Link>
  //   );
}

export default View;
