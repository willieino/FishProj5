import React, { Component } from 'react';
import '../Css/CatchFrm.css';
//import AddNewInput from "./AddNewInput";
//import data from "../Tables/tblBait"

class CatchFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catch: "",
      startDate: "",
      duration: 0,
      place: "",
      photos: "",
      notes: "",
      anglers: "",
      gps1: "",
      gps2: "",
      imgCaption: "",
      editor: "",
      viewTrip: "",
      data: []
    }
  }

  componentDidMount() {
    localStorage.setItem('viewTrip', "catch");
    //let pageType = 'catch'

    this.setState(() => ({ viewTrip: this.pageType, data: this.data }));
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  render() {

    return (
      <form className="catch-form" onSubmit={this.props.catchSubmit}>
        <div className="catch-container"><div className="catch-header">Enter your Catch Info. Press Save when finished.</div>
          <div className="input-catch-container">

            <div className="catch-text">Trip Name:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
            <div className="catch-text">Catch Date:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="CatchDate" />
            <div className="catch-text">Species:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Species" />
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
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Notes" />
            <div className="catch-text">Air Temp:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="AirTemp" />
            <div className="catch-text">Wind Direction:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="WindDirection" />
            <div className="catch-text">Wind Speed:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Wind" />
            <div className="catch-text">Sky Condition:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SkyCondition" />
            <div className="catch-text">Lunar Phase: </div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LunarPhase" />
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
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Seas" />
            <div className="catch-text">Rod (Make/Model/Manf):</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Rod" />
            <div className="catch-text">Reel (Make/Model/Manf):</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="Reel" />
            <div className="catch-text">Hook Size:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="HookSize" />
            <div className="catch-text">Hook Type:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="HookType" />
            <div className="catch-text">Sinker Weight:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerWeight" />
            <div className="catch-text">Sinker Style:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="SinkerStyler" />
            <div className="catch-text">Line Test:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineTest" />
            <div className="catch-text">Line Color:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="LineColor" />
            <div className="catch-text">Image Caption:</div>
            <input type="text" className="catch" value={this.props.value} onChange={this.props.changeHandler} name="ImgCaption" />
            <div className="catch-text">Image:</div>
            <input type="text" id="file-upload" className="catch" value={this.props.value} placeholder="upload image file..." onChange={this.props.changeHandler} name="Photo" />
            <button className="save-catch-data" value="SaveCatchData" onSubmit={this.props.catchSubmit} name="SaveCatchData">Save Changes</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CatchFrm;