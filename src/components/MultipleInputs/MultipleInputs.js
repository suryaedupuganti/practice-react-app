import React from "react";

const MultipleInputs = ({ label, placeholder1,placeholder2,text }) => {
  return (
    <div class="input-group">
      <div class="input-group-prepend">
        <label class="input-group-text" id="">
          {label}
        </label>
      </div>
      <input type={text} class="form-control" placeholder={placeholder1}/>
      <input type={text} class="form-control" placeholder={placeholder2}/> 
    </div>
  );
};
export default MultipleInputs;
