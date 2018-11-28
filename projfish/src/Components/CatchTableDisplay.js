import React, { Component } from 'react';
import CatchTbl from "../Tables/catchTbl"
//import CatchTableRow from "./CatchTableRow"
import '../App.css';
import ReactTable from "react-table"; 
import "react-table/react-table.css";
import CatchHeaders from "../Tables/catchHeaders";

class CatchTableDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CatchTbl: [],
      CatchHeaders: [],
      species: "",
      catchDate: "",
      trip: "",
      location: "",
      angler: "",
      quantity: "",
      weight: "",
      length: "",
      girth: "",
      fightTime: "",
      outcome: "",
      style: "",
      bait: "",
      baitColor: "",
      notes: "",
      airTemp: "",
      windDirection: "",
      wind: "",
      skyCondition: "",
      lunarPhase: "",
      pressure: "",
      barometer: "",
      waterTemp: "",
      waterDepth: "",
      waterPh: "",
      current: "",
      bottom: "",
      waterColor: "",
      tide: "",
      waterLevel: "",
      seas: "",
      rod: "",
      reel: "",
      hookSize: "",
      hookType: "",
      sinkerWeight: "",
      sinkerStyle: "",
      lineTest: "",
      lineStyle: "",
      lineColor: "",
      imgCation: "",
      photo: "",
      viewTrip: null,
    }
  }

  componentDidMount() {
    this.setState(() => ({ CatchTbl: CatchTbl, CatchHeaders: CatchHeaders }));
  }

  render() {

    return (
      <div className="catch-table-display"><div className="trip2-header">View of all Catch Information:</div><div className="new-table">
      <ReactTable
       data={this.state.CatchTbl}
       columns={this.state.CatchHeaders}
       defaultPageSize={10}
       style={{
         height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
       }}
       className="-striped -highlight"
     /></div> </div>
    );
  }
}

export default CatchTableDisplay;