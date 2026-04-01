import React from "react";

function Topbar() {
  return (
    <div className="topbar py-2">
      <div className="container d-flex justify-content-end gap-4">
        <a href="#" className="text-decoration-none text-dark">
          Events
        </a>
        <a href="#" className="text-decoration-none text-dark">
          Contact us
        </a>

        <ul className="mb-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="https://flagcdn.com/w20/gb.png" width="20" /> ENG
            </a>
            <ul className="dropdown-menu px-4 mb-0">
              <li>
                <a href="">
                  <img src="https://flagcdn.com/w20/gb.png" width="20" /> ENG
                </a>
              </li>
              <li>
                <img src="https://flagcdn.com/w20/gb.png" width="20" /> IND
              </li>
              <li>
                <img src="https://flagcdn.com/w20/gb.png" width="20" /> USA
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
