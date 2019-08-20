import React from "react";
import InputField from "../InputField/InputField";

const Contact = ({
  countryLabel,
  countrySelectLabel,
  contactNumberLabel,
  contactNumberName,
  contactNumberPlaceHolder
}) => {
  return (
    <div className="row">
      <div class="col-sm-5">
        <label for="username">{countryLabel}</label>
        <select className="form-control">
          <option value="country">{countrySelectLabel}</option>
        </select>
      </div>
      <div className="col-sm-7">
        <InputField
          label={contactNumberLabel}
          type="tel"
          placeHolder={contactNumberPlaceHolder}
          name={contactNumberName}
        />
      </div>
    </div>
  );
};

export default Contact;
