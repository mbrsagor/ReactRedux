import React, { Component } from "react";
import { connect } from "react-redux";
import PostHeader from "../components/PageHader";
import { fetchPost } from "../store/actions/postAction";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    let { posts } = this.props;
    console.log(posts.results);
    return (
      <div>
        <PostHeader currentPageName="Post Page" />
        <div className="row">
          <table className="table table-striped table-border mt-5">
            <thead>
              <tr>
                <th>Post title</th>
                <th>Category Name</th>
                <th>Date</th>
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
                      <td>{post.post_category.name}</td>
                      <td>{post.created_at}</td>
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
