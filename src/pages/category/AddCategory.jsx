import React, { Component } from "react";
import PageHader from "../../components/PageHader";
import CategoryForm from "../../components/CategoryForm";

class AddCategory extends Component {
  render() {
    return (
      <div className="mt-2">
        <PageHader currentPageName="Add New Categor" />
        <CategoryForm />
      </div>
    );
  }
}

export default AddCategory;
