import React from "react";
import { formik, useFormik } from "formik";

export default function Formik() {
  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      price: 0,
      title: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div className="container-fluid ">
      <h3 className="text-center mt-3">Register Details</h3>
      <div className="d-flex mt-3 justify-content-center">
        <form
          className="border border-2 rounded rounded-3 bg-light m-2 p-4"
          onSubmit={formik.handleSubmit}
        >
          <dl>
            <dt>Id</dt>
            <dd>
              <input
                className="w-100"
                type="number"
                min={1}
                max={10}
                name="Id"
                onChange={formik.handleChange}
              />
            </dd>
            <dt>Name</dt>
            <dd>
              <input type="text" name="Name" onChange={formik.handleChange} />
            </dd>
            <dt>Price</dt>
            <dd>
              <input
                className="w-100"
                type="number"
                name="Price"
                min={1000}
                max={5000}
                onChange={formik.handleChange}
              />
            </dd>
            <dt>Title</dt>
            <dd>
              <input type="text" name="Title" onChange={formik.handleChange} />
            </dd>
            <dt>Description</dt>
            <dd>
              <input
                type="text"
                name="Description"
                onChange={formik.handleChange}
              />
            </dd>
            <dt>Image</dt>
            <dd>
              <input type="url" name="Image" onChange={formik.handleChange} />
            </dd>
          </dl>
          <button
            type="submit"
            className="btn btn-info rounded rounded-3 text-white w-100"
          >
            OnSubmit
          </button>
        </form>
      </div>
    </div>
  );
}
