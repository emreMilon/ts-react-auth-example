import React from "react";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <div
        className="position-relative"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <h2
          className="position-absolute text-secondary"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Welcome To CRM FORECAST
        </h2>
      </div>
      <Login />
    </>
  );
};

export default Home;