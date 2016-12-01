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

export class EmployeeStore {
 @observable employees = []

  createEmployee(id) {
    this.employees.push(new Employee(id))
  }

  removeEmployee(id) {
    
  }
}
export default new EmployeeStore
