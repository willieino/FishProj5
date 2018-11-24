import React, { Component } from 'react';
import '../App.css';

class CatchTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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
      CatchTbl: [],
    }
  }

  render() {
    let classNames = require('classnames');
    let temp = this.props.id;
    ((temp % 2) === 0)? temp = false: temp = true;
   // console.log("temp", temp)
		let catchTableRow = classNames({
			'column2': true,
			'hi-lite': temp
		})
    return (
      <div className="catch-table-row">
        <div id="id" className={catchTableRow}>{this.props.id}</div>
        <div className={catchTableRow}>{this.props.species}</div>
        <div id="catchDate" className={catchTableRow}>{this.props.catchDate}</div>
        <div id="tripName" className={catchTableRow}>{this.props.trip}</div>
        <div id="location" className={catchTableRow}>{this.props.location}</div>
        <div id="angler" className={catchTableRow}>{this.props.angler}</div>
        <div className={catchTableRow}>{this.props.quantity}</div>
        <div className={catchTableRow}>{this.props.weight}</div>
        <div className={catchTableRow}>{this.props.length}</div>
        <div id="girth" className={catchTableRow}>{this.props.girth}</div>
        <div id="fightTime" className={catchTableRow}>{this.props.fightTime}</div>
        <div className={catchTableRow}>{this.props.outcome}</div>
        <div id="fish-style" className={catchTableRow}>{this.props.style}</div>
        <div className={catchTableRow}>{this.props.bait}</div>
        <div className={catchTableRow}>{this.props.baitColor}</div>
        <div id="catchNotes" className={catchTableRow}>{this.props.notes}</div>
        <div className={catchTableRow}>{this.props.airTemp}</div>
        <div className={catchTableRow}>{this.props.windDirection}</div>
        <div id="wind" className={catchTableRow}>{this.props.wind}</div>
        <div className={catchTableRow}>{this.props.skyCondition}</div>
        <div id="lunarPhase" className={catchTableRow}>{this.props.lunarPhase}</div>
        <div id="pressure" className={catchTableRow}>{this.props.pressure}</div>
        <div id="barometer" className={catchTableRow}>{this.props.barometer}</div>
        <div className={catchTableRow}>{this.props.waterTemp}</div>
        <div className={catchTableRow}>{this.props.waterDepth}</div>
        <div className={catchTableRow}>{this.props.waterPh}</div>
        <div className={catchTableRow}>{this.props.current}</div>
        <div className={catchTableRow}>{this.props.bottom}</div>
        <div className={catchTableRow}>{this.props.waterColor}</div>
        <div className={catchTableRow}>{this.props.tide}</div>
        <div className={catchTableRow}>{this.props.waterLevel}</div>
        <div id="seas" className={catchTableRow}>{this.props.seas}</div>
        <div id="rod" className={catchTableRow}>{this.props.rod}</div>
        <div id="reel" className={catchTableRow}>{this.props.reel}</div>
        <div className={catchTableRow}>{this.props.hookSize}</div>
        <div className={catchTableRow}>{this.props.hookType}</div>
        <div className={catchTableRow}>{this.props.sinkerWeight}</div>
        <div id="sinkerStyle" className={catchTableRow}>{this.props.sinkerStyle}</div>
        <div className={catchTableRow}>{this.props.lineTest}</div>
        <div className={catchTableRow}>{this.props.lineStyle}</div>
        <div className={catchTableRow}>{this.props.lineColor}</div>
        <div id="imgCaption" className={catchTableRow}>{this.props.imgCaption}</div>
        <div id="photo" className={catchTableRow}>{this.props.photo}</div>
      </div>
    );
  }
}

export default CatchTableRow;