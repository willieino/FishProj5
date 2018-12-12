import React, { Component } from 'react';
import TripTbl from "../Tables/tripTbl" 
import '../App.css';
//import Place from "./Place";
import TblLocation from "../Tables/tblLocation";

class TripFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: "",
      startDate: "",
      duration: 0,
      place: "",
      photos: "",
      notes: "",
      anglers: "",
      Gps1: "",
      Gps2: "",
      imgCaption: "",
      viewTrip: "",
      TripTbl: [],
      TblLocation: [],
    }
    
  }

  componentDidMount() {
    const places = TblLocation;
   // this.setState = () => ({ TripTbl: TripTbl, TblLocation: places })
    this.setState(() => ({ TripTbl: TripTbl, TblLocation: places }));
    //console.log("in the tripfrm component did mount")
   // console.log(this.state)
  }




  handleChange = (event) => {
    const target = event.target;

    const value = target.value;
    const name = target.name;
    console.log("value:", value)
    console.log("name:", name)
    console.log("target:", target)

   /*  this.setState({
      [name]: value
    
    }); */
    this.setState(() => ({ place: target.value  }));
   console.log("this state select", this.state.place)


  }

  render() {
    let places = this.state.TblLocation;
    console.log("places", places)
    let optionItems = places.map((place) =>
            <option key={place.ID} value={place.Place} name={place.Place}>{place.Place}</option>
        );
    return (
      <form className="trip-form" onSubmit={this.props.handleSubmit}>
        <div className="trip-container">
          <div className="input-container"> 
            <div className="trip-header">Enter your trip data. Press Save when finished.</div>
            <div className="trip-text">Trip Name: </div>
            <input type="text" id="dragMe" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
            <div className="trip-text">Start Date: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="StartDate" />
            <div className="trip-text">Duration: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Duration" />
            <div className="trip-text">Place:</div>
            <select className="select-place" value={this.props.value} name="Place" onChange={this.props.changeHandler}>
             
                 {optionItems}
                 <option>Add New Place</option>
             </select>
            <div className="trip-text">Notes: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Notes" />
            <div className="trip-text">Anglers: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Anglers" />
            <div className="trip-text">GPS1: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="GPS1" />
            <div className="trip-text">GPS2: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="GPS2" />
            <div className="trip-text">Photos: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Photos" />
            <div className="trip-text">Image Caption: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="ImgCaption" />
            <button className="save-trip-data" value="SaveTripData" onClick={this.props.handleSubmit} name="SaveTripData">Save Changes</button>
           <div className="button-cluster"><div className="prev-btn"></div><div className="save-btn" onClick={this.props.handleSubmit}></div><div className="next-btn"></div></div>
          </div>
        </div>
      </form>
    );
  }
}


export default TripFrm;