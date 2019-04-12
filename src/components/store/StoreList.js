import React, { Component } from 'react'

export default class StoreList extends Component {
  render() {
    return (
      <section>
        {
            this.props.stores.map(store =>
            <div key={store.id}>
                {store.name}
                </div>
            )
        }
      </section>
    )
  }
}