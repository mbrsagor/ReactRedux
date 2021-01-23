import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-menu">
          <ul>
            <li className="header-menu">
              <span>Main navication</span>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Add Category</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Category List</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Add Task</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Task List</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
