import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from "../store/actions/authAction";
import { getCurrentUser } from "../store/actions/currentUserAction";


class Header extends Component {
  render() {
    const { auth } = this.props;
    console.log(this.props.user);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/"> Task Manager</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              {auth.isAuthenticated ? <span className="mt-2 text-muted">{auth.user.username}</span> : null}
              <li className="nav-item active">
                {auth.isAuthenticated ?  
                <button onClick={() => this.props.logout(this.props.history)} className="nav-link btn btn-default">
                  Logout <span className="sr-only">(current)</span>
                  </button>
                  : 
                  <Link to='/login' className="nav-link">
                  Login <span className="sr-only">(current)</span>
                  </Link>}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

export default connect(mapStateToProps, { logout, getCurrentUser })(Header);
