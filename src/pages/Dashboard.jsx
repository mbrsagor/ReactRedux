import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    console.log(this.props.auth);
    const { auth } = this.props;
    return (
      <div>
        <h2>Welcome to React Redux application</h2>
        {auth.isAuthenticated ? (
          <div>
            <p>Hello, {auth.user.user_id}</p>
            <button className="btn btn-danger btn-sm">Logout</button>
          </div>
        ) : (
          <div>
            <p>
              You already have logout Please <Link to="/login">Login</Link>
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
