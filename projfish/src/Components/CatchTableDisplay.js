import React, { Component } from 'react';
import CatchTbl from "../Tables/catchTbl"
//import CatchTableRow from "./CatchTableRow"
import '../App.css';
import ReactTable from "react-table"; 
import "react-table/react-table.css";
//import { render } from "react-dom";
//import CatchHeaders from "../Tables/catchHeaders";

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
     this.renderEditable = this.renderEditable.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({ CatchTbl: CatchTbl }));
  }
   renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.CatchTbl];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ CatchTbl: data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.CatchTbl[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  } 
  render() {

    return (
      <div className="catch-table-display"><div className="trip2-header">View of all Catch Information:</div><div className="new-table">
      <ReactTable
       data={this.state.CatchTbl}
       columns={[
        { Header: "Species", accessor: "Species", Cell: this.renderEditable, width: 150},
        { Header: "Trip Name", accessor: "Trip", Cell: this.renderEditable, width: 150},
        { Header: "Catch Date", accessor: "CatchDate", Cell: this.renderEditable},
        { Header: "Location", accessor: "Location", Cell: this.renderEditable, width: 150},
        { Header: "Angler", accessor: "Angler", Cell: this.renderEditable},
        { Header: "Qty", accessor: "Quantity", Cell: this.renderEditable, width: 75},
        { Header: "Weight", accessor: "Weight", Cell: this.renderEditable, width: 75},
         { Header: "Length", accessor: "Length", Cell: this.renderEditable, width: 75}, 
         { Header: "Girth", accessor: "Girth", Cell: this.renderEditable, width: 75}, 
        { Header: "Fight Time", accessor: "FightTime", Cell: this.renderEditable, width: 85},
        { Header: "Outcome", accessor: "Outcome",Cell: this.renderEditable, width: 85 },
        { Header: "Fishing Style", accessor: "Style", Cell: this.renderEditable, width: 100},
        { Header: "Bait Type", accessor: "Bait", Cell: this.renderEditable },
        { Header: "Bait Color", accessor: "BaitColor", Cell: this.renderEditable, width: 100},
        { Header: "Notes", accessor: "Notes", Cell: this.renderEditable, width: 200},
        { Header: "Air Temp", accessor: "AirTemp", Cell: this.renderEditable},
        { Header: "Wind Direction", accessor: "WindDirection", Cell: this.renderEditable, width: 100},
        { Header: "Wind", accessor: "Wind", Cell: this.renderEditable},       
        { Header: "Sky", accessor: "SkyCondition", Cell: this.renderEditable},
        { Header: "Lunar Phase", accessor: "LunarPhase", Cell: this.renderEditable, width: 100},
        { Header: "Pressure", accessor: "Pressure", Cell: this.renderEditable, width: 75},
        { Header: "Barometer", accessor: "Barometer", Cell: this.renderEditable, width: 80},
        { Header: "Water Temp", accessor: "WaterTemp", Cell: this.renderEditable, width: 100},
        { Header: "Water Depth", accessor: "WaterDepth", Cell: this.renderEditable, width: 100},
        { Header: "Water Ph", accessor: "WaterPh", Cell: this.renderEditable, width: 100},
        { Header: "Current", accessor: "Current", Cell: this.renderEditable, width: 100},
        { Header: "Bottom", accessor: "Bottom", Cell: this.renderEditable},
        { Header: "Water Color", accessor: "WaterColor", Cell: this.renderEditable, width: 100},
        { Header: "Tide", accessor: "Tide", Cell: this.renderEditable, width: 75},
        { Header: "Water Level", accessor: "WaterLevel", Cell: this.renderEditable},
        { Header: "Seas", accessor: "Seas", Cell: this.renderEditable, width: 75},
        { Header: "Rod (Model/Manf)", accessor: "Rod", Cell: this.renderEditable, width: 150},
        { Header: "Reel (Model/Manf)", accessor: "Reel", Cell: this.renderEditable,  width: 150},
        { Header: "Hook Size", accessor: "HookSize", Cell: this.renderEditable, width: 100},
        { Header: "Hook Type", accessor: "HookType", Cell: this.renderEditable, width: 100},
        { Header: "Sinker Weight", accessor: "SinkerWeight", Cell: this.renderEditable, width: 100},      
        { Header: "Sinker Type", accessor: "SinkerStyle", Cell: this.renderEditable, width: 100},
        { Header: "Line Test(Lb.)", accessor: "LineTest", Cell: this.renderEditable, width: 110},
        { Header: "Line Type", accessor: "LineStyle", Cell: this.renderEditable, width: 90},
        { Header: "Line Color", accessor: "LineColor", Cell: this.renderEditable, width: 100},
        { Header: "Image Caption", accessor: "ImgCaption", Cell: this.renderEditable, width: 140},
        { Header: "Image", accessor: "Photo", Cell: this.renderEditable },   
    ]}
       defaultPageSize={10}
       style={{
         height: "400px"
       }}
       className="-striped -highlight"
     /></div> </div>
    );
  }
}

export default CatchTableDisplay;