import React, { Component } from 'react';
import '../App.css';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: "",
      startDate: "",
      duration: 0,
      place: "",
      photos: "",
      notes: "",
      anglers: "",
      gps1: "",
      gps2: "",
      imgCaption: "",
      viewTrip: "",
    }
  }

  render() {
    let classNames = require('classnames');
    let temp = this.props.id;
    ((temp % 2) === 0)? temp = false: temp = true;
   // console.log("temp", temp)
		let tableRow = classNames({
			'column': true,
			'hi-lite': temp
		})
    return (
      <div className="table-row">
        <div id="id" className={tableRow}>{this.props.id}</div>
        <div className={tableRow}>{this.props.trip}</div>
        <div className={tableRow}>{this.props.startDate}</div>
        <div className={tableRow}>{this.props.duration}</div>
        <div className={tableRow}>{this.props.place}</div>
        <div className={tableRow}>{this.props.notes}</div>
        <div className={tableRow}>{this.props.anglers}</div>
        <div className={tableRow}>{this.props.gps1}</div>
        <div className={tableRow}>{this.props.gps2}</div>
        <div id="photos" className={tableRow}>{this.props.photos}</div>
        <div id="caption" className={tableRow}>{this.props.imgCaption}</div>
      </div>
    );
  }
}

export default TableRow;