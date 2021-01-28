import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";

import { fetchCateogry, deleteCategory } from "../store/actions/categoryAction";

class CateogryList extends Component {
  componentDidMount() {
    document.title = "Category list page";
    this.props.fetchCateogry();
  }

  componentDidUpdate() {
    this.props.fetchCateogry();
  }

  render() {
    let { categories } = this.props;
    return (
      <div className="row">
        <table className="table table-striped category_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Parent</th>
              <th>Order</th>
              <th>Status</th>
              <th>Created</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.results &&
              categories.results.map((cateogry, index) => {
                return (
                  <tr key={index}>
                    <td>{cateogry.name}</td>
                    <td>
                      {cateogry.parent.name ? (
                        <span>{cateogry.parent.name}</span>
                      ) : (
                        <p>No parent</p>
                      )}
                    </td>
                    <td>{cateogry.order}</td>
                    <td>
                      {cateogry.isActive ? (
                        <span className="bg-success text-light p-1">
                          Active
                        </span>
                      ) : (
                        <span className="bg-warning text-light p-1">
                          Deactive
                        </span>
                      )}
                    </td>
                    <td>{cateogry.created_at}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-success btn-sm mr-2"
                        to={`/category-detail/${cateogry.id}`}
                      >
                        <FeatherIcon icon="eye" />
                      </Link>
                      <Link to="/" className="btn btn-info btn-sm mr-2">
                        <FeatherIcon icon="edit" />
                      </Link>
                      <button
                        onClick={() => this.props.deleteCategory(cateogry.id)}
                        className="btn btn-danger btn-sm mr-2"
                      >
                        <FeatherIcon icon="trash" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { fetchCateogry, deleteCategory })(
  CateogryList
);
