import React from "react";
//import LoginPass from "./auth/LoginPass";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth_page" id="login">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>
        {/* /<LoginPass /> */}
        <small className="row my-2 text-primary" style={{ cursor: "pointer" }}>
          <p>
            <Link to="/forgot_password" className="col-6">
              Forgot password?
            </Link>
          </p>
          <p>
            if you do not have an account please
            <Link to="/register" className="col-6" style={{ color: "crimson" }}>
              {` Register now`}
            </Link>
          </p>
        </small>
      </div>
    </div>
  );
};

export default Login;