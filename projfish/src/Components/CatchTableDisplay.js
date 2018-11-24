import React, { Component } from 'react';
import CatchTbl from "../Tables/catchTbl"
import CatchTableRow from "./CatchTableRow"
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
      <div className="catch-table-display"><div className="trip2-header">View of all Catch Information:</div>{CatchTbl.map((catches, index) => {
        return <CatchTableRow
          key={catches.ID}
          id={catches.ID}
          species={catches.Species}
          catchDate={catches.CatchDate}
          trip={catches.Trip}
          location={catches.Location}
          angler={catches.Angler}
          quantity={catches.Quantity}
          weight={catches.Weight}
          length={catches.Length}
          girth={catches.Girth}
          fightTime={catches.FightTime}
          outcome={catches.Outcome}
          style={catches.Style}
          bait={catches.Bait}
          baitColor={catches.BaitColor}
          notes={catches.Notes}
          airTemp={catches.AirTemp}
          windDirection={catches.WindDirection}
          wind={catches.Wind}
          skyCondition={catches.SkyCondition}
          lunarPhase={catches.LunarPhase}
          pressure={catches.Pressure}
          barometer={catches.Barometer}
          waterTemp={catches.WaterTemp}
          waterDepth={catches.WaterDepth}
          waterPh={catches.WaterPh}
          current={catches.Current}
          bottom={catches.Bottom}
          waterColor={catches.WaterColor}
          tide={catches.Tide}
          waterLevel={catches.WaterLevel}
          seas={catches.Seas}
          rod={catches.Rod}
          reel={catches.Reel}
          hookSize={catches.HookSize}
          hookType={catches.HookType}
          sinkerWeight={catches.SinkerWeight}
          sinkerStyle={catches.SinkerStyle}
          lineTest={catches.LineTest}
          lineStyle={catches.LineStyle}
          lineColor={catches.LineColor}
          imgCaption={catches.ImgCaption}
          photo={catches.Photo} />
      })}<div className="new-table">
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