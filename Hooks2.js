// import { response } from "express";
import React, { useEffect, useState } from "react";
import "./demo.css";

export default function Hooks2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <table className="table table-hover table-bordered table-responsive mx-3 mt-4 w-75">
        <thead className="text-center">
          <tr>
            <th>Lat</th>
            <th>Long</th>
            <th>City</th>
            <th>Street</th>
            <th>Number</th>
            <th>Zipcode</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.address.geolocation.lat}</td>
                <td>{user.address.geolocation.long}</td>
                <td>{user.address.city}</td>
                <td>{user.address.street}</td>
                <td>{user.address.number}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
}
