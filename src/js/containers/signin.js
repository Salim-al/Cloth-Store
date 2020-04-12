import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase";
function SignIn() {
  const [User, setUser] = useState({ email: "", password: "" });
  return (
    <div className="signin">
      <h1>I already have an account </h1>
      <h3>Sign in with your email and password.</h3>
      <form>
        {" "}
        <div className="input-group my-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
          </div>
          <input
            type="mail"
            onChange={(e) => setUser({ ...User, email: e.target.value })}
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <div className="input-group my-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
          </div>
          <input
            type="password"
            onChange={(e) => setUser({ ...User, password: e.target.value })}
            className="form-control"
            placeholder="*********"
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-block btn-outline-primary rounded-0"
          >
            SIGN IN
          </button>
          <br />
          <button
            type="submit"
            className="btn btn-block btn-outline-primary rounded-0"
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
