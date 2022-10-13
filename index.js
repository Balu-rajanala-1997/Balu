import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Formik from "./Formik";
// import Students from "./Students";
// import Demo1 from "./Demo1";
// import Typescript from "./TypeScript/Typescript";
// import Counter from "./Counter";
// import Params from "./Params";
// import Students from "./Students";
// import Forms from "./Forms";


ReactDOM.render(
  <React.StrictMode>
    {/* <Students/> */}
    <Formik/>
  </React.StrictMode>,
  document.getElementById("root")
);
