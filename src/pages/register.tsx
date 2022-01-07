import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";

const Login = () => {
  return (
    <div className="auth_page" id="login">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Register</h3>
        <RegisterForm/>
        <small className="row my-2 text-primary" style={{ cursor: "pointer" }}>
          <p>
            if you already have an account please
            <Link to="/login" className="col-6" style={{ color: "crimson" }}>
              {` Login now`}
            </Link>
          </p>
        </small>
      </div>
    </div>
  );
};

export default Login;