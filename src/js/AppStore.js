'use strict';

import { computed, observable } from "mobx"

class Employee {
  @observable id
  @observable productivity
  @observable stressLevel

  constructor(id) {
    this.id = {id: id, created: Data.now()}
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

  createEmployee(id) {
    this.teams.push(new Employee(id))
  }

  removeEmployee(id) {

  }
}

var store = window.store = new EmployeeStore

export default store
