import React, { useState } from "react";

export default function Forms() {
  const [product, setProduct] = useState({
    Name: "",
    Price: 0,
  });
  function hadleNameChange(event) {
    setProduct({
      Name: event.target.value,
      Price: product.Price,
    });
  }
  function hadlePriceChange(event) {
    setProduct({
      Name: product.Name,
      Price: event.target.value,
    });
  }
  return (
    <div className="container-fluid p-4">
      <h3>Register Product</h3>
      <form>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" onChange={hadleNameChange} />
          </dd>
          <dt>Price</dt>
          <dd>
            <input type="text" onChange={hadlePriceChange} />
          </dd>
        </dl>
      </form>
      <h3>Product Details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
      </dl>
    </div>
  );
}
