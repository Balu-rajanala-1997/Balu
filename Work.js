import React, { Component } from "react";
import './demo.css';
export default class Work extends Component {
  state = {
    titleMessage: "React State",
    timeValue: new Date(),
    count: 0,
  };


  makeChanges() {
    this.setState({ titleMessage: "Welcome to React State concept" });
  }

  makeTimeChanges = () => {
    this.setState({ timeValue: new Date() });
  };

  countChanges() {
    this.setState({count: this.state.count + 2});
  }

  countChanges1() {
    this.setState({count: this.state.count - 2});
  }

  render() {
    setInterval(() => {
      this.setState({ timeValue: new Date() });
    }, 1000);

    this.makeChanges = this.makeChanges.bind(this);

    this.countChanges = this.countChanges.bind(this);
    this.countChanges1 = this.countChanges1.bind(this);

    

    // setInterval(({count}) => {
    //   count = count + 1;
    // }, 1000);
    
    return (
      <div className="container-fluid text-center pt-4" style={{height: '100vh'}}>
        <h2>
          Hi Balu, {this.state.titleMessage}&ensp;
          <button
            className="btn btn-info rounded rounded-3 text-white"
            onClick={this.makeChanges}
          >
            Change
          </button>
        </h2>
        <p
          className="text-dark"
          style={{
            fontWeight:"bold",
            fontSize: "18px",
            letterSpacing: "2px",
          }}
        >
          Time is :&ensp;
          {this.state.timeValue.getHours() +
            ":" +
            this.state.timeValue.getMinutes() +
            ":" +
            this.state.timeValue.getSeconds()}
        </p>
        <button onClick={this.countChanges} className="btn btn-info text-dark">
          CounterIncre
        </button>
        <button onClick={this.countChanges1} className="btn ms-3 btn-primary text-white">
          CounterDecre
        </button>
        <h4>{this.state.count}</h4>
      </div>
    );
  }
}
