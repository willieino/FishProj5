import React, { Component } from 'react';
import CatchTbl from "../Tables/catchTbl"
import '../App.css';

class CatchData extends Component {
  constructor(props) {
    super(props);

    this.state = { CatchTbl: [] }

  }

  render() {

    return (
      {CatchTbl.map((catches, index) => {
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
      })}



      {TripTbl.map((trips, index) => {
        return <TableRow
          key={trips.ID}
          trip={trips.Trip}
          startDate={trips.StartDate}
          duration={trips.Duration}
          place={trips.Place}
          photos={trips.Photos}
          id={trips.ID}
          notes={trips.Notes}
          anglers={trips.Anglers}
          gps1={trips.GPS1}
          gps2={trips.GPS2}
          imgCaption={trips.ImgCaption} />
      })}
      <div className="catch-data">
        <div className="style-text">Id:</div>
        <div className="style"> {this.props.trip}</div>
        <div className="style-text">Species:</div>
        <div className="style"> {this.props.duration}</div>
        <div className="style-text">Start Date:</div>
        <div className="style"> {this.props.startDate}</div>
        <div className="style-text">Place:</div>
        <div className="style"> {this.props.place}</div>
        <div className="style-text">Photos:</div>
        <div className="style"> {this.props.photos}</div>
        <div className="style-text">Notes:</div>
        <div className="style"> {this.props.notes}</div>
        <div className="style-text">Anglers:</div>
        <div className="style"> {this.props.anglers}</div>
        <div className="style-text">GPS1:</div>
        <div className="style"> {this.props.gps1}</div>
        <div className="style-text">GPS2:</div>
        <div className="style"> {this.props.gps2}</div>
        <div className="style-text">Image Caption:</div>
        <div className="style"> {this.props.imgCaption}</div>
        <div className="style-text">Trip Name:</div>
        <div className="style"> {this.props.trip}</div>
        <div className="style-text">Duration:</div>
        <div className="style"> {this.props.duration}</div>
        <div className="style-text">Start Date:</div>
        <div className="style"> {this.props.startDate}</div>
        <div className="style-text">Place:</div>
        <div className="style"> {this.props.place}</div>
        <div className="style-text">Photos:</div>
        <div className="style"> {this.props.photos}</div>
        <div className="style-text">Notes:</div>
        <div className="style"> {this.props.notes}</div>
        <div className="style-text">Anglers:</div>
        <div className="style"> {this.props.anglers}</div>
        <div className="style-text">GPS1:</div>
        <div className="style"> {this.props.gps1}</div>
        <div className="style-text">GPS2:</div>
        <div className="style"> {this.props.gps2}</div>
        <div className="style-text">Image Caption:</div>
        <div className="style"> {this.props.imgCaption}</div>
        <div className="style-text">Trip Name:</div>
        <div className="style"> {this.props.trip}</div>
        <div className="style-text">Duration:</div>
        <div className="style"> {this.props.duration}</div>
        <div className="style-text">Start Date:</div>
        <div className="style"> {this.props.startDate}</div>
        <div className="style-text">Place:</div>
        <div className="style"> {this.props.place}</div>
        <div className="style-text">Photos:</div>
        <div className="style"> {this.props.photos}</div>
        <div className="style-text">Notes:</div>
        <div className="style"> {this.props.notes}</div>
        <div className="style-text">Anglers:</div>
        <div className="style"> {this.props.anglers}</div>
        <div className="style-text">GPS1:</div>
        <div className="style"> {this.props.gps1}</div>
        <div className="style-text">GPS2:</div>
        <div className="style"> {this.props.gps2}</div>
        <div className="style-text">Image Caption:</div>
        <div className="style"> {this.props.imgCaption}</div>
        <div className="style-text">Trip Name:</div>
        <div className="style"> {this.props.trip}</div>
        <div className="style-text">Duration:</div>
        <div className="style"> {this.props.duration}</div>
        <div className="style-text">Start Date:</div>
        <div className="style"> {this.props.startDate}</div>
        <div className="style-text">Place:</div>
        <div className="style"> {this.props.place}</div>
        <div className="style-text">Photos:</div>
        <div className="style"> {this.props.photos}</div>
        <div className="style-text">Notes:</div>
        <div className="style"> {this.props.notes}</div>
        <div className="style-text">Anglers:</div>
        <div className="style"> {this.props.anglers}</div>
        <div className="style-text">GPS1:</div>
        <div className="style"> {this.props.gps1}</div>
        <div className="style-text">GPS2:</div>
        <div className="style"> {this.props.gps2}</div>
        <div className="style-text">Image Caption:</div>
        <div className="style"> {this.props.imgCaption}</div>
      </div>
    );
  }
}

export default CatchData;