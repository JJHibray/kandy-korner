import React, { Component } from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="content">
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
