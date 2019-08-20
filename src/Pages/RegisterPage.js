import React from "react";
import ParisImage from "./../assets/images/paris.jpg";
import InputField from "../components/InputField/InputField";
import Contact from "../components/Contact/Contact";
import MultipleInputs from "../components/MultipleInputs/MultipleInputs";

const RegisterPage = () => {
  return (
    <div class="container full-width">
      <div class="row">
        <div class="col-sm-2">
          <img
            src="https://via.placeholder.com/150/0000FF/808080?Text=Digital.com"
            class="img-thumbnail"
            alt="no picture"
          />
          <div class="p-3 mb-2 bg-success text-white">Surya Edupuganti</div>
          <p>
            If words are used out of context, only a small separate part of what
            was originally said or written is reported, with the result that
            their meaning is not clear or is not understood:{" "}
          </p>
        </div>
        <div class="col-sm-5">
          <div class="p-3 mb-2 bg-success text-white">User details</div>
          <div class="form-group">
            <InputField
              label="First Name:"
              type="text"
              placeHolder="First Name"
              name="FirstName"
            />

            <label for="username">Your Birthday:</label>
            <input
              type="date"
              class="form-control"
              id="birthday"
              placeholder="Your Birthday"
              name="YourBirthday"
            />

            <label for="gender">Gender:</label>
            <select className="form-control" id="gender">
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <Contact
              countryLabel="Country:"
              countrySelectLabel="Select Country"
              contactNumberLabel="Your Contact:"
              contactNumberName="ContactNumber"
              contactNumberPlaceHolder="Contact Number"
            />
            <label for="username">Bio:</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </div>
        <div class="col-sm-5">
          <div class="p-3 mb-2 bg-success text-white">Account details</div>
          <div class="form-group">
            <InputField
              label="Username:"
              type="text"
              placeHolder="Enter your name"
              name="username"
            />

            <InputField
              label="Email:"
              type="email"
              placeHolder="Enter email"
              name="email"
            />

            <InputField
              label="Password:"
              type="password"
              placeHolder="Enter password"
              name="pwd"
            />

            <InputField
              label="Confirm Password:"
              type="password"
              placeHolder="Confirm your password"
              name="Confirmpwd"
            />

            <div class="checkbox">
              <label>
                <input type="checkbox" name="remember" />
                &nbsp;&nbsp;
                <b>I accept the terms and conditions</b>
              </label>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>

      <div>
              <MultipleInputs
                label="First And Last Name"
                placeholder1="First Name"
                placeholder2="Last Name"
                placeholder3="Middle Name"
                type="text"
              />
            </div>
            

            <button type="submit" class="btn btn-primary">Click Here</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
