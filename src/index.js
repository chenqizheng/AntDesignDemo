/**
 * Created by Chen on 16/8/23.
 */
import React from "react";
import ReactDOM from "react-dom";
import { createForm } from 'rc-form';
import App from "./app";
var layout = require("./data/layout.json");
var model = require("./data/saleorder.json");
ReactDOM.render(<App layout={layout} model={model}/>, document.getElementById("react"));