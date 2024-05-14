

import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../Assests/Images/Amazon_PNG6.png";
import { Link } from "react-router-dom";
import "../Assests/Css/Nav.css";

let Nav = () => {
  return (
    <>
    <div className="sticky-top"> 
      <nav class="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="Mobile Logo" width="120" height="35" className="mx-2 my-2" />
          </a>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <CgMenuRight />
          </button>
          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h1 class="offcanvas-title fw-bold menus" id="offcanvasNavbarLabel ">Menu</h1>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item my-1">
              <a class="nav-link d-flex" href="#!">
                    <div class="input-group">
                    <button class="btn searchIcon btn-outline-secondary" type="button"><CiSearch /></button>
                        <input class="form-control in me-2" type="search" placeholder="Search " aria-label="Search"/>
                    </div>
              </a>
              </li>
              
                <li class="nav-item my-1">
                  <Link to="/" class="nav-link menus fw-semibold" >Home</Link>
                </li>
                <li class="nav-item my-1">
                  <Link to="/explore" class="nav-link menus fw-semibold" >Explore</Link>
                </li>
                <li class="nav-item my-1">
                  <a class="nav-link menus fw-semibold" href="#!">Cart</a>
                </li>
                <li class="nav-item my-1">
                  <a class="nav-link menus fw-semibold" href="#!">Profile</a>
                </li>
                <li class="nav-item my-1">
                  <a class="nav-link menus fw-semibold" href="#!">Contact us</a>
                </li>
                <li class="nav-item" >
                  <a class="nav-link menus" href="#!">
                    <button className="login">Login</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#!">
                    <button className="try">Try it for free <FaArrowRight /></button>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Nav;
