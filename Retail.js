import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Seller from "./Seller";
import Buyer from "./Buyer";
import "./retail.css";
import Button from "@mui/material/Button";
import Search from "./Search";

const Retail = () => {
  return (
    <div className="container-fluid ">
      <BrowserRouter>
        <h2>Retails</h2>
        <Link className="prod" to="/retail"><Button color="success" variant="contained">Retails</Button></Link>
        <Link className="prod" to="/retail/buyer"><Button color="error" variant="contained">Buyer</Button></Link>
        <Link className="prod" to="/retail/seller"><Button color="primary" variant="contained">Seller</Button></Link>
        <Link className="prod" to="/retail/search"><Button color="secondary" variant="contained">Search</Button></Link>
        <Routes >
          <Route  path="/retail">
            <Route path="" element={<Retail />}>
              Product
            </Route>
            <Route path="buyer" element={<Buyer />}>
              Buyer
            </Route>
            <Route path="seller" element={<Seller />}>
              Seller
            </Route>
            <Route path="search" element={<Search />}>
              Search
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Retail;