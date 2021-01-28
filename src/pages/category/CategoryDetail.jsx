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
            <h2>Category {category ? category.name : "No cateogry found"}</h2>
            <p>{category ? category.parent.name : "No cateogry found"}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories.category,
});

export default connect(mapStateToProps, { detailCategory })(CategoryDetail);
