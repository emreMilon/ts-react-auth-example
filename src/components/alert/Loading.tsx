import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";

const Loading = () => {
  return (
    <div>
      <span> <SpinnerRoundOutlined size={50} thickness={100} speed={100} color="#36ad47" /></span>
    </div>
  );
};

export default Loading;