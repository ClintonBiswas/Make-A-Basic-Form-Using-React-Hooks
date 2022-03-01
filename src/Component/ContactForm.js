import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const ContactForm = () => {
  const [state, setState] = useState([
    { fname: "", lname: "", email: "", password: "" },
  ]);
  const [submit, setsubmit] = useState(false);
  const [valid, setValid] = useState(false);
  let name, value;
  const HandleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (state.fname && state.lname && state.email && state.password) {
      setValid(true);
    }
    setsubmit(true);
  };
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h2 style={{ marginBottom: "40px", color: "#001a33" }}>
        Make A Basic Form Using React Hooks
      </h2>
      <MDBRow>
        <MDBCol md="6" className="shadow-5-strong">
          <h2 style={{ marginBottom: "40px" }}>Registration Form</h2>
          <form onSubmit={HandleSubmit}>
            {submit && valid ? (
              <div className="alert alert-success">Thanks for registration</div>
            ) : null}
            {/* {submit && !state.fname ? (
              <span>All Fields Are Required</span>
            ) : null} */}
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  id="form3Example1"
                  label="First name"
                  name="fname"
                  value={state.fname || ""}
                  onChange={HandleInput}
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  id="form3Example2"
                  label="Last name"
                  name="lname"
                  value={state.lname || ""}
                  onChange={HandleInput}
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              className="mb-4"
              type="email"
              id="form3Example3"
              label="Email address"
              value={state.email || ""}
              name="email"
              onChange={HandleInput}
              required
            />

            <MDBInput
              className="mb-4"
              type="password"
              id="form3Example4"
              label="Password"
              value={state.password || ""}
              name="password"
              onChange={HandleInput}
              required
            />

            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />

            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>

            <div className="text-center" style={{ marginBottom: "50px" }}>
              <p>
                Already Register? <a href="#!">Login</a>
              </p>
              <p>or sign up with:</p>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="6" className="shadow-5-strong">
          <h2 style={{ marginBottom: "40px" }}>After Submission Data</h2>
          {submit && valid ? (
            <div>
              <p>First Name: {state.fname}</p>
              <p>Last Name: {state.lname}</p>
              <p>Email: {state.email}</p>
              <p>Password: {state.password}</p>
            </div>
          ) : null}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ContactForm;
