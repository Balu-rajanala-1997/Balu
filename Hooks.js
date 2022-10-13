import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./demo.css"
// import mydata from "./data";

export default function Hooks() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // const handleDelete = (arge) => {
  //   setProducts(
  //     products.filter(() => {
  //       return arge != products.id;
  //     })
  //   );
  // };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <table className="table table-hover table-bordered table-responsive-md mx-3 mt-4">
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>(&#8377;) Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td width={100}>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>

                <td>
                  <img
                    className="m-2 rounde rounded-3"
                    src={product.image}
                    height="120"
                    width="150"
                    alt="images"
                  />
                  {/* <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    click Me!
                  </button> */}
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>

    
  );
}
