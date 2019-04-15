import React, { Component } from 'react'
import NavBar from "./Nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"
import "./KandyKorner.css"

export default class Kandy extends Component {


    render() {
        return (
        <React.Fragment>
            <NavBar />
            <ApplicationViews />
        </React.Fragment>
        )
    }
}