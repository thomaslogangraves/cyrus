'use strict';

import { computed, observable } from "mobx"

class Employee {
  constructor(id, teamId) {
    this.id = {id: id, created: Data.now()}
    this.teamId = teamId
    this.productivity = 0
    this.stressLevel = 0
  }
}

class Teams {
  @observable id
  @observable productivity
  @observable stressLevel

  constructor(id) {
    this.id = {id: id, created: Data.now()}
    this.productivity = 0
    this.stressLevel = 0
  }
}

class EmployeeStore {
 @observable teams = []

  createEmployee(teamId) {
    this.teams.push(new Employee(teamId))
  }

  removeEmployee(id) {

  }
}

var store = window.store = new EmployeeStore

export default store
