import React, { useEffect } from "react";
import LoginPass from "../components/auth/LoginPass";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";

const Login = () => {
  const history = useHistory();
  const { auth } = useSelector((state: RootStore) => state);

  useEffect(() => {
    if (auth.access_token) history.push("/");
  }, [auth.access_token, history]);

  return (
    <div className="auth_page" id="login">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>
        <LoginPass />
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
