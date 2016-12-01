'use strict';

import React from "react"
import { observer } from "mobx-react"

@observer
export default class Dashboard extends React.Component {

createNewEmployee(e) {
  if (e.which === 13) {
    this.props.store.createEmployee(e.target.value)
    e.target.value = ""
  }
}
  render() {
    const {teams, employees} = this.props.store
    const empList = employees.map((employee, i) => (
      <li key={i}> {employee.id.id} </li>
    ))
    console.log(empList)
    return(
      <div>
        <h1>Employees</h1>
      <input className="addemployee" placeholder="Add employee" onKeyPress={this.createNewEmployee.bind(this)}/>
      <ul> {empList} </ul>
      </div>
    )
  }
}
