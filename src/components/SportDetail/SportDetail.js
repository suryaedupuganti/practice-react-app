import React from "react";
import LabelText from "./../LabelText/LabelText";

const SportDetail = ({ header, label1, label2, text1, text2 }) => {
  return (
    <div className="w-100">
      <div className="mx-auto w-100">
        <h3>{header}</h3>
      </div>
      <div className="w-100 p-3">
        <LabelText label={label1} text={text1} />
        <LabelText label={label2} text={text2} />
      </div>
    </div>
  );
};
export default SportDetail;
