import React from "react";
import "./PropsDemo.css";

const PropsDemo = ({ number,text1,text2 }) => {
  return (
    <div className="container w-50">
      <div className="row">
        <div className="col-6">
        <div class="circle">
<div class="circle__inner">
<div class="circle__wrapper">
<div class="circle__content">{number}</div>
</div>
</div>
</div>
        </div>

        <div className="col-6">
          <div className="row h-50 pt-5">
            <h3>{text1}</h3>
          </div>
          <div className="row h-50">
            <p>
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropsDemo;
