import React, { Component } from "react";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import Post from "../pages/posts/Post";
import AddPost from "../pages/posts/AddPost";
import Error from "../pages/Error";
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
                    <Route path="/post" component={Post} />
                    <Route path="/add-new-post" component={AddPost} />
                    <Route component={Error} />
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
