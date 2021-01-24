import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PageHader from "../../components/PageHader";
import { fetchPost } from "../../store/actions/postAction";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    let { posts } = this.props;
    // console.log(posts.results);
    return (
      <div>
        <PageHader currentPageName="Post list Page" />
        <div className="row mt-2">
          <div className="col-md-3"></div>
          <div className="col-md-9 text-right">
            <Link className="btn btn-success btn-sm" to="/">
              Add New Post
            </Link>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-border mt-3">
            <thead>
              <tr>
                <th>Post title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Publish Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.results &&
                posts.results.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <p>{post.title}</p>
                      </td>
                      <td>
                        <p>{post.author.username}</p>
                      </td>
                      <td>{post.post_category.name}</td>
                      <td>{post.created_at}</td>
                      <td>
                        <Link className="btn btn-info btn-sm mr-2" to="/">
                          Details
                        </Link>
                        <button className="btn btn-success btn-sm mr-2">
                          Update
                        </button>
                        <button className="btn btn-danger btn-sm mr-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPost })(Post);
