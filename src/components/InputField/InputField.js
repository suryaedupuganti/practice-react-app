import React from "react";

const InputField = ({label,type,placeHolder,name}) => {
  return (
    <>
      <label for="username">{label}</label>
      <input
        type={type}
        class="form-control"
        id={name}
        placeholder={placeHolder}
        name={name}
      />
    </>
  );
};

export default InputField;
