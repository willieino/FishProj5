import React, { Component } from 'react';
//import TripTbl from "../Tables/tripTbl";
//import TableRow from "./TableRow";
import '../App.css';
//import TripHeaders from "../Tables/tripHeaders";
import ReactTable from "react-table";
import { render } from "react-dom";
import "react-table/react-table.css";
import axios from "axios";

class TableDisplay extends Component {
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
      gps1: "",
      gps2: "",
      imgCaption: "",
      viewTrip: null,
      enterTrip: false,
      TripTbl: [],
      TripHeaders: [],
    }
    this.renderEditable = this.renderEditable.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
    .get('http://localhost:5050/api/trip')
    .then(response => {
      this.setState(() => ({ TripTbl: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });

console.log("TripTbl", this.state.TripTbl)

   // this.setState(() => ({ TripTbl: TripTbl }));

  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.TripTbl];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
         console.log("data:", data)
          this.setState({ TripTbl: data });
         /*  axios
          .post('http://localhost:5050/api/trip', this.state.TripTbl)
          .then(response => {
           console.log("response:", response)
           // this.setState(() => ({ TripTbl: newTripRec }));
          })
          .catch(error => {
            console.error('Server Error', error);
          }); */
      




        }}
        dangerouslySetInnerHTML={{
          __html: this.state.TripTbl[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {

    return (
      <div className="table-display"><div className="trip2-header">Trip View Information:</div><div className="new-trip-table">
          <ReactTable
            data={this.state.TripTbl}
            columns={[
    { Header: "Trip Name", accessor: "Trip", Cell: this.renderEditable, width: 150},
    { Header: "Start Date", accessor: "StartDate", Cell: this.renderEditable, width: 100},
    { Header: "Duration", accessor: "Duration", Cell: this.renderEditable, width: 100},
    { Header: "Anglers", accessor: "Anglers", Cell: this.renderEditable, width: 150}, 
    { Header: "Location", accessor: "Place", Cell: this.renderEditable, width: 175,},
    { Header: "Notes", accessor: "Notes", Cell: this.renderEditable, width: 200},
    { Header: "GPS1", accessor: "GPS1", Cell: this.renderEditable, width: 75,},
    { Header: "GPS2", accessor: "GPS2", Cell: this.renderEditable, width: 75, },
    { Header: "Image Caption", accessor: "ImgCaption", Cell: this.renderEditable, width: 150},
    { Header: "Photos", accessor: "Photos", Cell: this.renderEditable, width: 175, },
]}

/* export default TripHeaders; */

            defaultPageSize={20}
            style={{
              height: "600px" 
            }}
            className="-striped -highlight"
          /></div> </div>
    );
  }
}

export default TableDisplay;