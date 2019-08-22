import React from "react";
import LabelText from './../LabelText/LabelText';

const SportDetail = ({header,text1,text2}) => {
  return (
    <div>
      <h3>{header}</h3>
      <div>
        <LabelText label="" text={text1} />
        <LabelText label="" text={text2} />
      </div>
    </div>
  );
};
export default SportDetail;
