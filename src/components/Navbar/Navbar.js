import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Trello Clone</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a>Github</a>
          <a>Stackoverflow</a>
          <a>LinkedIn</a>
          <a>Codepen</a>
          <a>JsFiddle</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
