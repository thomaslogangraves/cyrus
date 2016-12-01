import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import EmployeeStore from "./AppStore"
import TodoList from "./TodoList"

const app = document.getElementById("app")

ReactDOM.render(<Dashboard store={EmployeeStore} />, app)
