import React from "react";
import Customer from "../components/Customer";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";
const Home = () => {
  const { auth } = useSelector((state: RootStore) => state);

  return (
    <>
      {auth?.user ? (
        <Customer />
      ) : (
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
      )}
    </>
  );
};

export default Home;
