import React, { useState } from "react";
import { render } from "react-dom";
import Timer from "./Timer";
import GoogleNews from "./GoogleNews";
import Weather from "./Weather";

const App = () => {
  return (
    <React.StrictMode>
      <Timer />
      <GoogleNews />
      <Weather />
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
