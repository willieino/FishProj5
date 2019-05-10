import React, { Component } from 'react';
import TblLunarPhase from "../Tables/tblLunarPhase";
import TblHookType from "../Tables/tblHookType";
import TblLineColor from "../Tables/tblLineColor";
import TblSpecies from "../Tables/tblSpecies";
import TblLineStyle from "../Tables/tblLineStyle";
import TblLineTest from "../Tables/tblLineTest";
import TblSinkerWeight from "../Tables/tblSinkerWeight";
import TblSinkerStyle from "../Tables/tblSinkerStyle";
import TblHookSize from "../Tables/tblHookSize";
//import TblBait from "../Tables/tblBait";
//import TblBaitColor from "../Tables/tblBaitColor";
import TblSky from "../Tables/tblSky";
import TblOutcome from "../Tables/tblOutcome";
import TblWindDirection from "../Tables/tblWindDirection";
import ImageUploader from 'react-images-upload';
import axios from "axios";
import '../Css/CatchFrm.css';
import Tilt from 'react-vanilla-tilt';


class CatchFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "",
      photos: "",
      currentSection: "",
      // currentPhase: "",
      // currentHookType: "",
      // currentLineColor: "",
      //currentLineStyle: "",
      //currentWindDirection: "",
      //CurrentSkyCondition: "",
      //currentHookSize: "",
      imgCaption: "",
      viewTrip: "",
      data: [],
      //TblLunarPhases: [],
      TblWindDirection: [],
      TblSpecies: [],
      TblLunarPhase: [],
      TblHookType: [],
      TblLineColor: [],
      TblLineStyle: [],
      TblLineTest: [],
      TblHookSize: [],
      TblSky: [],
      TblBait: [],
      TblBaitColor: [],
      TblSinkerWeight: [],
      TblSinkerStyle: [],
      TblOutcome: [],
      pictures: []
    }
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    localStorage.setItem('viewTrip', "catch");
    let pageType = 'catch';
    const section = "fish";

    axios
      .get('http://localhost:5050/api/bait')
      .then(response => {
        this.setState(() => ({ TblBait: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });

    axios
      .get('http://localhost:5050/api/baitColor')
      .then(response => {
        this.setState(() => ({ TblBaitColor: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });


    this.setState(() => ({
      currentSection: section,
      viewTrip: pageType,
      TblLunarPhase: TblLunarPhase,
      TblHookType: TblHookType,
      TblLineColor: TblLineColor,
      TblLineStyle: TblLineStyle,
      TblSpecies: TblSpecies,
      TblWindDirection: TblWindDirection,
      TblHookSize: TblHookSize,
      TblSinkerWeight: TblSinkerWeight,
      TblSinkerStyle: TblSinkerStyle,
      TblLineTest: TblLineTest,
      TblSky: TblSky,
      //TblBait: TblBait,
      // TblBaitColor: TblBaitColor,
      TblOutcome: TblOutcome
    }));
    console.log("state:", this.state)
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  /*  handleChange = (event) => {
     const target = event.target;
     const value = target.value;
     const name = target.name;
     this.setState(() => ({ [name]: target.value }));
     console.log("this state select", this.state)
   }
  */

  render() {
    /*  let classNames = require('classnames');
     let temp = this.state.currentSection;
     ((temp % 2) === 0) ? temp = false : temp = true;
     // console.log("temp", temp)
     let catchTableRow = classNames({
       'column2': true,
       'hi-lite': temp
     }) */
    const currentPhases = this.state.TblLunarPhase;
    let optionItems1 = currentPhases.map((currentPhase) =>
      <option key={currentPhase.ID} value={currentPhase.LunarPhase} name={currentPhase.LunarPhase}>{currentPhase.LunarPhase}</option>
    );
    const currentHookTypes = this.state.TblHookType;
    let optionItems2 = currentHookTypes.map((currentHookType) =>
      <option key={currentHookType.ID} value={currentHookType.HookType} name={currentHookType.HookType}>{currentHookType.HookType}</option>
    );
    const currentLineColors = this.state.TblLineColor;
    let optionItems4 = currentLineColors.map((currentLineColor) =>
      <option key={currentLineColor.ID} value={currentLineColor.LineColor} name={currentLineColor.LineColor}>{currentLineColor.LineColor}</option>
    );
    const currentLineStyles = this.state.TblLineStyle;
    let optionItems3 = currentLineStyles.map((currentLineStyle) =>
      <option key={currentLineStyle.ID} value={currentLineStyle.LineStyle} name={currentLineStyle.LineStyle}>{currentLineStyle.LineStyle}</option>
    );
    const currentSpecies = this.state.TblSpecies;
    let optionItems5 = currentSpecies.map((current) =>
      <option key={current.ID} value={current.Species} name={current.Species}>{current.Species}</option>
    );
    const currentWindDirection = this.state.TblWindDirection;
    let optionItems6 = currentWindDirection.map((wind) =>
      <option key={wind.ID} value={wind.Direction}>{wind.Direction}</option>
    );
    const currentHookSize = this.state.TblHookSize;
    let optionItems7 = currentHookSize.map((hook) =>
      <option key={hook.ID} value={hook.HookSize}>{hook.HookSize}</option>
    );
    const currentSinkerStyle = this.state.TblSinkerStyle;
    let optionItems8 = currentSinkerStyle.map((item) =>
      <option key={item.ID} value={item.SinkerStyle}>{item.SinkerStyle}</option>
    );
    const currentSinkerWeight = this.state.TblSinkerWeight;
    let optionItems9 = currentSinkerWeight.map((item) =>
      <option key={item.ID} value={item.SinkerWeight}>{item.SinkerWeight}</option>
    );
    const currentSky = this.state.TblSky;
    const optionItems10 = currentSky.map((item) =>
      <option key={item.ID} value={item.Sky}>{item.Sky}</option>
    );
    const currentBait = this.state.TblBait;
    let optionItems11 = currentBait.map((item) =>
      <option key={item.ID} value={item.Bait}>{item.Bait}</option>
    );
    const currentBaitColor = this.state.TblBaitColor;
    let optionItems12 = currentBaitColor.map((item) =>
      <option key={item.ID} value={item.BaitColor}>{item.BaitColor}</option>
    );
    const currentOutcome = this.state.TblOutcome;
    let optionItems13 = currentOutcome.map((item) =>
      <option key={item.ID} value={item.Outcome}>{item.Outcome}</option>
    );
    const currentLineTest = this.state.TblLineTest;
    let optionItems14 = currentLineTest.map((item) =>
      <option key={item.ID} value={item.LineTest}>{item.LineTest}</option>
    );
    return (
      <form className="catch-form" onSubmit={this.props.catchSubmit}>
        <div className="catch-container">
          <div className="catch-header">
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
          <div className="input-catch-container">

            <div className="fishSection">
              <h3>Fish Section:</h3>
              <div className="catch-text">Trip Name:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
              <div className="catch-text">Catch Date:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="CatchDate" />
              <div className="catch-text">Species:</div>
              <select className="select-lunarphase" value={this.props.value} name="Species" onChange={this.props.handleChange}>
                {optionItems5}
              </select>
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
              <select className="select-lunarphase" value={this.props.value} name="Outcome" onChange={this.props.handleChange}>
                {optionItems13}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Outcome" /> */}
              <div className="catch-text">Fishing Style:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Style" />
              <div className="catch-text">Bait Type:</div>
              <select className="select-lunarphase" value={this.props.value} name="Bait" onChange={this.props.handleChange}>
                {optionItems11}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Bait" /> */}
              <div className="catch-text">Bait Color:</div>
              <select className="select-lunarphase" value={this.props.value} name="BaitColor" onChange={this.props.handleChange}>
                {optionItems12}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="BaitColor" /> */}
              <div className="catch-text">Notes:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Notes" /></div>

            <Tilt options={{
              reverse: false,  // reverse the tilt direction
              max: 35,     // max tilt rotation (degrees)
              perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
              speed: 300,    // Speed of the enter/exit transition
              transition: true,   // Set a transition on enter/exit.
              axis: null,   // What axis should be disabled. Can be X or Y.
              reset: true,   // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
              glare: false,   // if it should have a "glare" effect
              "max-glare": 1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
              "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
              // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
            }}>
              < div className="weatherSection" >
                <h3>Weather Section:</h3>
                <div className="catch-text">Air Temp:</div>
                <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="AirTemp" />
                <div className="catch-text">Wind Direction:</div>
                <select className="select-lunarphase" value={this.props.value} name="WindDirection" onChange={this.props.handleChange}>
                  {optionItems6}
                </select>
                {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WindDirection" /> */}
                <div className="catch-text">Wind Speed:</div>
                <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Wind" />
                <div className="catch-text">Sky Condition:</div>
                <select className="select-lunarphase" value={this.props.value} name="Sky" onChange={this.props.handleChange}>
                  {optionItems10}
                </select>
                {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SkyCondition" /> */}
                <div className="catch-text"> Lunar Phase: </div>
                <select className="select-lunarphase" value={this.props.value} name="LunarPhase" onChange={this.props.handleChange}>
                  {optionItems1}
                </select>
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
            </Tilt>
            <div className="equipmentSection">
              <h3>Equipment Section:</h3>
              <div className="catch-text">Rod (Make/Model/Manf):</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Rod" />
              <div className="catch-text">Reel (Make/Model/Manf):</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Reel" />
              <div className="catch-text">Hook Size:</div>
              <select className="select-lunarphase" value={this.props.value} name="HookSize" onChange={this.props.handleChange}>
                {optionItems7}
              </select>
              {/*  <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="HookSize" /> */}
              <div className="catch-text">Hook Type:</div>
              <select className="select-lunarphase" value={this.props.value} name="HookType" onChange={this.props.handleChange}>
                {optionItems2}
              </select>
              <div className="catch-text">Sinker Weight:</div>
              <select className="select-lunarphase" value={this.props.value} name="SinkerWeight" onChange={this.props.handleChange}>
                {optionItems9}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerWeight" /> */}
              <div className="catch-text">Sinker Style:</div>
              <select className="select-lunarphase" value={this.props.value} name="SinkerStyle" onChange={this.props.handleChange}>
                {optionItems8}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerStyler" /> */}
              <div className="catch-text">Line Test:</div>
              <select className="select-lunarphase" value={this.props.value} name="LineTest" onChange={this.props.handleChange}>
                {optionItems14}
              </select>
              {/* <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineTest" /> */}
              <div className="catch-text">Line Style:</div>
              <select className="select-lunarphase" value={this.props.value} name="LineStyle" onChange={this.props.handleChange}>
                {optionItems3}
              </select>
              <div className="catch-text">Line Color:</div>
              <select className="select-lunarphase" value={this.props.value} name="LineColor" onChange={this.props.handleChange}>
                {optionItems4}
              </select>
            </div>

            <div className="photoSection"><h3>Photo Upload:</h3>
              <div className="catch-text">Image Caption:</div>
              <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="ImgCaption" />
              <div className="catch-text">Image:</div>
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
              {/*  <input type="text" id="file-upload" className="catch" value={this.props.value} placeholder="click here to upload an image..." onChange={this.props.changeHandler} name="Photo" /> */}
              <div className="image-holder"> pic goes here </div>
            </div>
            <button className="save-catch-data" value="SaveCatchData" onSubmit={this.props.catchSubmit} name="SaveCatchData">Save Changes</button>
          </div >
        </div >
      </form >
    );
  }
}

export default CatchFrm;