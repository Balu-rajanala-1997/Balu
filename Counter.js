import React, { Component } from "react";
import "./demo.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  Red = () => {
    this.setState({ count: this.state.count + 2 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LightRed = () => {
    this.setState({ count: this.state.count + 4 });
    var enImg = (
      <img src="Iconsacconts.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LighterRed = () => {
    this.setState({ count: this.state.count + 6 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  Green = () => {
    this.setState({ count: this.state.count - 3 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LightGreen = () => {
    this.setState({ count: this.state.count - 4 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LighterGreen = () => {
    this.setState({ count: this.state.count + 7 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  Blue = () => {
    this.setState({ count: this.state.count - 8 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LightBlue = () => {
    this.setState({ count: this.state.count - 4 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }
  LighterBlue = () => {
    this.setState({ count: this.state.count - 2 });
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  }


  counterChanges = () => {
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ count: this.state.count + 2 });
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  };
  counterChanges1 = () => {
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    this.setState({ count: this.state.count - 2 });
    this.setState({ energyCounter: Math.trunc(this.state.count / 10) });
  };


  // ChangeTheme() {
  //   var themeCheckBox = document.getElementById("theme");
  //   var formContainer = document.getElementById("bodyContainer");
  //   if (themeCheckBox.checked) {
  //     formContainer.style.className = "dark-theme";
  //     // document.querySelector("formContainer").className = "btn btn-primary w-100";
  //   } else {
  //     formContainer.style.className = "light-theme";
  //   }
  // }

  render() {
    var enImg = (
      <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );
    var ab = [];
    for (let index = 0; index < this.state.energyCounter; index++) {
      if (this.state.energyCounter >= 1) {
        ab[index] = enImg;
      }
    }

    var energyCount = Math.trunc(this.state.count / 10);
    var coins = Math.trunc(this.state.count / 100)

    if (this.state.count == 100) {
      alert(`your score has ${this.state.count} reached`);
    }
    if (energyCount == 100) {
      alert(`Your Energy Level has ${energyCount} reached`);
    }
    const changeBattery = (cn) => {
      if (cn >= 0 && cn <= 3) {
        return 'red'
      } else if (cn >= 4 && cn <= 7) {
        return 'orange'
      } else {
        return 'green';
      }
    }
    return (
      <div
        id="formContainer"
        className="container-fluid  pt-3  "
        style={{ height: "110vh" }}
      >
        <div className="d-flex justify-content-center">
          <h2 className="ms-4 text-white">Counter</h2>
          <img src="iconsaccount.png" className="mt-0 ms-4" style={{ height: "50px", width: "50px" }} />
        </div>
        <div className="d-flex justify-content-center">
          <label className="ms-4 text-white" style={{ fontSize: '20px' }}>Counter : </label>&emsp;
          <h5 className="me-4 text-white">{this.state.count}</h5>
          <label className="ms-4 text-white" style={{ fontSize: '20px' }}>EnergyCounter :</label>&emsp;
          <h5 className="text-white">{energyCount + coins} </h5> &emsp; <i className="bi bi-battery-half" style={{ color: changeBattery(coins), fontSize: '23px' }}></i>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info text-white rounded rounded-3 m-3" onMouseEnter={this.counterChanges} style={{ marginTop: '100px' }}
          >
            Counter Increment
        </button>
          <button
            className="btn btn-info text-white rounded rounded-3 m-3" onMouseEnter={this.counterChanges1} style={{ marginTop: '100px' }}
          >
            Counter Decrement
        </button>
        </div>
        <div className="mx-2">
            <p className="">
              {ab.map((ele, ind) => {
                return <span key={ind}>{ele}</span>;
              })}
            </p>
          </div>
        <div className="mt-3" style={{ height: '280px' }}>
          <div className="d-flex justify-content-center">
            <div className="row" >
              <div className="col-3 text-center" onMouseEnter={this.Red} style={{ backgroundColor: '#ff0000', width: '300px', height: '80px' }} >
                <p style={{ color: 'white', paddingTop: '25px' }}>Red</p>
              </div>
              <div className="col-4 text-center" onMouseEnter={this.LightRed} style={{ backgroundColor: '#ff6666', width: '400px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Light-Red</p>
              </div>
              <div className="col-5 text-center"  onMouseEnter={this.LighterRed} style={{ backgroundColor: '#ffb3b3', width: '200px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Lighter-Red</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row">
              <div className="col-4 text-center"  onMouseEnter={this.Green} style={{ backgroundColor: '#00cc00', width: '200px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Green</p>
              </div>
              <div className="col-5 text-center" onMouseEnter={this.LightGreen} style={{ backgroundColor: '#33ff33', width: '400px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Light-Green</p>
              </div>
              <div className="col-3 text-center" onMouseEnter={this.LighterGreen} style={{ backgroundColor: '#99ff99', width: '300px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>LighterGreen</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row">
              <div className="col-5 text-center"  onMouseEnter={this.Blue} style={{ backgroundColor: '#0000ff', width: '300px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Blue</p>
              </div>
              <div className="col-3 text-center"  onMouseEnter={this.LightBlue} style={{ backgroundColor: '#6666ff', width: '200px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Light-Blue</p>
              </div>
              <div className="col-4 text-center" onMouseEnter={this.LighterBlue} style={{ backgroundColor: '#b3b3ff', width: '400px', height: '80px' }}>
                <p style={{ color: 'white', paddingTop: '25px' }}>Lighter-Blue</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mx-3 justify-content-between align-items-between">
          <div className="bg-info" style={{ height: '140px', width: '250px', position: 'relative' }} onMouseEnter={this.counterChanges} >
            <div className="d-flex justify-content-center" style={{ marginTop: '30px', paddingLeft: '70px' }}>
              <img src="iconsaccount.png" style={{ height: "80px", width: "130px", position: 'absolute' }} />
            </div>
          </div>
          <div className="bg-secondary" style={{ height: '140px', width: '250px', position: 'relative' }} onMouseEnter={this.counterChanges1}>
            <div className="d-flex justify-content-center" style={{ marginTop: '30px', paddingLeft: '70px' }}>
              <img src="iconsaccount.png" style={{ height: "80px", width: "130px", position: 'absolute' }} />
            </div>
          </div>
        </div><br />
        {/* <div class="form-switch ms-4">
          <input
            type="checkbox"
            id="theme"
            onchange="ChangeTheme()"
            class="form-check-input "
          />&nbsp;
          Dark Theme
        </div> */}
      </div>
    );
  }
}






