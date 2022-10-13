import React, { Component } from "react";
import axios from "axios";
import HOC from "./HOC";

class ApiUser1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
    };
  }

  axiosData = async function () {
    try {
      var catchData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.returnData(catchData);
    } catch (error) {
      console.log(error);
    }
  };

  returnData(e) {
    var MyArr = [];
    e.data.map((ele) => {
      if (this.props.MyParam == ele.id) {
        MyArr.push(ele);
      }
    });

    this.setState({
      lists: MyArr,
    });
  }

  //   componentDidMount(e) {
  //     axios.get("https://jsonplaceholder.typicode.com/posts/:id").then((res) => {
  //       this.setState({ lists: e.data });
  //     });
  //   }
  render() {
    return (
      <div>
        <div className="d-flex my-2 justify-content-around">
          <h3>ApiUser1</h3>
          <button
            className="text-white btn btn-success"
            onClick={() => {
              this.axiosData();
            }}
          >
            Post-Id's
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="">
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
                    <td style={{ textAlign: "justify" }}>{ele.title}</td>
                    <td style={{ textAlign: "justify" }}>{ele.body}</td>
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
export default HOC(ApiUser1);
