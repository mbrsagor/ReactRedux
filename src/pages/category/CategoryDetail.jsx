import React, { Component } from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHader";
import { detailCategory } from "../../store/actions/categoryAction";

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    document.title = "Category Detail";
    this.props.detailCategory(this.state.id);
  }

  render() {
      const { categories } = this.props;
      console.log(categories);
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
  categories: state.categories,
});

export default connect(mapStateToProps, { detailCategory })(CategoryDetail);
