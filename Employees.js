import React from "react";
import { useParams } from "react-router-dom";

export default function Employees(props) {
  var employees = [
    { id_: 100, name_: "balu", marks: 76, place: "Hyderabad" },
    { id_: 101, name_: "gopi", marks: 64, place: "Chennai" },
    { id_: 102, name_: "Vamsi", marks: 56, place: "Bangalore" },
    { id_: 103, name_: "Swami", marks: 45, place: "Delhi" },
    { id_: 104, name_: "Ajay", marks: 86, place: "Kolkatta" },
    { id_: 105, name_: "chandu", marks: 89, place: "Pune" },
  ];

  var params = useParams();

  // var pattern = "^d[0-9]{3}";

  // if (params.id.pattern) {
  //   document.getElementById("abc").innerHTML = `${params.id}`;
  // } else {
  //   document.getElementById("abc").innerHTML = `${params.id}`;
  // }

  return (
    <div className=" text-success container-fluid">
      <h3>Employees List</h3>
      {employees.map((value) => {
        return (
          <p>
            {value.id_ +
              " " +
              value.name_ +
              " " +
              value.marks +
              " " +
              value.place}
          </p>
        );
      })}
      <hr className="w-25" />
      {employees.map((value) => {
        if (params.id == value.id_) {
          return (
            <h5>
              {value.id_ +
                " " +
                value.name_ +
                " " +
                value.marks +
                " " +
                value.place +
                " "}
            </h5>
          );
        }
      })}

      <p id="abc"></p>
      <p>{params.id}</p>
      {/* <p>{props.match.params.id_}</p>  */}
    </div>
  );
}
