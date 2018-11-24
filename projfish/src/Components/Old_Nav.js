import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      viewTrip: false,
      enterTrip: false
    })
    console.log(this.state)
  }

  componentDidMount() {

    console.log("in the nav componentDidMount")
    console.log(this.state)
  }


  render() {

    return (
      <form className="nav">
        <div className="nav-button" id="logo">The Fishing Log</div>
        <button className="nav-button" value="ViewData" onClick={this.props.viewTripData} name="viewTripData">View trip data </button>
        <button className="nav-button" value="EditData" onClick={this.props.viewTripForm} name="viewTripForm">Enter trip data </button>
        <button className="nav-button" value="ViewTable" onClick={this.props.viewTable} name="viewTable">View Table</button>
        <button className="nav-button">Solunar Calendar </button>
        <button className="nav-button">GPS </button>
        <button className="nav-button">Help Me</button>
        <button className="nav-button">The one that got away </button>
      </form>
    );
  }
}

export default Nav;