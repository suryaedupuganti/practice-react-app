import React from "react";
import ParisImage from "../../assets/images/paris.jpg";

const Loginform = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <img
            src={ParisImage}
            class="img-rounded"
            alt="no picture"
            width="150"
            height="150"
            style={{ borderRadius: "50%" }}
          />
          <b>Surya Edupuganti</b>
        </div>
        <div class="col-sm-5">
          <h3>User details</h3>
        </div>
        <div class="col-sm-5">
          <h3>Account details</h3>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
