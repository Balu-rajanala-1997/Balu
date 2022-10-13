import React, { useState } from "react";

export default function DynamicStyling() {
  const [zooming, setZooming] = useState(1);
  const [val, setVal] = useState(0);

  const [cols, setColors] = useState(0);
  const [texts, setTexts] = useState(0);
  const [family, setFamily] = useState(0);

  // FontSize function
  const setFontSize = (e) => {
    var parentDiv = document.getElementById("Colors");
    var fontSiz = e.target.value;
    parentDiv.style.fontSize = fontSiz;
  };

  // FontFamily function
  const setFont = (e) => {
    var parentDiv = document.getElementById("Colors");
    var fontFam = e.target.value;
    setFamily(family + 1);
    parentDiv.style.fontFamily = fontFam;
  };

  // FontWeight function
  const setFontWeight = (e) => {
    var parentDiv = document.getElementById("Colors");
    var fontWei = e.target.value;
    parentDiv.style.fontWeight = fontWei;
  };

  function ChangeColor(e) {
    document.getElementById("Colors").style.backgroundColor = e.target.value;
  }

  function ChangeColor1(e) {
    var color = document.getElementById("Colors");
    color.style.backgroundColor = e.target.value;
    setColors(cols + 1);
    if (color.style.backgroundColor == color.style.color) {
      alert("Background and Text colors both are same,");
    }
  }

  function ChangeText(e) {
    var text = document.getElementById("Colors");
    text.style.color = e.target.value;
    setTexts(texts + 1);
    if (text.style.backgroundColor == text.style.color) {
      alert("Background and Text colors both are same.");
    }
  }

  // Zooming Functions
  const zoomIn = (e) => {
    var page = document.getElementById("Colors");
    setZooming(zooming + 0.1);
    page.style.zoom = zooming;
  };

  const zoomOut = () => {
    var page = document.getElementById("Colors");
    setZooming(zooming - 0.1);
    page.style.zoom = zooming;
  };
  const handleChangeVal = (e) => {
    var page = document.getElementById("Colors");
    setVal(e.target.value);
    page.style.zoom = val;
  };

  return (
    <div
      className="mt-2 ms-2 me-2 p-2 container-fluid"
      style={{ position: "absolute", height: "700px" }}
      id="Colors"
    >
      <h2 className="m-3 text-center Chnage">Dynamic Styling</h2>
      <form className="d-flex justify-content-around">
        <input
          type="button"
          value="pink"
          className="clr rounded rounded-3"
          onClick={ChangeColor1}
        />
        <input
          type="button"
          value="red"
          className="clr rounded rounded-3 text-white"
          onClick={ChangeColor1}
          style={{ backgroundColor: "red" }}
        />
        <input
          type="button"
          value="lightBlue"
          className="clr rounded rounded-3 text-white"
          onClick={ChangeColor1}
          style={{ backgroundColor: "lightblue" }}
        />
        <input
          type="button"
          value="yellow"
          className="clr rounded rounded-3 "
          onClick={ChangeColor1}
          style={{ backgroundColor: "yellow" }}
        />
        <input
          type="button"
          value="white"
          className="clr rounded rounded-3 "
          onClick={ChangeColor1}
          style={{ backgroundColor: "white" }}
        />
      </form>
      <div>
        <p style={{ textAlign: "justify" }} id="myID" className="Change p-3">
          Component is a set of markup, styles and logic. Component in React is
          a JavaScript function. Components are independent and reusable bits of
          code. They serve the same purpose as javascript functions, but work in
          isolation and return HTML. Components are two types, Class components
          and Function components. JavaScript function returns JSX.
        </p>
        <p style={{ textAlign: "justify" }} id="myID" className="Change p-3">
          Component is a set of markup, styles and logic. Component in React is
          a JavaScript function. Components are independent and reusable bits of
          code. They serve the same purpose as javascript functions, but work in
          isolation and return HTML. Components are two types, Class components
          and Function components. JavaScript function returns JSX.
        </p>
        <p style={{ textAlign: "justify" }} id="myID" className="Change p-3">
          Component is a set of markup, styles and logic. Component in React is
          a JavaScript function. Components are independent and reusable bits of
          code. They serve the same purpose as javascript functions, but work in
          isolation and return HTML. Components are two types, Class components
          and Function components. JavaScript function returns JSX.
        </p>
      </div>
      <div className="m-3 d-flex justify-content-around ">
        <div>
          <select
            className="rounded rounded-3  bg-warning"
            onChange={ChangeColor1}
          >
            <option value="chocolate">Chocolate</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="maroon">Maroon</option>
            <option value="powderBlue">PowderBlue</option>
            <option value="cyan">Cyan</option>
            <option value="gray">Gray</option>
          </select>
        </div>
        <div className="ms-3">
          <select onChange={ChangeText} className="bg-success text-white">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">yellow</option>
            <option value="pink">Pink</option>
            <option value="maroon">Maroon</option>
            <option value="powderBlue">PowderBlue</option>
            <option value="chocolate">Chocolate</option>
            <option value="cyan">Cyan</option>
            <option value="gray">Gray</option>
          </select>
        </div>
        <div className=" ms-3">
          <select
            id="font"
            className="rounded rounded-3 text-white bg-primary"
            onClick={setFont}
          >
            <option value="verdana">Verdana</option>
            <option value="courier">Courier</option>
            <option value="arial">Arial</option>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-Serif</option>
            <option value="fantasy">Fantasy</option>
            <option value="monospace">Monospace</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Tahoma">Tahoma</option>
          </select>
        </div>
        <div className=" ms-3">
          <select
            id="font"
            className="rounded rounded-3 text-white bg-primary"
            onClick={setFontWeight}
          >
            <option value="lighter">Lighter</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
        <div className="rounded rounded-3 ms-3">
          <select
            onClick={setFontSize}
            className=" rounded rounded-3 text-white bg-dark"
          >
            <option value="13px">13</option>
            <option value="15px">15</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="22px">22</option>
            <option value="24px">24</option>
            <option value="26px">26</option>
            <option value="28px">28</option>
          </select>
        </div>
        <div
          className="bg-secondary p-2 rounded rounded-3"
          style={{ position: "fixed", top: "250px", right: "40px" }}
        >
          <p class=" text-white" style={{ fontWeight: "bold" }}>
            Color : {cols}
          </p>
          <p class=" text-white" style={{ fontWeight: "bold" }}>
            Text : {texts}
          </p>
          <p class=" text-white" style={{ fontWeight: "bold" }}>
            FontFamily : {family}
          </p>
        </div>
        <div className="ms-5">
          <button
            type="button"
            onClick={zoomIn}
            className="btn btn-primary text-white  me-3"
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          <button
            type="button"
            onClick={zoomOut}
            className="btn btn-primary text-white "
          >
            <i className="bi bi-dash-lg"></i>
          </button>
        </div>
      </div>

      {/* <div className="" >
        <input type="range" min='0' max='2' value={val} className="text-red" step="0.1"
          onChange={handleChangeVal} />
      </div> */}
    </div>
  );
}
