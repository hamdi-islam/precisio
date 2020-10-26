import React from "react";

function navbar() {
  return (
    <div>
      <div className="info-header">
        <div
          className="d-flex justify-content-end"
          style={{ backgroundColor: "black", opacity: "80%" }}
        >
          <span className="navbar-text mr-3" style={{ color: "white" }}>
            Qui sommes-nous ?
          </span>
          <span className="navbar-text mr-3" style={{ color: "white" }}>
            Contact
          </span>
          <span className="navbar-text mr-3" style={{ color: "gray" }}>
            +213 36 66 45 33
          </span>
        </div>
      </div>
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src="images/logo.png" alt="logo" className="logo" />
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

          <div
            class="collapse navbar-collapse nav justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Test antigénique
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Product 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Product 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Product 3
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Test sérologique rapide
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  Test Combo rapide
                </a>
              </li>
            </ul>
          </div>
          <form>
            <span className="mr-2">
              <img
                src="images/en.png"
                style={{ height: "20px", width: "30px" }}
              />
            </span>
            <span className="mr-2">
              <img
                src="images/ar.png"
                style={{ height: "20px", width: "30px" }}
              />
            </span>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default navbar;
