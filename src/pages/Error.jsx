import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card text-center">
            <div className="card-header">
              <h4 className="card-title">404 Not Found</h4>
            </div>
            <div className="card-body">
              <h2>You are absolutely redirected to worng page</h2>
              <p>Sorry! The page not found right now.</p>
              <Link className="btn btn-success" to="/">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
