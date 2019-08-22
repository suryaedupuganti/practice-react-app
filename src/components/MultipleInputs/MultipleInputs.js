import React from "react";

const MultipleInputs = ({ label, placeholder1,placeholder2,placeholder3,type }) => 
{
  return (
    <div class="input-group">
      <div class="input-group-prepend">
        <label class="input-group-text" id="">
          {label}
        </label>
      </div>
      <input type={type} class="form-control" placeholder={placeholder1}/>
      <input type={type} class="form-control" placeholder={placeholder2}/> 
      <input type={type} class="form-control" placeholder={placeholder3}/> 
    </div>
      );
      };
      export default MultipleInputs;
    