import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from "./candy/CandyList";
import EmployeeList from "./employees/EmployeeList"
import StoreList from "./store/StoreList"
import StoresManager from "../modules/StoresManager"
import EmployeesManager from "../modules/EmployeesManager"
import CandiesManager from "../modules/CandiesManager"




export default class ApplicationViews extends Component {

state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
    }

componentDidMount() {

    StoresManager.getAll().then(allStores => {
        this.setState({
            stores: allStores
        })
    })
    EmployeesManager.getAll().then(allemployees => {
        this.setState({
            employees: allemployees
        })
    })
    CandiesManager.getAll().then(allcandies => {
        this.setState({
            candies: allcandies
        })
    })
}

deleteCandy = id => {
    return fetch(`http://localhost:5002/candies/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/candies`))
    .then(e => e.json())
    .then(candies => this.setState({
        candies: candies
    })
  )
}

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                return <StoreList stores={this.state.stores} />
                    }} />
                <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
                    }} />
                <Route path="/candies" render={(props) => {
                return <CandyList deleteCandy={this.deleteCandy}
                candies={this.state.candies} />
                    }} />
            </React.Fragment>
        )
    }
}