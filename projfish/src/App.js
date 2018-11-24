import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import './App.css';
import NavLeft from "./Components/NavLeft"
import TripFrm from "./Components/TripFrm";
import CatchFrm from "./Components/CatchFrm";
import TripTbl from "./Tables/tripTbl";
import Charts from "./Components/Charts";
import CatchTbl from "./Tables/catchTbl";
import TableDisplay from "./Components/TableDisplay";
import CatchTableDisplay from "./Components/CatchTableDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewTrip: null,
      TripTbl: [],
      StartDate: null,
      ID: null,
      Trip: null,
      Place: null,
      GPS1: "",
      GPS2: "",
      CatchTbl: [],
        Species: "",
        CatchDate: "",
        Location: "",
        Angler: "",
        Quantity: "",
        Weight: "",
        Length: "",
        Girth: "",
        FightTime: "",
        Outcome: "",
        Style: "",
        Bait: "",
        BaitColor: "",
        Notes: "",
        AirTemp: "",
        WindDirection: "",
        Wind: "",
        SkyCondition: "",
        LunarPhase: "",
        Pressure: "",
        Barometer: "",
        WaterTemp: "",
        WaterDepth: "",
        WaterPh: "",
        Current: "",
        Bottom: "",
        WaterColor: "",
        Tide: "",
        WaterLevel: "",
        Seas: "",
        Rod: "",
        Reel: "",
        HookSize: "",
        HookType: "",
        SinkerWeight: "",
        SinkerStyle: "",
        LineTest: "",
        LineStyle: "",
        LineColor: "",
        ImgCation: "",
        Photo: "",
      }

  }


  componentDidMount() {
    // check if key exists in local storage
    if (localStorage.getItem('viewTrip')) {
      let pageType = localStorage.viewTrip

      this.setState(() => ({ viewTrip: pageType }));
    } else {
      let pageType = 'trip'
      this.setState(() => ({ viewTrip: pageType, TripTbl: TripTbl, CatchTbl: CatchTbl }));
    }

    this.setState({ TripTbl: this.TripTbl, CatchTbl: this.CatchTbl })
  }

  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value });
  //  console.log(this.state)
  }

  viewTripForm = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', "tripForm");
    let pageType = `tripForm`
    this.setState({ viewTrip: pageType });
    //console.log("viewTripForm", this.state)
    //window.location.reload();
  }

  viewCatchForm = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', "catch");
    let pageType = `catch`
    this.setState(() => ({ viewTrip: pageType }))
    // window.location.reload();
  }

  viewCatchData = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', "catchTable");
    let pageType = "catchTable"
    this.setState(() => ({ viewTrip: pageType }));
  }

  viewTripData = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', "trip");
    let pageType = "trip"
    this.setState(() => ({ viewTrip: pageType }));
    //  window.location.reload();
  }

  viewCharts = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', "charts");
    let pageType = "charts"
    this.setState(() => ({ viewTrip: pageType }));
    //  window.location.reload();
  }

  /* changeSelected = (e) => {
    e.preventDefault();
    const currentView = true;
  } */

  clickHandler = e => {
    e.preventDefault();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTripRec = {
      ID: TripTbl.length + 1,
      Trip: this.state.Trip,
      StartDate: this.state.StartDate,
      Duration: this.state.Duration,
      Place: this.state.Place,
      Photos: this.state.Photos,
      Notes: this.state.Notes,
      Anglers: this.state.Anglers,
      GPS1: this.state.GPS1,
      GPS2: this.state.GPS2,
      ImgCaption: this.state.ImgCaption
    }
   // this.setState(() => ({ TripTbl: this.TripTbl, newTripRec: newTripRec }));
    TripTbl.push(newTripRec);
    this.setState(() => ({ TripTbl: this.TripTbl }));
  }

  catchSubmit = (e) => {
    e.preventDefault();
    const newCatchRec = {
      ID: CatchTbl.length + 1,
      Trip: this.state.Trip,
      key: this.state.ID,
      Species: this.state.Species,
      CatchDate: this.state.CatchDate,
      Location: this.state.Location,
      Angler: this.state.Angler,
      Quantity: this.state.Quantity,
      Weight: this.state.Weight,
      Length: this.state.Length,
      Girth: this.state.Girth,
      FightTime: this.state.FightTime,
      Outcome: this.state.Outcome,
      Style: this.state.Style,
      Bait: this.state.Bait,
      BaitColor: this.state.BaitColor,
      Notes: this.state.Notes,
      AirTemp: this.state.AirTemp,
      WindDirection: this.state.WindDirection,
      Wind: this.state.Wind,
      SkyCondition: this.state.SkyCondition,
      LunarPhase: this.state.LunarPhase,
      Pressure: this.state.Pressure,
      Barometer: this.state.Barometer,
      WaterTemp: this.state.WaterTemp,
      WaterDepth: this.state.WaterDepth,
      WaterPh: this.state.WaterPh,
      Current: this.state.Current,
      Bottom: this.state.Bottom,
      WaterColor: this.state.WaterColor,
      tide: this.state.Tide,
      WaterLevel: this.state.WaterLevel,
      Seas: this.state.Seas,
      Rod: this.state.Rod,
      Reel: this.state.Reel,
      HookSize: this.state.HookSize,
      HookType: this.state.HookType,
      SinkerWeight: this.state.SinkerWeight,
      SinkerStyle: this.state.SinkerStyle,
      LineTest: this.state.LineTest,
      LineStyle: this.state.LineStyle,
      LineColor: this.state.LineColor,
      ImgCaption: this.state.ImgCaption,
      photo: this.state.Photo,
    }
   // this.setState(() => ({ CatchTbl: this.CatchTbl, newCatchRec: newCatchRec }));
    CatchTbl.push(newCatchRec);
    this.setState(() => ({ CatchTbl: this.CatchTbl }));
   // console.log("CATchtable: ", this.state)
  }

  render() {

    let pageType = localStorage.getItem('viewTrip');
    //console.log("pagetype: ", pageType)
    switch (pageType) {
      case 'catch':
        return <div className="App">
          <div className="main-container">
            <NavLeft viewCatchData={this.viewCatchData} viewCharts={this.viewCharts} viewCatchForm={this.viewCatchForm} viewTripData={this.viewTripData} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
            <div className="main-display">
              <CatchFrm changeHandler={this.changeHandler} catchSubmit={this.catchSubmit} ID={this.props.ID} Trip={this.props.Trip}
      key={this.props.ID}
      Species={this.props.Species}
      CatchDate={this.props.CatchDate}
      Location={this.props.Location}
      Angler={this.props.Angler}
      Quantity={this.props.Quantity}
      Weight={this.props.Weight}
      Length={this.props.Length}
      Girth={this.props.Girth}
      FightTime={this.props.FightTime}
      Outcome={this.props.Outcome}
      Style={this.props.Style}
      Bait={this.props.Bait}
      BaitColor={this.props.BaitColor}
      Notes={this.props.Notes}
      AirTemp={this.props.AirTemp}
      WindDirection={this.props.WindDirection}
      Wind={this.props.Wind}
      SkyCondition={this.props.SkyCondition}
      LunarPhase={this.props.LunarPhase}
      Pressure={this.props.Pressure}
      Barometer={this.props.Barometer}
      WaterTemp={this.props.WaterTemp}
      WaterDepth={this.props.WaterDepth}
      WaterPh={this.props.WaterPh}
      Current={this.props.Current}
      Bottom={this.props.Bottom}
      WaterColor={this.props.WaterColor}
      Tide={this.props.Tide}
      WaterLevel={this.props.WaterLevel}
      Seas={this.props.Seas}
      Rod={this.props.Rod}
      Reel={this.props.Reel}
      HookSize={this.props.HookSize}
      HookType={this.props.HookType}
      SinkerWeight={this.props.SinkerWeight}
      SinkerStyle={this.props.SinkerStyle}
      LineTest={this.props.LineTest}
      LineStyle={this.props.LineStyle}
      LineColor={this.props.LineColor}
      ImgCaption={this.props.ImgCaption}
      photo={this.props.Photo}/>
            </div>
          </div>
        </div>;

      case 'trip':
        return <div className="App">
          <div className="main-container">
            <NavLeft viewCatchData={this.viewCatchData} viewCharts={this.viewCharts} viewCatchForm={this.viewCatchForm} viewTripData={this.viewTripData} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
            <div className="main-display">
              <TableDisplay TripTbl={this.state.TripTbl} key={this.ID} Trip={this.props.Trip} StartDate={this.props.StartDate} Duration={this.props.Duration}
                Place={this.props.Place} Photos={this.props.Photos} Notes={this.props.Notes} Anglers={this.props.Anglers} Gps1={this.props.GPS1} Gps2={this.props.GPS2} ImgCaption={this.props.ImgCaption} />
            </div>
          </div>
        </div>;

      case 'tripForm':
        return <div className="App">
          <div className="main-container">
            <NavLeft viewCatchData={this.viewCatchData} viewCharts={this.viewCharts} viewCatchForm={this.viewCatchForm} viewTripData={this.viewTripData} handleSubmit={this.handleSubmit} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
            <div className="main-display">
              <TripFrm handleSubmit={this.handleSubmit} TripTbl={this.state.TripTbl} key={this.ID} Trip={this.props.Trip} StartDate={this.props.StartDate} Duration={this.props.Duration}
                changeHandler={this.changeHandler} Place={this.props.Place} Photos={this.props.Photos} Notes={this.props.Notes} Anglers={this.props.Anglers} GPS1={this.props.GPS1} GPS2={this.props.GPS2} ImgCaption={this.props.ImgCaption} />
            </div>
          </div>
        </div>;

      case 'catchTable':
        return <div className="App">
          <div className="main-container">
            <NavLeft viewCatchForm={this.viewCatchForm} viewCharts={this.viewCharts} viewCatchData={this.viewCatchData} viewTripData={this.viewTripData} handleSubmit={this.handleSubmit} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
            <div className="main-display">
              <CatchTableDisplay viewCatchTableData={this.viewCatchData} />
            </div>
          </div>
        </div>;

     case 'charts':
     return <div className="App">
       <div className="main-container">
         <NavLeft viewCatchForm={this.viewCatchForm} viewCharts={this.viewCharts} viewCatchData={this.viewCatchData} viewTripData={this.viewTripData} handleSubmit={this.handleSubmit} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
         <div className="main-display">
           <Charts />
         </div>
       </div>
     </div>;
   
        };
  }
}




export default App;
