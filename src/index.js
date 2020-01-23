import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FEATURES from "./feature";

ReactDOM.render(<App STORE={FEATURES} />, document.getElementById("root"));
