import React from "react";

const LabelText = ({label,text}) => {
  return (
    <div>
    <label>{label}</label>
<span>{text}</span>
    </div>
  );
};
export default LabelText;
