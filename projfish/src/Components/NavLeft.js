import React, { Component } from 'react';
import '../App.css';

class NavLeft extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      viewTrip: false,

    })

  }
  render() {

    return (
      <form className="nav-left">
        <ul className="nav-list">
          <li className="nav-left-item icon1">
            <div id="icon1" className="nav-left-icon-1" onClick={this.props.viewTripData}></div>
            <button className="nav-button" value="ViewData" onClick={this.props.viewTripData} name="viewTripData">View Trips</button>
          </li>
          <li className="nav-left-item">
            <div id="icon2" className="nav-left-icon-1" onClick={this.props.viewTripForm}></div>
            <button className="nav-button" value="EditData" onClick={this.props.viewTripForm} name="viewTripForm">Enter Trip Info </button>
          </li>
          <li className="nav-left-item">
            <div id="icon3" className="nav-left-icon-1" onClick={this.props.viewCatchData}></div>
            <button className="nav-button" value="ViewCatchData" onClick={this.props.viewCatchData} name="viewCatchData">View Catches</button>
          </li>
          <li className="nav-left-item">
            <div id="icon4" className="nav-left-icon-1" onClick={this.props.viewCatchForm} ></div>
            <button className="nav-button" value="EditCatchData" onClick={this.props.viewCatchForm} name="viewCatchForm">Enter Catch Info</button>
          </li>
          <li className="nav-left-item">
            <div id="icon5" className="nav-left-icon-1" onClick={this.props.viewCharts}></div>
            <button className="nav-button" value="viewCharts" onClick={this.props.viewCharts} name="viewCharts">View Charts</button>
          </li>
         {/*  <li className="nav-left-item">
            <div  id="icon6" className="nav-left-icon-1"></div>
            <button className="nav-button" value="ClearFields" onClick={this.props.handleSubmit} name="ClearFields">Clear Fields</button>
          </li>
          <li className="nav-left-item">
            <div  id="icon7" className="nav-left-icon-1"></div>
            <button className="nav-button" value="CancelChanges" onClick={this.props.handleSubmit} name="CancelChanges">Cancel Changes</button>
          </li>
          <li className="nav-left-item">
            <div  id="icon8" className="nav-left-icon-1"></div>
            <button className="nav-button" value="Print" onClick={this.props.handleSubmit} name="Print">Print</button>
          </li>
          <li className="nav-left-item">
            <div  id="icon9" className="nav-left-icon-1" disabled={true}></div>
            <button className="nav-button" value="Logout" onClick={this.props.handleSubmit} disabled={true} name="Logout">Log Out</button>
          </li> */}
        </ul>
      </form>
    );
  }
}

export default NavLeft;



