import React from "react";

export default function HomeComponent1() {
  var product = {
    Name: "Laptop",
    Price: 34000.0,
    Stock: true,
    ShippedTo: ["Hyd", "Chennai", "Bangalore"],
  };

  return (
    <>
      <div className="container-fluid bg-light text-black p-4">
        <h2>Product Details</h2>
        <dl>
          <dt>Name</dt>
          <dd>{product.Name}</dd>
          <dt>Price</dt>
          <dd>&#8377; {product.Price}</dd>
          <dt className="form-switch">
            <input name="stock" type="checkbox" className="form-check-input" />
            &nbsp;
            {product.Stock == true ? "Available" : "Out of Stock"}
          </dt>
          <br />
          <dt>ShippedTo</dt>
          <dd>{product.ShippedTo[1]}</dd>
        </dl>
      </div>
    </>
  );
}
