'use strict';

import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import store from "./AppStore"
import Dashboard from "./Dashboard"

const app = document.getElementById("app")

ReactDOM.render(<Dashboard store={store} />, app)
