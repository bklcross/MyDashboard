import React, { useState } from "react";
import { render } from "react-dom";
import Timer from "./Timer";
import GoogleNews from "./GoogleNews";

const App = () => {
  return (
    <React.StrictMode>
      <Timer />
      <GoogleNews />
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
