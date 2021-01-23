import React, { Component } from "react";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section className="main">
        <BrowserRouter>
          <Sidebar />
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/registration" exact component={Register} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}
export default App;
