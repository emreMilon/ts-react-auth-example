import React from "react";
import { useDispatch } from "react-redux";
import { ALERT } from "../../redux/types/alertType";

interface IProps {
    title: string
    body: string | string[]
  }

const Toast = ({ body, title } : IProps) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: ALERT, payload: {} });
  };

  return (
    <div className="toastt">
      {title === "Error" ? (
        typeof body === "string" ? (
          <span id="error"> {body} </span>
        ) : (
          <ul id="error">
            {body?.map((text, index) => (
              <li key={index}> {text} </li>
            ))}
          </ul>
        )
      ) : typeof body === "string" ? (
        <span id="success"> {body} </span>
      ) : (
        <ul id="success">
          {body?.map((text, index) => (
            <li key={index}> {text} </li>
          ))}
        </ul>
      )}

      <span onClick={handleClose} id="button">
        {" "}
        x{" "}
      </span>
    </div>
  );
};

export default Toast;