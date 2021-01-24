import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postAction";

class PostForm extends Component {
  state = {
    title: "",
    post_category: "",
    description: "",
    image: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title, post_category, description, image } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 offset-3 mt-3">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Post</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label htmlFor="title">Post Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={this.changeHandler}
                    className="form-control"
                    placeholder="Enter Post title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="post_category">Select Category</label>
                  <select
                    className="form-control"
                    name="post_category"
                    id="post_category"
                  >
                    <option value="">New</option>
                    <option value="">New</option>
                    <option value="">New</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    className="form-control"
                    onChange={description}
                    id="description"
                    cols="30"
                    rows="5"
                    value={post_category}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input type="file" className="form-control" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
