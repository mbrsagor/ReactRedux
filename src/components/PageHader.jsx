import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageHader extends Component {
  render() {
    return (
      <div className="row border-bottom">
        <div className="col-md-4">
          <h4 className="card-title">{this.props.currentPageName}</h4>
        </div>
        <div className="col-md-8 text-right">
          <p>
            <Link to="/">Dashboard</Link>
            <span className="ml-3">{this.props.currentPageName}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default PageHader;
