import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const stdData = [
  { id_: 104, name: "Balu", marks: 76, place: "Hyderabad" },
  { id_: 101, name: "Gopi", marks: 64, place: "Chennai" },
  { id_: 107, name: "Vamsi", marks: 56, place: "Bangalore" },
  { id_: 102, name: "Swami", marks: 45, place: "Delhi" },
  { id_: 106, name: "Ajay", marks: 86, place: "Kolkatta" },
  { id_: 105, name: "Chandu", marks: 89, place: "Pune" },
  { id_: 108, name: "Raju", marks: 59, place: "Chennai" },
  { id_: 103, name: "Venky", marks: 67, place: "Hyd" },
  { id_: 110, name: "Vardhan", marks: 74, place: "Chennai" },
  { id_: 100, name: "Gangadhar", marks: 48, place: "Pune" },
  { id_: 109, name: "Siva", marks: 83, place: "Mangalore" },
  { id_: 112, name: "Gopal", marks: 43, place: "Chennai" },
  { id_: 115, name: "Pawan", marks: 57, place: "Lucknow" },
  { id_: 111, name: "NagaVardhan", marks: 87, place: "Pune" },
  { id_: 113, name: "Prabhu", marks: 55, place: "Chennai" },
  { id_: 114, name: "RajaGopal", marks: 62, place: "Hyderabad" },
  { id_: 116, name: "Sai", marks: 95, place: "Bangalore" }
];

export default function Students(props) {
  const [std1, setStd1] = useState(stdData)

  // Delete Records
  const recordChange = (e) => {
    var deel = e.target.value;
    var delData = [];
    std1.map(ele => {
      if (ele.id_ != deel) {
       delData.push(ele)
      }
    })
    setStd1(delData)
  }

  var params = useParams();

  // Actual Data
  const ActData = () => {
    setStd1(stdData);
  }

  // Descending Order
  const descending = () => {

    var finalArr1 = [];
    var ind = []
    var newAapp = std1.map((ele, i) => {
      return ele.id_
    })

    newAapp.sort((a, b) => {
      return a - b
    })

    std1.map((ele, i) => {
      for (var a = 0; a < newAapp.length; a++) {
        if (newAapp[a] == ele.id_) {
          ind[a] = i
        }
      }
    })

    var decen = ind.reverse();
    decen.map((ele, i) => {
      finalArr1[i] = std1[ele]
    })
    setStd1(finalArr1)
  }


  // Ascending Order
  const ascending = () => {
    var finalArr = [];
    var ind = []

    var newAapp = std1.map((ele, i) => {
      return ele.id_
    })

    newAapp.sort((a, b) => {
      return a - b
    })

    std1.map((ele, i) => {
      for (var a = 0; a < newAapp.length; a++) {
        if (newAapp[a] == ele.id_) {
          ind[a] = i
        }
      }
    })

    ind.map((ele, i) => {
      finalArr[i] = std1[ele]
    })

    setStd1(finalArr);
  }

  return (
    <div className="container-fluid pt-2">
      <h3 className="text-center text-info">Students DataList</h3>
      <div className="d-flex justify-content-center ">
        <table
          className="table border bordered border-info text-center table-responsive"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Place</th>
              <th><button className="btn btn-outline-primary me-2 rounded rounded-pill btn-sm bi bi-filter" onClick={ActData}>ActData</button>
                <button className="btn btn-outline-success me-2 rounded rounded-pill btn-sm bi bi-sort-down" onClick={ascending}>Asce</button>
                <button className="btn ms-1 me-2 btn-outline-primary rounded rounded-pill btn-sm bi bi-sort-up" onClick={descending}>Desc</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {std1.map((value) => {
              return (
                <tr>
                  <td className="pt-4 px-3 pb-3 ">{value.id_}</td>
                  <td className="pt-4 px-3 pb-3">{value.name}</td>
                  <td className="pt-4 px-3 pb-3" >{value.marks}</td>
                  <td className="pt-4 px-3 pb-3">{value.place}</td>
                  <td><button className="btn btn-danger rounded rounded-circle mt-2 text-white deleteId" onClick={recordChange} value={value.id_}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
