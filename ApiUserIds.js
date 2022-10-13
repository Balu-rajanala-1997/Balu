import React, { Component } from "react";
import axios from "axios";
import HOC from "./HOC";

class ApiUserIds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
    };
  }

  axiosData = async function () {
    try {
      var userData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.returnData(userData);
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

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex my-2 justify-content-around">
          <h2 className="text-center">User Details</h2>
          <button
            className="text-white btn btn-success"
            onClick={() => {
              this.axiosData();
            }}
          >
            User
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-2">
            <thead>
              <tr className="text-center">
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>ZipCode</th>
                <th>Lat</th>
                <th>Lang</th>
                <th>Phone</th>
                <th>Website</th>
                <th>CompanyName</th>
                <th>CatchPhrase</th>
                <th>Bs</th>
              </tr>
            </thead>
            <tbody>
              {this.state.lists.map((ele) => {
                return (
                  <tr className="text-center" key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>{ele.address.street}</td>
                    <td>{ele.address.suite}</td>
                    <td>{ele.address.city}</td>
                    <td>{ele.address.zipcode}</td>
                    <td>{ele.address.geo.lat}</td>
                    <td>{ele.address.geo.lng}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.website}</td>
                    <td>{ele.company.name}</td>
                    <td>{ele.company.catchPhrase}</td>
                    <td>{ele.company.bs}</td>
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
export default HOC(ApiUserIds);
