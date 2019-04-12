import React, { Component } from 'react'
import CandyList from "./candy/CandyList";
import EmployeeList from "./employees/EmployeeList"
import StoreList from "./store/StoreList"


export default class Kandy extends Component {


storeLocationsFromAPI = [
    { id: 1, name: "Nashville" },
    { id: 2, name: "East Nashville" },
    { id: 3, name: "Chattanooga" },
    { id: 4, name: "Memphis" }

]

employeesFromAPI = [
    { id: 1, name: "Lemony Snickets" },
    { id: 2, name: "Broomhilda Korndog" },
    { id: 3, name: "Smush Jaxon" },
    { id: 4, name: "Peter Parker" }
]


candyTypes = [
    { id: 1, name: "Real Candy" },
    { id: 2, name: "Fake Kandy" },
]


individualCandiesFromAPI = [
    { id: 1, name: "Lemonheads", candyTypesid: 1 },
    { id: 2, name: "Snozberries", candyTypesid: 2 },
    { id: 3, name: "Turkish Delights", candyTypesid: 1 },
    { id: 4, name: "Runts", candyTypesid: 1 }
]


state = {
    stores: this.storeLocationsFromAPI,
    employees: this.employeesFromAPI,
    candyTypes: this.candyTypes,
    candies: this.individualCandiesFromAPI
    }

    render() {
        return (
            <article className="Kandy">
            <h1>Candy!!!</h1>
            <CandyList candies={this.state.candies} />
            <h1>Employees</h1>
            <EmployeeList employees={this.state.employees} />
            <h1>Stores</h1>
            <StoreList stores={this.state.stores} />
            </article>
        )
    }
}