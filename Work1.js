import { getRadioUtilityClass } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { Component } from "react";

export default class Work1 extends Component {
  state = {
    titleMessage: "React State",
    timeValue: new Date(),
  };
  makeTimeChanges = () => {
    this.setState({ timeValue: new Date() });
  };
  
  render() {
    setInterval(() => {
      this.setState({ timeValue: new Date() });
    }, 1000);

    return (
      <div className="container-fluid d-flex justify-content-end pt-3">
        <h4
          id="time"
          style={{
            fontFamily: "serif",
            fontSize: "18px",
            wordSpacing: "3px",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "lightblue",
            border: "3px solid gray",
            fontWeight: "600",
          }}
        >
          {this.state.timeValue.getHours() +
            ":" +
            this.state.timeValue.getMinutes() +
            ":" +
            this.state.timeValue.getSeconds() +
            ""}
        </h4>
      </div>
    );
  }
}
