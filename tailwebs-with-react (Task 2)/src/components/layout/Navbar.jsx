import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-light navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="#">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
              className="logo"
            />
          </a>

          {/* <!-- Mobile Toggle --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto me-3 gap-lg-2">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Areas of work
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Products & Solutions
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Our Platform
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Ecosystem
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </a>
              </li>
            </ul>

            <div>
              <i className="bi bi-search fs-5"></i>
            </div>
            {/* <div className="search-box mb-3">
              <i className="bi bi-search fs-5 me-2"></i>
              <input
                type="text"
                placeholder="Search this page..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control d-inline-block w-auto"
              />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
