import React, { Component } from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHader";
import { detailCategory } from "../../store/actions/categoryAction";

class CategoryDetail extends Component {
  componentDidMount() {
    document.title = "Category Detail";
    this.props.detailCategory(this.props.match.params.id);
  }

  render() {
    const { category } = this.props;
    console.log(category);
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

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { detailCategory })(CategoryDetail);
