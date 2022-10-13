import React from "react";

export default function Home3() {
  const products = [
    {
      Name: "Laptop",
      Price: 34000,
      Id: 100,
      Title: "i3 - processor",
    },
    {
      Name: "Nike Casuals",
      Price: 4000,
      Id: 101,
      Title: "Men's Clothing",
    },
    {
      Name: "HeadBirds",
      Price: 2000,
      Id: 102,
      Title: "Normal HeadBirds",
    },
  ];

  function bodyload() {
    for (var product of products) {
      var tr = document.createElement("tr");
      var tdName = document.createElement("td");
      var tdPrice = document.createElement("td");
      var tdId = document.createElement("td");
      var tdTitle = document.createElement("td");

      tdName.innerHTML = product.Name;
      tdPrice.innerHTML = product.Price;
      tdId.innerHTML = product.Id;
      tdTitle.innerHTML = product.Title;

      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdId);
      tr.appendChild(tdTitle);

      document.querySelector("tbody").appendChild(tr);
    }
  }

  return (
    <div className="container-fluid" onLoad={bodyload()}>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>(&#8377;) Price</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
