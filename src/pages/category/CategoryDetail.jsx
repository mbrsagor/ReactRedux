import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import PageHeader from "../../components/PageHader";
import { detailCategory } from "../../store/actions/categoryAction";

class CategoryDetail extends Component {
  componentDidMount() {
    document.title = "Category Detail";
    this.props.detailCategory(this.props.match.params.id);
  }

  render() {
    const { category } = this.props;
    // console.log(category);
    return (
      <div>
        <PageHeader currentPageName="Category detail page" />
        <div className="row">
          <Link
            className="btn btn-success btn-sm mt-2 ml-2"
            to="/category-list">
            <FeatherIcon icon="skip-back" /> Back
          </Link>
          <div className="col-md-12 mt-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Category Detail</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped table-border">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Parent</th>
                      <th>Order</th>
                      <th>Status</th>
                      <th>Created Date</th>
                      <th>Updated Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{category && category.id}</th>
                      <th>{category ? category.name : "No cateogry found"}</th>
                      <th>
                        {category ? category.parent.name : "No cateogry found"}
                      </th>
                      <th>{category ? category.order : "No order found"}</th>
                      <th>{category ? category.isActive ? <span>Active</span> : <span>Deactive</span> : "No order found"}</th>
                       <th>{category ? category.created_at : "No date found"}</th>
                       <th>{category ? category.updated_at : "No date found"}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
