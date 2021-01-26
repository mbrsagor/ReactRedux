import React, { Component } from "react";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/login";
import Registration from "../pages/register";
import Category from '../pages/category/Category';
import AddCategory from "../pages/category/AddCategory";
import CategoryDetail from "../pages/category/CategoryDetail";
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
                    <Route path="/category-list" exact component={Category} />
                    <Route path="/add-category" exact component={AddCategory} />
                    <Route path="/category-detail/:id" exact component={CategoryDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route component={Error} />
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
