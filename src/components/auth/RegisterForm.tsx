import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction";
import {Alert} from "../alert/Alert";
import { InputChange, FormSubmit } from "../../utils/TypeScript";

const RegisterForm = () => {
  const initialState = {
    userId: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const [userRegister, setUserRegister] = useState(initialState);
  const {
    userId,
    firstName,
    lastName,
    position,
    email,
    password,
    passwordConfirmation,
  } = userRegister;
  const [typePass, setTypePass] = useState(false);
  const [typePassCf, setTypePassCf] = useState(false);
  const dispatch = useDispatch();
  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  const handleTypePass = () => {
    setTypePass(!typePass);
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(register(userRegister));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="userId">
          {" "}
          User Id{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleChangeInput}
          placeholder="User Id must be exactly 5 digits"
        />{" "}
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="firstName">
          {" "}
          First Name{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChangeInput}
          placeholder="Your name must be up 20 chars"
        />{" "}
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="lastName">
          {" "}
          Last Name{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChangeInput}
          placeholder="Your surname must be up 20 chars"
        />{" "}
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="position">
          {" "}
          Position{" "}
        </label>{" "}
        <input
          className="form-control"
          type="text"
          id="position"
          name="position"
          value={position}
          onChange={handleChangeInput}
          placeholder="Leiter/Vertrieber"
        />{" "}
      </div>
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
          placeholder="example@gmail.com"
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
            placeholder="At least must be 8 chars!"
          />{" "}
          <small onClick={handleTypePass}> {typePass ? "Hide" : "Show"} </small>{" "}
        </div>{" "}
      </div>{" "}
      <div className="form-group mb-3 ">
        <label className="form-label" htmlFor="passwordConfirmation">
          {" "}
          Password Confirm{" "}
        </label>{" "}
        <div className="pass">
          <input
            className="form-control"
            type={typePass ? "text" : "password"}
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChangeInput}
          />{" "}
          <small onClick={() => setTypePassCf(!typePassCf)}>
            {" "}
            {typePassCf ? "Hide" : "Show"}{" "}
          </small>{" "}
        </div>{" "}
      </div>{" "}
      <Alert />
      <button
        type="submit"
        className="btn btn-dark w-100 my-1"
        disabled={email && password ? false : true}
      >
        Register{" "}
      </button>{" "}
    </form>
  );
};

export default RegisterForm;
