import React, { Component } from "react";
import axios from "axios";

export default class ConnectingApi extends Component {
  state = {
    lists: [],
  };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => {
  //       this.setState({ lists: res.data });
  //     })
  // }

  getData = async function () {
    try {
      var axioData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.getDataa(axioData);
    } catch (error) {
      document.getElementById("msg").innerHTML = `${error}`;
    }
  };
  getDataa(e) {
    this.setState({ lists: e.data });
  }

  // getData = async function () {
  //   try {
  //     var returnData = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //                  this.gotDatafrm(returnData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // gotDatafrm(e){
  // this.setState({lists:e.data})
  // }

  render() {
    console.log(this.state.lists);
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-around">
          <h2 className="text-c mt-2">ConnectingApi</h2>
          <button
            className="text-white btn btn-info mt-2"
            onClick={() => {
              this.getData();
            }}
          >
            GetData
          </button>
        </div>
        <div className="">
          <table className="table table-hover table-responsive mt-2">
            <thead>
              <tr className="text-center">
                <th style={{ width: "100px" }}>Id</th>
                <th style={{ width: "100px" }}>UserId</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.lists.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td className="text-center">{ele.id}</td>
                    <td className="text-center">{ele.userId}</td>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
