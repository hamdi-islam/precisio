import React from "react";
import Slider from "../sections/slider";
import Detail from "../sections/details";
import Covid from "../sections/covid";

function home() {
  return (
    <div>
      <Slider />
      <Detail />
      <Covid />
    </div>
  );
}

export default home;
