import React, { Component } from 'react';
import TblLunarPhase from "../Tables/tblLunarPhase";
import TblHookType from "../Tables/tblHookType";
import TblLineColor from "../Tables/tblLineColor";
import TblSpecies from "../Tables/tblSpecies";
import TblLineStyle from "../Tables/tblLineStyle";

import '../Css/CatchFrm.css';


class CatchFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "",
      photos: "",
      currentSection: "",
      currentPhase: "",
      currentHookType: "",
      currentLineColor: "",
      currentLineStyle: "",
      currentWindDirection: "",
      CurrentSkyCondition: "",
      imgCaption: "",
      viewTrip: "",
      data: [],
      TblLunarPhases: [],      
      TblWindDirection: [],
      TblSpecies: [],
      TblLunarPhase: [],
      TblHookType: [],
      TblLineColor: [],
      TblLineStyle: [],
    }

  }

  componentDidMount() {
    localStorage.setItem('viewTrip', "catch");
    let pageType = 'catch';
    const section = "fish";
    const lunarPhase = TblLunarPhase;
    const hookType = TblHookType;
    const lineColor = TblLineColor;
    const lineStyle = TblLineStyle;
    const species = TblSpecies;
    this.setState(() => ({
      currentSection: section,
      viewTrip: pageType,
      TblLunarPhase: lunarPhase,
      TblHookType: hookType,
      TblLineColor: lineColor,
      TblLineStyle: lineStyle,
      TblSpecies: species
    }));
    console.log("state:", this.state)
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(() => ({ [name]: target.value }));
    console.log("this state select", this.state.currentPhase)
  }


  render() {
    let classNames = require('classnames');
    let temp = this.state.currentSection;
    ((temp % 2) === 0)? temp = false: temp = true;
   // console.log("temp", temp)
		let catchTableRow = classNames({
			'column2': true,
			'hi-lite': temp
		})
    let currentPhases = this.state.TblLunarPhase;
    let optionItems = currentPhases.map((currentPhase) =>
      <option key={currentPhase.ID} value={currentPhase.LunarPhase} name={currentPhase.LunarPhase}>{currentPhase.LunarPhase}</option>
    );
    let currentHookTypes = this.state.TblHookType;
    let optionItems2 = currentHookTypes.map((currentHookType) =>
      <option key={currentHookType.ID} value={currentHookType.HookType} name={currentHookType.HookType}>{currentHookType.HookType}</option>
    );
    let currentLineColors = this.state.TblLineColor;
    let optionItems4 = currentLineColors.map((currentLineColor) =>
      <option key={currentLineColor.ID} value={currentLineColor.LineColor} name={currentLineColor.LineColor}>{currentLineColor.LineColor}</option>
    );
    let currentLineStyles = this.state.TblLineStyle;
    let optionItems3 = currentLineStyles.map((currentLineStyle) =>
      <option key={currentLineStyle.ID} value={currentLineStyle.LineStyle} name={currentLineStyle.LineStyle}>{currentLineStyle.LineStyle}</option>
    );
    let currentSpecies = this.state.TblSpecies;
    let optionItems5 = currentSpecies.map((current) =>
      <option key={current.ID} value={current.Species} name={current.Species}>{current.Species}</option>
    );
    return (
      <form className="catch-form" onSubmit={this.props.catchSubmit}>
        <div className="catch-container"><div className="catch-header">
          <div className="container-btn">
            <div id="nav-dicon1" className="nav-catch-icon-1" onClick={this.fishSection}></div>
            <button className="nav-button-o" value="fishSection" onClick={this.fishSection} name="fishSection">Fish Info</button>
          </div>
          <div className="container-btn">
            <div id="nav-dicon2" className="nav-catch-icon-1" onClick={this.weatherSection}></div>
            <button className="nav-button-o" value="weatherSection" onClick={this.weatherSection} name="weatherSection">Weather Info</button>
          </div>
          <div className="container-btn">
            <div id="nav-dicon3" className="nav-catch-icon-1" onClick={this.equipmentSection}></div>
            <button className="nav-button-o" value="equipmentSection" onClick={this.equipmentSection} name="equipmentSection">Equipment Info</button>
          </div>
          <div className="container-btn">
            <div id="nav-dicon4" className="nav-catch-icon-1" onClick={this.environmentInfo}></div>
            <button className="nav-button-o" value="environmentInfo" onClick={this.environmentInfo} name="environmentInfo">Environment Info</button>
          </div>
          <div className="container-btn">
            <div id="nav-dicon5" className="nav-catch-icon-1" onClick={this.photoSection}></div>
            <button className="nav-button-o" value="photoSection" onClick={this.photoSection} name="photoSection">Photos</button>
          </div>
        </div>
          <div className="input-catch-container"><div className="fishSection"><h2>Fish Section:</h2>
            <div className="catch-text">Trip Name:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
            <div className="catch-text">Catch Date:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="CatchDate" />
            <div className="catch-text">Species:</div>
            <select className="select-lunarphase" value={this.props.value} name="currentSpecies" onChange={this.props.changeHandler}>
                {optionItems5}
              </select>
            {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Species" /> */}
            <div className="catch-text">Location:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Location" />
            <div className="catch-text">Angler:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Angler" />
            <div className="catch-text">Quantity:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Quantity" />
            <div className="catch-text">Weight:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Weight" />
            <div className="catch-text">Length:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Length" />
            <div className="catch-text">Girth:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Girth" />
            <div className="catch-text">Fight Time:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="FightTime" />
            <div className="catch-text">Outcome:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Outcome" />
            <div className="catch-text">Fishing Style:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Style" />
            <div className="catch-text">Bait Type:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Bait" />
            <div className="catch-text">Bait Color:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="BaitColor" />
            <div className="catch-text">Notes:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Notes" /></div>
            <div className="weatherSection"><h2>Weather Section:</h2>
              <div className="catch-text">Air Temp:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="AirTemp" />
              <div className="catch-text">Wind Direction:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WindDirection" />
              <div className="catch-text">Wind Speed:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Wind" />
              <div className="catch-text">Sky Condition:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SkyCondition" />
              <div className="catch-text"> Lunar Phase: </div>
              <select className="select-lunarphase" value={this.props.value} name="currentPhase" onChange={this.props.changeHandler}>
                {optionItems}
              </select>
              {/*   <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LunarPhase" /> */}
              <div className="catch-text">Pressure:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Pressure" />
              <div className="catch-text">Barometer:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Barometer" />
              <div className="catch-text">Water Temp:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WaterTemp" />
              <div className="catch-text">Water Depth:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WaterDepth" />
              <div className="catch-text">Water Ph:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WaterPh" />
              <div className="catch-text">Current:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Current" />
              <div className="catch-text">Bottom Surface:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Bottom" />
              <div className="catch-text">Water Color:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WaterColor" />
              <div className="catch-text">Tide:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Tide" />
              <div className="catch-text">Water Level:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WaterLevel" />
              <div className="catch-text">Seas:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Seas" /></div>
            <div className="equipmentSection"><h2>Equipment Section:</h2>
              <div className="catch-text">Rod (Make/Model/Manf):</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Rod" />
              <div className="catch-text">Reel (Make/Model/Manf):</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Reel" />
              <div className="catch-text">Hook Size:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="HookSize" />
              <div className="catch-text">Hook Type:</div>
              <select className="select-lunarphase" value={this.props.value} name="currentHookType" onChange={this.props.changeHandler}>
                {optionItems2}
              </select>
             {/*  <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="HookType" /> */}
              <div className="catch-text">Sinker Weight:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerWeight" />
              <div className="catch-text">Sinker Style:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerStyler" />
              <div className="catch-text">Line Test:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineTest" />
              <div className="catch-text">Line Style:</div>
              <select className="select-lunarphase" value={this.props.value} name="currentLineStyle" onChange={this.props.changeHandler}>
                {optionItems3}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineStyle" /> */}
              <div className="catch-text">Line Color:</div>
              <select className="select-lunarphase" value={this.props.value} name="currentLineColor" onChange={this.props.changeHandler}>
                {optionItems4}
              </select>
             {/*  <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineColor" /> */}</div>
            <div className="photoSection"><h2>Photo Upload:</h2>
              <div className="catch-text">Image Caption:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="ImgCaption" />
              <div className="catch-text">Image:</div>
              <input type="text" id="file-upload" className="catch" value={this.props.value} placeholder="click here to upload an image..." onChange={this.props.changeHandler} name="Photo" />
              <div className="image-holder"> pic goes here </div>
              </div>
            <button className="save-catch-data" value="SaveCatchData" onSubmit={this.props.catchSubmit} name="SaveCatchData">Save Changes</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CatchFrm;