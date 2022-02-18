import React from "react";
import "./sidebar.css";
import PersonIcon from "@material-ui/icons/Person";
import Group from "@material-ui/icons/Group";
import Assignment from "@material-ui/icons/Assignment";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import Settings from "@material-ui/icons/Settings";

function Sidebar() {
  return (
    <div className="sideNav">
      <h1>DashBoard</h1>
      <hr></hr>
      <ul className="navLinks">
        <li>
          <a href="#">
            <PersonIcon className="addedIcons" />
            <p>Profile</p>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <Group className="addedIcons" />
            <p>Team</p>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <Assignment className="addedIcons" />
            <p>Documents</p>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <PlaylistAddCheck className="addedIcons" />
            <p>ToDo List</p>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <Settings className="addedIcons" />
            <p>Settings</p>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
