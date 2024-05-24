import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context";

export const Navbar = () => {

  const {mode} = useContext(ThemeContext)
  console.log("mode...",mode)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/blogs">
              blogs
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/students">
              Students
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/formdemo1">
              formdemo1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo2">
              formdemo2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/formdemo3">
              formdemo3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo1">
              API DEMO 1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo3">
              API DEMO 3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/apidemo4">
              API DEMO 4
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/useeeffectdemo">
              useeeffectdemo
            </Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link" to="/storagedemo">
              StorageDemo
            </Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link" to="/depdropdown">
            depdropdown
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
