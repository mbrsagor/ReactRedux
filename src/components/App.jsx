import React, { Component } from "react";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-12">
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" exact component={Register} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
