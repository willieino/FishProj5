import React, { Component } from 'react';
import TripTbl from "../Tables/tripTbl";
//import TableRow from "./TableRow";
import '../App.css';
import TripHeaders from "../Tables/tripHeaders";
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableDisplay extends Component {
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
      viewTrip: null,
      enterTrip: false,
      TripTbl: [],
      TripHeaders: [],
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.setState(() => ({ TripTbl: TripTbl, TripHeaders: TripHeaders }));

  }

  render() {

    return (
      <div className="table-display"><div className="trip2-header">Trip View Information:</div><div className="new-trip-table">
          <ReactTable
            data={this.state.TripTbl}
            columns={this.state.TripHeaders}
            defaultPageSize={10}
            style={{
              height: "400px" 
            }}
            className="-striped -highlight"
          /></div> </div>
    );
  }
}

export default TableDisplay;