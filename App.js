// import logo from "./logo.svg";
import "./App.css";
import "./demo.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import GetStudent from "./GetStudent";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import ContentComponent from "./layoutPage/ContentComponent";
import DynamicStyling from "./DynamicStyling";
import Counter from "./Counter";
import Students from "./Students";
import Work1 from "./Work1";
import ConnectingApi from "./ConnectingApi";
import ApiUser from "./ApiUser";
import ApiUser1 from "./ApiUser1";
import ApiUserIds from "./ApiUserIds";
import NoComponentFound from "./noComponentFound";

function App(props) {
//    const Ele = <h2>The Page not Loading</h2>;
  return (
      
       <div>
         <BrowserRouter>
        <div class="" style={{ position: "sticky", top: "0px" }}>
          <div
            className="bg-info mt-2 mx-4 p-1 rounded rounded-3 d-flex justify-content-between align-items-between"
            style={{ position: "sticky", top: "10px" }}
          >
            <div>
              <button
                class="btn btn-outline-success rounded rounded-pill border border-less text-white btn-lg ms-5 mt-2 bi bi-menu-up bi-lg"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#demo"
              ></button>
            </div>
            <h4 className=" text-white pt-3 ps-5">
              Hello.... {props.person} Good Morning.
            </h4>
            <div className="d-flex">
              <Link className="btn btn-success text-white mb-3" to="/">
                Login
              </Link>
              <h5 className="pt-2">
                <Work1 />
              </h5>
            </div>
          </div>
        </div> 

        <div className="">
          <div
            className="carousel slide carousel-fade my-4"
            data-bs-ride="carousel"
            id="banner"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="float1.png"
                  alt="Banner"
                  className="rounded rounded-3 border-success d-block w-100"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-white">Children</h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="float2.jpg"
                  alt="Pythin-Banner"
                  className="rounded rounded-3 d-block border-success w-100"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-white">Children</h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img
                  src="la.jpg"
                  alt="Banner"
                  className="rounded rounded-3 d-block w-100  border-success"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-white ">
                    Los Angels&emsp;
                    <span class="spinner-border text-white"></span>
                  </h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="ny.jpg"
                  alt="Banner"
                  className="rounded rounded-3 d-block  w-100 border-success"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-white ">
                    New York&emsp;
                    <span className="spinner-grow text-warning"></span>
                  </h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="mobile.JPG"
                  alt="Banner"
                  className="rounded rounded-3 d-block w-100 border-success"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-warning ">Mobile</h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="JabraHeadphones.JPG"
                  alt="Banner"
                  className="rounded rounded-3 d-block w-100 border-success"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-dark">JabraHeadphones</h3>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="boat.JPG"
                  alt="Banner"
                  className="rounded rounded-3 d-block w-100 border-success"
                  style={{ height: "250px" }}
                />
                <div className="carousel-caption">
                  <h3 className="text-primary ">Boat</h3>
                </div>
              </div>
              <button
                className="carousel-control-prev  rounded rounded-3 "
                data-bs-slide="prev"
                data-bs-target="#banner"
              >
                <span className="carousel-control-prev-icon text-light"></span>
              </button>
              <button
                className="carousel-control-next  rounded rounded-3  "
                data-bs-slide="next"
                data-bs-target="#banner"
              >
                <span className="carousel-control-next-icon text-light "></span>
              </button>
            </div>
            <div className="carousel-indicators rounded rounded-circle">
              <button data-bs-target="#banner" data-bs-slide-to="0"></button>
              <button
                data-bs-target="#banner"
                data-bs-slide-to="1"
                className="active"
              ></button>
              <button data-bs-target="#banner" data-bs-slide-to="2"></button>
              <button data-bs-target="#banner" data-bs-slide-to="3"></button>
              <button data-bs-target="#banner" data-bs-slide-to="4"></button>
              <button data-bs-target="#banner" data-bs-slide-to="5"></button>
              <button data-bs-target="#banner" data-bs-slide-to="6"></button>
            </div>
          </div>
        </div>

    
        <div className="">
          <div className="row">
            <div className="col " style={{ height: "87vh" }}>
              <Routes>
                <Route path="/" element={<ContentComponent />}></Route>
                <Route path="/students" element={<Students />}></Route>
                <Route path="/students/:id" element={<GetStudent />}></Route>
                <Route
                  path="/students/updatestudent/:id"
                  element={<UpdateStudent />}
                ></Route>
                <Route
                  path="/students/deletestudent/:id"
                  element={<DeleteStudent />}
                ></Route>
                <Route path="/counter" element={<Counter />}></Route>
                <Route path="/posts" element={<ConnectingApi />}></Route>
                <Route path="/posts/:id" element={<ApiUser1 />}></Route>
                <Route path="/users" element={<ApiUser />}></Route>
                <Route path="/users/:id" element={<ApiUserIds />}></Route>
                <Route
                  path="/dynamicstyling"
                  element={<DynamicStyling />}
                ></Route>
                <Route path="*" element={<NoComponentFound />}></Route>
              </Routes>
            </div>
            <div>
              <div
                class="offcanvas offcanvas-start "
                style={{ marginTop: "50px", width: "200px", height: "600px" }}
                id="demo"
              >
                <div class="offcanvas-header">
                  <h3 className="text-center ps-3 text-success">Links</h3>
                  <button
                    type="button"
                    class="btn-close btn-warning"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>
                <hr className="mx-2" />
                <div class="offcanvas-body">
                  <Link
                    className="btn btn-success text-white mt-3 mb-3 w-75"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="btn btn-success text-white mb-3 w-75"
                    to="/students"
                  >
                    Students
                  </Link>
                  <Link
                    className="btn btn-success text-white mb-3 w-75"
                    to="/dummygame"
                  >
                    DummyGame
                  </Link>
                  <Link
                    className="btn btn-success text-white mb-3 w-75"
                    to="/dynamicstyling"
                  >
                    DynamicStyling
                  </Link>
                  <Link
                    className="btn btn-success text-white mb-3 w-75"
                    to="/posts"
                  >
                    ConnectingApi
                  </Link>
                  <Link
                    className="btn btn-success text-white mb-3 w-75"
                    to="/users"
                  >
                    ApiUser
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>  
        </BrowserRouter>  
       </div>
  )
}