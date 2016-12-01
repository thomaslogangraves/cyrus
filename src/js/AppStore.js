'use strict';

import { computed, observable } from "mobx"

class Employee {
  constructor(id) {
    this.id = {id: id, created: Date.now()}
    this.teamId = null
    this.productivity = 0
    this.stressLevel = 0
  }
}

class Teams {
  @observable id
  @observable productivity
  @observable stressLevel

  constructor(id) {
    this.id = {id: id, created: Date.now()}
    this.productivity = 0
    this.stressLevel = 0
  }
}

class EmployeeStore {
 @observable employees = []
 @observable teams = []

  createEmployee(id) {
    this.employees.push(new Employee(id))
  }

  removeEmployee(value) {

  }
}

var store = window.store = new EmployeeStore

export default new EmployeeStore
