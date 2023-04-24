import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-sm px-5">
          <a className="navbar-brand" href="/">
            <i class="bi bi-github m-2"></i>
            Takin' Quizzes
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {this.props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/QuizzesPage">
                    Quizzes
                  </Link>
                </li>
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/login/oauth/authorize?client_id=5c7e7b4931784167cbff"
                  >
                    Login With Github
                  </a>
                </li>
              )}
            </ul>
            <i class="bi bi-person-circle h1"></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
