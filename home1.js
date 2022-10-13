import react from "react";

export default function Home1() {
  const employees = ["Balu", "9177481949", "Hyderabad", "Developer"];
  var arr = [10, 12, 14, 16, 18, 20];
  var students = [
    { name_: "vamsi", id: 100, Address: "Hyd" },
    { name_: "ajay", id: 101, Address: "Delhi" },
    { name_: "swathi", id: 102, Address: "Bangalore" },
    { name_: "swamy", id: 103, Address: "Chennai" },
  ];

  function xyz() {
    for (const iterator of students) {
      document.getElementById("abc").innerHTML = iterator;
    }
  }

  return (
    <div>
      {/*       
      <h1>Hello.......</h1>
      {employee.forEach(() => {
        <h1>{employee}</h1>;
      })} */}
      {/* <h3>Empolyees Details</h3>
      <ol className="text-danger">
        {employees.map((employee) => (
          <li>{employee}</li>
        ))}
      </ol>
      <br />
      <h3>Employees Details</h3>
      <select>
        {employees.map((employee) => (
          <option>{employee}</option>
        ))}
      </select> */}
      {/* <br/> */}
      {/* <p>{employees[0]}</p>
       <p>{employees[1]}</p>
       <p>{employees[2]}</p>
       <p>{employees[3]}</p> */}
      {/* <br/>  */}
      {employees.forEach((value, index, arr) => {
        <h3>{(arr[index] = value)}</h3>;
      })}
      <p>{employees.map((value) => value + " ")}</p>
      <p>{arr.map((value) => value + 10 + " ")}</p>
      <p>{arr.map((value) => value * 5 + " ")}</p>
      <p>
        {arr.map((value) => {
          return value + " ";
        })}
      </p>
      <button className="btn btn-info rounded rounded-3" onClick="xyz()">
        Click
      </button>
      <h3 id="abc"></h3>
    </div>
  );
}
