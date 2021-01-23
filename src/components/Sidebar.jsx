import React, { Component } from 'react';
import NavBar from './NavBar';


class Sidebar extends Component {
    render() {
        return (
          <div className="sidebar">
            <div className="pl-4">
              <NavBar />
            </div>
          </div>
        );
    }
}

export default Sidebar
