import React from "react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <RingLoader></RingLoader>
    </div>
  );
};

export default Spinner;
