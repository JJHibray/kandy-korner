import React, { Component } from 'react'

export default class CandyList extends Component {
  render() {
    return (
      <section className="content">
        {
            this.props.candies.map(candy =>
            <div key={candy.id}>
                {candy.name}
                <button
                  onClick={() => this.props.deleteCandy(candy.id)}
                  className="card-link">Delete</button>
                </div>
            )
        }
      </section>
    )
  }
}
