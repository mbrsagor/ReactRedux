import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import PageHeader from "../../components/PageHader";
import CategoryList from "../../components/CateogryList";

class Category extends Component {
  render() {
    return (
      <div className="mt-2">
        <PageHeader currentPageName="Category list page" />
        <div className="row mt-2 mb-2">
          <div className="col-md-5"></div>
          <div className="col-md-7 text-right">
            <Link className="btn btn-info btn-sm" to="/add-category">
              <span>
                <FeatherIcon icon="plus" />
              </span>
            </Link>
          </div>
        </div>
        <CategoryList />
      </div>
    );
  }
}

export default Category;
