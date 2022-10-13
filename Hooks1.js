import React, { useEffect, useState } from "react";

export default function Hooks1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container-fluid bg-info mt-2">
      <h2
        className="text-center text-white pt-2"
        style={{ fontFamily: "monospace" }}
      >
        Product Details
      </h2>
      <div
        className="d-flex flex-wrap overflow-auto"
        style={{ height: "590px" }}
      >
        {products.map((product) => (
          <div
            className="card m-2 p-2"
            style={{
              width: "200px",
              height: "380px",
              fontFamily: "serif",
            }}
          >
            <img
              src={product.image}
              height="150"
              className="card-img-top"
            />
            <div className="card-header rounded rounded-1 bg-info text-white">
              <h6>{product.title}</h6>
            </div>
            <div
              className="card-footer text-center text-success"
              style={{ height: "170px", backgroundColor: "powderblue" }}
            >
              <p>
                <i className="bi bi-star-half"></i>&nbsp;
                {product.rating.rate}
              </p>
              <p>{product.rating.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
