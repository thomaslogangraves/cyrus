'use strict';

import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import EmployeeStore from "./AppStore"
import Dashboard from "./Dashboard"

const app = document.getElementById("app")

ReactDOM.render(<Dashboard store={EmployeeStore} />, app)
