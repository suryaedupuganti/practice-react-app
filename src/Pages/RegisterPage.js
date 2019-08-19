import React from "react";
import ParisImage from "./../assets/images/paris.jpg";

const RegisterPage = () => {
  return (
    <div class="container full-width">
      <div class="row">
        <div class="col-sm-2">
          <img src={ParisImage} class="img-thumbnail" alt="no picture" />
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
            <label for="username">First Name:</label>
            <input
              type="text"
              class="form-control"
              id="FirstName"
              placeholder="First Name"
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

            <div className="row">
              <div class="col-sm-5">
                <label for="username">Country:</label>
                <select className="form-control">
                  <option value="country">Select Country</option>
                </select>
              </div>
              <div className="col-sm-7">
                <label for="ContactNumber">Your Contact:</label>
                <input
                  type="tel"
                  class="form-control"
                  id="ContactNumber"
                  placeholder="Contact Number"
                  name="ContactNumber"
                />
              </div>
            </div>

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
            <label for="username">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter your name"
              name="username"
            />
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
            <label for=" Confirmpwd">Confirm Password:</label>
            <input
              type="password"
              class="form-control"
              id="Confirmpwd"
              placeholder="Confirm your password"
              name=" Confirmpwd"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
