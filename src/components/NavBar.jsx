import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-menu">
          <ul>
            <li className="header-menu text-center">
              <span className="text-light">Main navication</span>
            </li>
            <li className="nav">
              <Link to="/">
                <span>
                  <FeatherIcon icon="home" /> Dashboard</span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/add-category">
                <span>
                  <FeatherIcon icon="plus" /> Category
                </span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/category-list">
                <span>
                  <FeatherIcon icon="list" />
                  Categorys
                </span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/add-task">
                <span>
                  <FeatherIcon icon="plus" />
                  Add Task
                </span>
              </Link>
            </li>
            <li className="nav">
              <Link to="/task-list">
                <span>
                  <FeatherIcon icon="list" />
                  Task List
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
