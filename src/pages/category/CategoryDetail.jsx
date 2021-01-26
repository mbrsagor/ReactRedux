import React, { Component } from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHader";
import { detailCategory } from "../../store/actions/categoryAction";

class CategoryDetail extends Component {
  componentDidMount() {
    this.props.detailCategory();
  }

  render() {
    return (
      <div>
        <PageHeader currentPageName="Category detail page" />
        <div className="row">
          <div className="col-md-12">
            <h2>Category Name</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { detailCategory })(CategoryDetail);
