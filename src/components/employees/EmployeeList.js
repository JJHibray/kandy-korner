import React, { Component } from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <section>
        {
            this.props.employees.map(employee =>
            <div key={employee.id}>
                {employee.name}
                </div>
            )
        }
      </section>
    )
  }
}