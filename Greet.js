import React, { Component } from "react";

export default class Greet extends React.Component {
  render() {
    return (
      <div className="text-center mt-3">
        <h3 className="text-primary">Welcome to VisualPath</h3>
        <h5>
          Hello {this.props.guest.names}, welcome to {this.props.guest.place}.
          You have been working in TCS Company for 4 years as a{" "}
          {this.props.guest.job}
        </h5>
      </div>
    );
  }
}
// Greet.defaultProps = {
//   person: "Gopi",
//   id_: 200,
//   role: "Developer",
// };
