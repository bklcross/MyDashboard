import React, { useState } from "react";
import { render } from "react-dom";
import Timer from "./Timer";
import GoogleNews from "./GoogleNews";
import Weather from "./Weather";
import Quote from "./Quote";

const App = () => {
  return (
    <React.StrictMode>
      <Timer />
      <GoogleNews />
      <Weather />
      <Quote />
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
