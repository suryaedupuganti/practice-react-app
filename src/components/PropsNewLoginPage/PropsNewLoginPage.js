import React from "react";
import "./PropsNewLoginPage.css";
import SampleImage from "../../assets/images/Sampleimg.jpg";

const PropsNewLoginPage = ({ Text,placeholder1,placeholder2 }) => {
  return (
    <div className="row">
      <div className="imageStyles">
        <img
          src={SampleImage}
          class="img-rounded"
          alt="no picture"
        />
      </div>

      <div>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div class="input-group">
  <div class="input-group-prepend">
  </div>
  <div>
  <button type="button" class="btn-info">forgotpassword</button>
  <button type="button" class="btn-info">Newuser</button>
</div>
</div>

</form>
</div>

<div>



</div>


      </div>
    
  );
}

export default PropsNewLoginPage;
