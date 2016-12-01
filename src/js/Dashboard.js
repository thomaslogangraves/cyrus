'use strict';

import React from "react"
import { observer } from "mobx-react"

@observer
export default class Dashboard extends React.Component {


  render() {
    const {teams} = this.props.store

    return(
      <div><h1>Employees</h1>
      </div>
    )
  }
}
