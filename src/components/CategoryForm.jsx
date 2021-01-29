import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory, fetchCateogry } from "../store/actions/categoryAction";

class CategoryForm extends Component {

  componentDidMount() {
    this.props.fetchCateogry()
  }

  state = {
    name: "",
    parent: "",
    order: 0,
    isActive: true
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createCategory(this.state);
    this.setState({
      name: "",
      order: 0,
    });
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { name, parent, order, isActive } = this.state;
    let { categories } = this.props;
    // console.log(message);
    return (
      <div className="row">
        <div className="col-md-6 offset-3 mt-3">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Cateogry</h4>
              <p>Message: {categories && categories.message}</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Category name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.changeHandler}
                    className="form-control"
                    placeholder="Enter category name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="parent">Select Category</label>
                  <select
                    className="form-control"
                    name="parent"
                    id="parent"
                    value={parent}
                    onChange={this.changeHandler}
                  >
                    {categories.results &&
                      categories.results.map((category, index) => {
                        return (
                          <option key={index} value={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="order">Category order now</label>
                  <input
                    type="number"
                    id="order"
                    name="order"
                    value={order}
                    onChange={this.changeHandler}
                    className="form-control"
                    placeholder="Enter category ordring number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="order">Is Active</label>
                  <input
                    type="checkbox"
                    value={isActive}
                    onChange={this.changeHandler}
                  />
                </div>
                <button className="btn btn-success btn-sm">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  message: state.message
})

export default connect(mapStateToProps, { createCategory, fetchCateogry })(CategoryForm);
