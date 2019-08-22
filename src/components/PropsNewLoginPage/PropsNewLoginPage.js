import React from "react";
import SampleImage from "../../assets/images/Sampleimg.jpg";

const PropsNewLoginPage = ({ Text, placeholder1, placeholder2 }) => {
  return (
    <div className="container border border-primary p-0 w-75">
      <div className="row w-100 m-0">
        <div className="col">
          <div className="row">
            <img
              src={SampleImage}
              className="rounded-circle mx-auto p-5"
              alt="no picture"
            />
          </div>

          <div className="row">
            <form className="w-100 p-5">
              <div class="form-group">
                <div>
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div>
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="row">
            <div className="btn-group w-100">
              <button type="button" class="btn-info w-50">
                forgotpassword
              </button>
              <button type="button" class="btn-info w-50">
                Newuser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsNewLoginPage;
