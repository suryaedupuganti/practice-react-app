import React from "react";

const LabelText = ({ label, text }) => {
  return (
    <div className="d-flex flex-row justify-content-between">
      <label>{label}</label>
      <span>{text}</span>
    </div>
  );
};
export default LabelText;
