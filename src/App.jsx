import React, { useState } from "react";
import Button from "./Button";
import Section from './Section.jsx'
import Footer from './Footer.jsx'


function App() {
    // Creating states to set count  // 
  const[count ,setcount] = useState(0)
 
  return (
    
    <>
      {/* Creating Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-2 px-lg-0">
        <a className="navbar-brand" href="#">
E-KART
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {count}
              </span>
            </button>
         </form>
         </div>
         </div>
         </nav>
    
     {/* Creating Header  */}
     <header className="bg-info py-5">
      <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white bg-warning ">
        <h1 className="display-4  fw-bolder ">SHOP-IN-STYLE</h1>

       </div> 
       </div>
       </header>    
       {/*Calling Section Component and Sending Props to Set Count to the Component */}
     <Section count= {count} setcount={setcount}/>
      {/* Calling Created Footer Component */}
     <Footer />
</>
    
    
);}

export default App;