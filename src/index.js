import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";
import Route from "./Route";
import { fakeBackend } from "./helper";

import config from "react-global-configuration";
import configuration from "./config";

config.set(configuration);

ReactDOM.render(<Route />, document.getElementById("root"));
fakeBackend();
