import React, { Component } from 'react';
import '../Css/Charts.css';
import CatchTbl from "../Tables/catchTbl";
import CatchHeaders from "../Tables/catchHeaders";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
//import ReactTable from "react-table";
import "react-table/react-table.css";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      TripTbl: [],
      CatchTbl: [],
      CatchHeaders: [],
      chartToDisplay: "",
      enterTrip: false,
      color: "",
      fishy: [],
      xBar: "",
      xLabel: "",
      chartType: "",
    })
  }

  componentDidMount() {

    this.setState(() => ({ CatchTbl: CatchTbl, CatchHeaders: CatchHeaders }));
  }

  handleSkillsCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser:
        { ...prevState.newUser, skills: newSelectionArray }
    })
    )
  }


  chartBaitType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Bait]) {
        tally[item.Bait] = 1;
      } else {
        tally[item.Bait] = tally[item.Bait] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Bait: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Bait Type:"
    const tmp = "Bait"
    const barColor = '#463dfc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartFishCaught = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Species]) {
        tally[item.Species] = 1;
      } else {
        tally[item.Species] = tally[item.Species] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Species: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Fish Species:"
    let tmp = "Species"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartAngler = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Angler]) {
        tally[item.Angler] = 1;
      } else {
        tally[item.Angler] = tally[item.Angler] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Angler: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Angler:"
    let tmp = "Angler"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartRodType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Rod]) {
        tally[item.Rod] = 1;
      } else {
        tally[item.Rod] = tally[item.Rod] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Rod: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Fishing Rod:"
    let tmp = "Rod"
    let barColor = '#463dfc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartLineType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.LineStyle]) {
        tally[item.LineStyle] = 1;
      } else {
        tally[item.LineStyle] = tally[item.LineStyle] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        LineStyle: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Fishing Line Type:"
    let tmp = "LineStyle"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartBaitColor = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.BaitColor]) {
        tally[item.BaitColor] = 1;
      } else {
        tally[item.BaitColor] = tally[item.BaitColor] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        BaitColor: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Bait Color:"
    let tmp = "BaitColor"
    let barColor = '#fc3d8d';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartFishStyle = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Style]) {
        tally[item.Style] = 1;
      } else {
        tally[item.Style] = tally[item.Style] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Style: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Fishing Style"
    let tmp = "Style"
    let barColor = '#f9fc3d';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartLocation = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Location]) {
        tally[item.Location] = 1;
      } else {
        tally[item.Location] = tally[item.Location] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Location: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Location"
    let tmp = "Location"
    let barColor = '#ff0707';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartAirTemp = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.AirTemp]) {
        tally[item.AirTemp] = 1;
      } else {
        tally[item.AirTemp] = tally[item.AirTemp] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        AirTemp: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Air Temperature"
    let tmp = "AirTemp"
    let barColor = '#e7a923';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartSkyCondition = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.SkyCondition]) {
        tally[item.SkyCondition] = 1;
      } else {
        tally[item.SkyCondition] = tally[item.SkyCondition] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        SkyCondition: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Sky Condition"
    let tmp = "SkyCondition"
    let barColor = '#23e744';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartLunarPhase = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.LunarPhase]) {
        tally[item.LunarPhase] = 1;
      } else {
        tally[item.LunarPhase] = tally[item.LunarPhase] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        LunarPhase: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Lunar Phase:"
    let tmp = "LunarPhase"
    let barColor = '#4e237e7';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartPressure = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Pressure]) {
        tally[item.Pressure] = 1;
      } else {
        tally[item.Pressure] = tally[item.Pressure] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Pressure: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Pressure:"
    let tmp = "Pressure"
    let barColor = '#e7235e';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartWaterTemp = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.WaterTemp]) {
        tally[item.WaterTemp] = 1;
      } else {
        tally[item.WaterTemp] = tally[item.WaterTemp] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        WaterTemp: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Water Temp:"
    let tmp = "WaterTemp"
    let barColor = '#ff0707';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartWaterDepth = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.WaterDepth]) {
        tally[item.WaterDepth] = 1;
      } else {
        tally[item.WaterDepth] = tally[item.WaterDepth] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        WaterDepth: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Water Depth:"
    let tmp = "WaterDepth"
    let barColor = '#e7a923';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartBottom = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Bottom]) {
        tally[item.Bottom] = 1;
      } else {
        tally[item.Bottom] = tally[item.Bottom] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Bottom: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Bottom:"
    let tmp = "Bottom"
    let barColor = '#9ce723';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartWaterColor = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.WaterColor]) {
        tally[item.WaterColor] = 1;
      } else {
        tally[item.WaterColor] = tally[item.WaterColor] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        WaterColor: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Water Color:"
    let tmp = "WaterColor"
    let barColor = '#23e744';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartReel = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Reel]) {
        tally[item.Reel] = 1;
      } else {
        tally[item.Reel] = tally[item.Reel] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        Reel: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Reel:"
    let tmp = "Reel"
    let barColor = '#4e237e7';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartHookSize = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.HookSize]) {
        tally[item.HookSize] = 1;
      } else {
        tally[item.HookSize] = tally[item.HookSize] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        HookSize: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Hook Size:"
    let tmp = "HookSize"
    let barColor = '#ff0707';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartHookType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.HookType]) {
        tally[item.HookType] = 1;
      } else {
        tally[item.HookType] = tally[item.HookType] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        HookType: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Hook Type:"
    let tmp = "HookType"
    let barColor = '#e7a923';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartSinkerStyle = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.SinkerStyle]) {
        tally[item.SinkerStyle] = 1;
      } else {
        tally[item.SinkerStyle] = tally[item.SinkerStyle] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        SinkerStyle: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Sinker Style:"
    let tmp = "SinkerStyle"
    let barColor = '#9ce723';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartLineTest = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.LineTest]) {
        tally[item.LineTest] = 1;
      } else {
        tally[item.LineTest] = tally[item.LineTest] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        LineTest: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Line Test:"
    let tmp = "LineTest"
    let barColor = '#23e744';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  chartLineColor = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.LineColor]) {
        tally[item.LineColor] = 1;
      } else {
        tally[item.LineColor] = tally[item.LineColor] + 1;
      }
      return tally;
    }, {});
    for (const prop in test) {
      let fish = {
        LineColor: prop,
        Qty: test[prop]
      }
      tmpArray.push(fish);
    }
    const chartType = "By Line Color:"
    let tmp = "LineColor"
    let barColor = '#4e237e7';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor, chartType: chartType });
  }

  render() {


    return (
      <div className="chart-container"><div className="wrapper">
        <form className="nav-chart">
          <div className="container-btn">
            <div id="cicon1" className="nav-icon-1" onClick={this.chartFishCaught}></div>
            <button className="nav-button-n" value="chartFishCaught" onClick={this.chartFishCaught} name="chartFishCaught">By Species</button>
          </div>
          <div className="container-btn">
            <div id="cicon2" className="nav-icon-1" onClick={this.chartBaitType}></div>
            <button className="nav-button-n" value="chartBaitType" onClick={this.chartBaitType} name="chartBaitType">By Bait Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon3" className="nav-icon-1" onClick={this.chartAngler}></div>
            <button className="nav-button-n" value="chartAngler" onClick={this.chartAngler} name="chartAngler">By Angler</button>
          </div>
          <div className="container-btn">
            <div id="cicon4" className="nav-icon-1" onClick={this.chartRodType}></div>
            <button className="nav-button-n" value="chartRodType" onClick={this.chartRodType} name="chartRodType">By Rod Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon5" className="nav-icon-1" onClick={this.chartLineType}></div>
            <button className="nav-button-n" value="chartLineType" onClick={this.chartLineType} name="chartLineType">By Line Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon6" className="nav-icon-1" onClick={this.chartBaitColor}></div>
            <button className="nav-button-n" value="chartFishLocation" onClick={this.chartBaitColor} name="chartBaitColor">By Bait Color</button>
          </div>
          <div className="container-btn">
            <div id="cicon7" className="nav-icon-1" onClick={this.chartFishStyle}></div>
            <button className="nav-button-n" value="chartFishStyle" onClick={this.chartFishStyle} name="chartFishStyle">By Fishing Style</button>
          </div>
          <div className="container-btn">
            <div id="cicon8" className="nav-icon-1" onClick={this.chartLocation}></div>
            <button className="nav-button-n" value="chartLocation" onClick={this.chartFishCaught} name="chartLocation">By Location</button>
          </div>
          <div className="container-btn">
            <div id="cicon9" className="nav-icon-1" onClick={this.chartAirTemp}></div>
            <button className="nav-button-n" value="chartAirTemp" onClick={this.chartAirTemp} name="chartBaitType">By Air Temperature</button>
          </div>
          <div className="container-btn">
            <div id="cicon10" className="nav-icon-1" onClick={this.chartSkyCondition}></div>
            <button className="nav-button-n" value="chartSkyCondition" onClick={this.chartSkyCondition} name="chartSkyCondition">By Sky Condition</button>
          </div>
          <div className="container-btn">
            <div id="cicon11" className="nav-icon-1" onClick={this.chartLunarPhase}></div>
            <button className="nav-button-n" value="chartLunarPhase" onClick={this.chartLunarPhase} name="chartLunarPhase">By Lunar Phase</button>
          </div>
          <div className="container-btn">
            <div id="cicon12" className="nav-icon-1" onClick={this.chartPressure}></div>
            <button className="nav-button-n" value="chartPressure" onClick={this.chartPressure} name="chartPressure">By Pressure</button>
          </div>
          <div className="container-btn">
            <div id="cicon13" className="nav-icon-1" onClick={this.chartWaterTemp}></div>
            <button className="nav-button-n" value="chartWaterTemp" onClick={this.chartWaterTemp} name="chartWaterTemp">By Water Temperature</button>
          </div>
          <div className="container-btn">
            <div id="cicon14" className="nav-icon-1" onClick={this.chartWaterDepth}></div>
            <button className="nav-button-n" value="chartWaterDepth" onClick={this.chartWaterDepth} name="chartWaterDepth">By Water Depth</button>
          </div>
          <div className="container-btn">
            <div id="cicon15" className="nav-icon-1" onClick={this.chartBottom}></div>
            <button className="nav-button-n" value="chartBottom" onClick={this.chartBottom} name="chartBottom">By Bottom</button>
          </div>
          <div className="container-btn">
            <div id="cicon16" className="nav-icon-1" onClick={this.chartWaterColor}></div>
            <button className="nav-button-n" value="chartWaterColor" onClick={this.chartWaterColor} name="chartWaterColor">By Water Color</button>
          </div>
          <div className="container-btn">
            <div id="cicon17" className="nav-icon-1" onClick={this.chartReel}></div>
            <button className="nav-button-n" value="chartReel" onClick={this.chartReel} name="chartReel">By Reel</button>
          </div>
          <div className="container-btn">
            <div id="cicon18" className="nav-icon-1" onClick={this.chartHookSize}></div>
            <button className="nav-button-n" value="chartHookSize" onClick={this.chartHookSize} name="chartHookSize">By Hook Size</button>
          </div>
          <div className="container-btn">
            <div id="cicon19" className="nav-icon-1" onClick={this.chartHookType}></div>
            <button className="nav-button-n" value="chartHookType" onClick={this.chartHookType} name="chartHookType">By Hook Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon20" className="nav-icon-1" onClick={this.chartSinkerStyle}></div>
            <button className="nav-button-n" value="chartSinkerStyle" onClick={this.chartSinkerStyle} name="chartSinkerStyle">By Sinker Style</button>
          </div>
          <div className="container-btn">
            <div id="cicon21" className="nav-icon-1" onClick={this.chartLineTest}></div>
            <button className="nav-button-n" value="chartLineTest" onClick={this.chartLineTest} name="chartLineTest">By Line Test</button>
          </div>
          <div className="container-btn">
            <div id="cicon22" className="nav-icon-1" onClick={this.chartLineColor}></div>
            <button className="nav-button-n" value="chartLineColor" onClick={this.chartLineColor} name="chartLineColor">By Line Color</button>
          </div>
        </form></div>
        <div className="charts"><div className="chart-type">{this.state.chartType}</div>
          <div className="chart-container2">
            <BarChart width={650} height={400} data={this.state.fishy}>
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={this.state.xBar} />
              <YAxis label={{ value: this.state.xLabel, angle: -90, position: 'insideLeft' }} />
              <Bar dataKey='Qty' fill={this.state.color} />
            </BarChart></div>
        </div>
      </div>


    );



  }
}

export default Charts;


//let xls = [];
//let found = "";
//function cb (v, i, arr) {
//    found = arr[i].shirt_size.indexOf("XL");
//    if (found !== -1) {
//        xls.push(arr[i].last_name);
//   }
//}
//runners.forEach(cb);
//console.log(xls);

/* const count = TripTbl.reduce((tally, Species) => {
  tally[Species] = (tally[Species] || 0) + 1;
  return tally;
}, {}) */


/* {[ { Header: "Name", columns: [ { Header: "Species", accessor: "Species" }, { Header: "Location", id: "id",  accessor: "Location" } ]
                },
                { Header: "Info", columns: [ { Header: "Angler",  accessor: "Angler" },
                    {
                      Header: "Bait",
                      accessor: "Bait"
                    }
                  ]
                },
                {
                  Header: 'Stats',
                  columns: [
                    {
                      Header: "Weight",
                      accessor: "Weight"
                    }
                  ]
                }
              ]} */