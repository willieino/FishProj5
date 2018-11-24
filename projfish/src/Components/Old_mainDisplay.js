/* import React, { Component } from 'react'; */
import '../App.css';
import CatchData from "./CatchData"
import tblStyle from "../Tables/tbl-Style"
import tripTbl from "../Tables/tripTbl"
import TripData from "./TripData";
import TripFrm from "./TripFrm";


class MainDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewTrip: false,
      enterTrip: this.props.enterTrip
    }
    console.log("in the main")
    console.log(this.state)
    console.log("this props veiewtrip:")
    console.log(this.props.viewTrip)
  }

  componentDidMount() {
    this.setState = ({  viewTrip: this.props.viewTrip })
    console.log("in the maindisplay component did mount")
    console.log(this.state)
  }

  render() {


    if (this.state.viewTrip) return <div className="main-display">{tripTbl.map((trips, index) => {
    return <TripData key={trips.ID}  trip={trips.Trip}  startDate={trips.StartDate}  duration={trips.Duration}  
    place={trips.Place}  photos={trips.Photos}  notes={trips.Notes}  anglers={trips.Anglers}  gps1={trips.GPS1}  gps2={trips.GPS2}  imgCaption={trips.ImgCaption}/>})} </div>
    return <div className="main-display"><TripFrm /></div>;


  }
}

export default MainDisplay;




