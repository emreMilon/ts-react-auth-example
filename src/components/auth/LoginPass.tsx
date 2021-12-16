import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";
import Alert from "../alert/Alert";
import { InputChange, FormSubmit } from '../../utils/TypeScript'

const LoginPass = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialState);
  const { email, password } = userLogin;
  const [typePass, setTypePass] = useState(false);
  const dispatch = useDispatch();
  const handleChangeInput = (e : InputChange) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleTypePass = () => {
    setTypePass(!typePass);
  };

  const handleSubmit = (e : FormSubmit) => {
    e.preventDefault();
    dispatch(login(userLogin));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="email">
          {" "}
          Email{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
          placeholder="Please insert your email"
        />{" "}
      </div>
      <div className="form-group mb-3 ">
        <label className="form-label" htmlFor="password">
          {" "}
          Password{" "}
        </label>{" "}
        <div className="pass">
          <input
            className="form-control"
            type={typePass ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
            placeholder="Please insert your password"
          />{" "}
          <small onClick={handleTypePass}> {typePass ? "Hide" : "Show"} </small>{" "}
        </div>{" "}
      </div>{" "}
      <Alert /> 
      <button
        type="submit"
        className="btn btn-dark w-100"
        disabled={email && password ? false : true}
      >
        Login{" "}
      </button>{" "}
    </form>
  );
};

export default LoginPass;