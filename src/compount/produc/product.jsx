import React from "react";
export default function product(props) {
  return (
    <>
        <div className="col-md-4">
          <div className="icons-service text-center ">
            <div className="text-services py-4">
              <h5>{props.title}</h5>
              <span>{props.desc}</span>
            </div>
          </div>
        </div>
    </>
  );
}

