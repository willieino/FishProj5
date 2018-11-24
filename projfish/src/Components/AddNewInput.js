import React, { Component } from 'react';
/* import tripTbl from "../Tables/tripTbl" */
import '../App.css';

class AddNewInput extends Component {
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
            viewTrip: true,
            enterTrip: false
        }

    }

    componentDidMount() {
      //  console.log("in the addnewinput component did mount")
      //  console.log(this.state)
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

            <div className="input-side-container">
               {/*  <form className="trip-side-form" onSubmit={this.props.handleSubmit}> */}
                    <div className="trip-header">Enter your new Item and Press Submit finished.</div>
                   
               {/*  </form> */}
            </div>



        );
    }
}

export default AddNewInput;