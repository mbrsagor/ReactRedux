import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postAction";

class PostForm extends Component {
  state = {
    author: null,
    title: "",
    post_category: "",
    description: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      title: "",
      post_category: "",
      description: "",
    });
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title, author, post_category, description } = this.state;
    const { auth } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 offset-3 mt-3">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Post</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitHandler}>
                <input
                  type="hidden"
                  name="author"
                  value={author}
                />
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
                    value={post_category}
                    onChange={this.changeHandler}
                  >
                    <option value={1}>Laptop</option>
                    <option value={2}>MacBook</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    className="form-control"
                    onChange={this.changeHandler}
                    id="description"
                    cols="30"
                    rows="5"
                    value={description}
                  ></textarea>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createPost })(PostForm);
