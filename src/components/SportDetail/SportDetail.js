import React from "react";

const SportDetail = ({header,text}) => {
  return (
    <div>
      <h3>{header}</h3>
      <div>
        <label>{text}</label>
        <label>{text}</label>
      </div>
    </div>
  );
};
export default SportDetail;
